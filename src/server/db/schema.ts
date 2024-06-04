import { pgTable, serial, uuid, varchar } from "drizzle-orm/pg-core";

export const pillows = pgTable("pillows", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    price: varchar("price").notNull(),
    imageUrl: varchar("imageUrl").notNull(),
});

export const PillowProducts = pgTable("pillow_products", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    price: varchar("price").notNull(),
    imageUrl: varchar("imageUrl").notNull(),
    pillowId: uuid("pillowId").notNull(),
});

export const Producter = pgTable("producter", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    price: varchar("price").notNull(),
    imageUrl: varchar("imageUrl").notNull(),
});
