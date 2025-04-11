import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

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


app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});