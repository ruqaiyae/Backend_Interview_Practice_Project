CREATE TABLE "Users" (
  "usersId" serial PRIMARY KEY,
  "firstName" text,
  "lastName" text,
  "username" text UNIQUE,
  "hashedPassword" text,
  "createdAt" timestamptz DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "Movies" (
  "movieId" serial PRIMARY KEY,
  "userId" integer,
  "title" text,
  "summary" text,
  "link" text,
  "rating" integer,
  "createdAt" timestamptz DEFAULT (CURRENT_TIMESTAMP),
  "updatedAt" timestamptz DEFAULT (CURRENT_timestamp)
);

ALTER TABLE "Movies" ADD FOREIGN KEY ("userId") REFERENCES "Users" ("usersId");
