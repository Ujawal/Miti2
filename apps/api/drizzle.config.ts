import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit";

export default defineConfig(
  process.env.LOCAL_DB_PATH
    ? ({
        schema: "./src/database/schema.ts",
        dialect: "sqlite",
        dbCredentials: {
          url: process.env.LOCAL_DB_PATH,
        },
      } satisfies Config)
    : ({
        schema: "./src/database/schema.ts",
        out: "./src/database/migrations",
        dialect: "sqlite",
        driver: "d1",
        dbCredentials: {
          wranglerConfigPath: __dirname + "/wrangler.toml",
          dbName: "demo",
        },
      } satisfies Config)
);
