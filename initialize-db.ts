import { createClient } from "@libsql/client";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
  url: `${process.env.DATABASE_URL ?? ""}`,
  authToken: `${process.env.DATABASE_TOKEN ?? ""}`,
});

const initializeDB = async () => {
  // await client.execute(`
  //   DROP TABLE TwitterLitePost;
  // `);

  await client.execute(`
    CREATE TABLE TwitterLitePost (
      id PRIMARY KEY,
      createdAt DATETIME,
      content TEXT,
      authorId TEXT
    );
  `);

  await client.execute(
    `CREATE INDEX idx_author_id ON TwitterLitePost (authorId);`
  );
};

void initializeDB();

console.log("Database table(s) created!");
