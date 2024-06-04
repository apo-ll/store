import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const product = pgTable("product", {
    id: uuid("id").primaryKey(),
    name: varchar("name").notNull(),
    price: varchar("price").notNull(),
});
