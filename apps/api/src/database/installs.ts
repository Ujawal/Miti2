import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const installTable = sqliteTable("install", {
  id: text("id").notNull(),
  user: text("user_id").notNull(),
  installedOn: integer("installed_on").notNull(),
});
