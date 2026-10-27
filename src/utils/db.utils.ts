import { drizzle } from "drizzle-orm/bun-sqlite";

//Defining SQLite connection
export const db = drizzle(process.env.DB_FILE_NAME!)
