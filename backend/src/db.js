import pg from "pg";

export const pool = new pg.Pool({
  user: "postgres",
  password: "fabio",
  host: "localhost",
  port: 5433,
  database: "tasksdb",
});
