import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: "./db",
  schema: "./src/database/*.schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: `file:./src/database/db/${process.env.DB_FILE_NAME}`
  }
})
