import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/server/db/schema.ts",
    dialect: "postgresql",
    out: "./src/server/db/migrations",
    dbCredentials: {
        url: process.env.NEON_DATABASE_URL!,
    },
    verbose: true,
    strict: true,
});
