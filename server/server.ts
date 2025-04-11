import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { authMiddleware } from './lib/authorization-middleware.js';

const hashKey = process.env.TOKEN_SECRET;
if (!hashKey) throw new Error('TOKEN_SECRET not found in .env');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();
app.use(express.json());


function validateBody(
  property: string,
  propName: string
): void {
  if (!property) throw new ClientError(400, `${propName} required`);
}

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { firstName, lastName, username, password } = req.body;
    validateBody(firstName, 'First name');
    validateBody(lastName, 'Last name');
    validateBody(username, 'Username');
    validateBody(password, 'Password');
    const hashedPassword = await argon2.hash(password);
    const sql = `
                insert into "Users" ("firstName", "lastName", "username", "hashedPassword")
                values ($1, $2, $3, $4)
                returning "firstName", "lastName", "username", "userId", "createdAt";
                `;

    const params = [firstName, lastName, username, hashedPassword];
    const response = await db.query(sql, params);
    // for sign-in on sign-up
    const user = response.rows[0];
    const { userId } = user;
    const payload = { firstName, lastName, username, userId };
    const token = jwt.sign(payload, hashKey);
    console.log('payload', payload);

    res.status(201).json({ user: payload, token });
  } catch (err) {
    next(err);
  }
});

type Auth = {
  username: string;
  password: string;
};

app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    const { username, password } = req.body as Partial<Auth>;
    if (!username || !password) {
      throw new ClientError(401, 'invalid login');
    }
    const sql = `
                select * from "Users"
                where "username" = $1;
                `;
    const response = await db.query(sql, [username]);
    const user = response.rows[0];
    if (!user) throw new ClientError(401, 'invalid login');
    if (!(await argon2.verify(user.hashedPassword, password))) {
      throw new ClientError(401, 'invalid login');
    } else {
      delete user.hashedPassword;
      const payload = user;
      const token = jwt.sign(payload, hashKey);
      res.json({ user: payload, token });
    }
  } catch (err) {
    next(err);
  }
});

type MovieRating = {
  movieId: number;
  userId: number;
  title: string;
  summary: string;
  link: string;
  rating: number
}

app.post('/api/auth/movie-rating/add', authMiddleware, async (req, res, next) => {
  try {
    const { title, summary, link, rating } = req.body;
    validateBody(title, 'Title');
    validateBody(summary, 'Summary');
    validateBody(link, 'Link');
    if (!rating && rating < 1 && rating > 5) {
  throw new ClientError(400, 'Rating must be a number between 1 and 5')
}
    const sql = `
                insert into "Movies" ("userId", "title", "summary", "link", "rating")
                values ($1, $2, $3, $4, $5)
                returning *;
                `;
    const params = [req.user?.userId, title, summary, link, rating];
    const response = await db.query(sql, params);
    const movieRating = response.rows[0] as MovieRating;
    res.status(201).json(movieRating);
  } catch (err) {
    next(err);
  }
});


function validateMovieId(id: number): void {
  if (!Number.isInteger(id) || id < 1) {
    throw new ClientError(400, 'MovieId must be a positive integer');
  }
}

app.put(
  '/api/auth/movie-rating/:movieId/edit',
  authMiddleware,
  async (req, res, next) => {
    try {
      const movieId = Number(req.params.movieId);
      validateMovieId(movieId);
      const { title, summary, link, rating } = req.body;
      validateBody(title, 'title');
      validateBody(summary, 'Summary');
      validateBody(link, 'Link');
      if (!rating && rating < 1 && rating > 5) {
        throw new ClientError(400, 'Rating must be a number between 1 and 5')
      }
      const sql = `update "Movies"
                  set "userId" = $1, "title" = $2, "summary" = $3, "link" = $4, rating = $5
                  where "movieId" = $6
                  returning *;
                  `;
                  const params = [req.user?.userId, title, summary, link, rating, movieId];
      const response = await db.query<MovieRating>(sql, params);
      const story = response.rows[0];
      res.json(story);
    } catch (err) {
      next(err);
    }
  }
);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});