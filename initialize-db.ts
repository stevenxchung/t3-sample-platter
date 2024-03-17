import { createClient } from "@libsql/client";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
  url: `${process.env.DATABASE_URL ?? ""}`,
  authToken: `${process.env.DATABASE_TOKEN ?? ""}`,
});

// void client.execute(`
//   DROP TABLE TwitterLitePost;
// `);

void client.execute(`
  CREATE TABLE TwitterLitePost (
    id TEXT UNIQUE,
    createdAt DATETIME,
    content TEXT,
    authorId TEXT PRIMARY KEY
  );
`);

console.log("Database table(s) created!");
