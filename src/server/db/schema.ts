import {
    pgTable,
    serial,
    uuid,
    varchar,
    numeric,
    timestamp,
    text,
    integer,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const User = pgTable("user", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    email: varchar("email").unique().notNull(),
    phone: varchar("phone").notNull(),
    userNo: varchar("user_no").notNull(),
});

export const Orders = pgTable("orders", {
    id: serial("id").primaryKey(),
    customerId: serial("customer_id").notNull(),
    customerName: varchar("customer_name").notNull(),
    orderDate: timestamp("order_date").notNull().defaultNow(),
    total: numeric("total").notNull(),
    status: varchar("status").notNull(),
});

export const Order = pgTable("order", {
    id: serial("id").primaryKey(),
    customerId: integer("customer_id") // Change customerId to text to match User.id
        .notNull()
        .references(() => User.id),
    customerName: varchar("customer_name").notNull(),
    orderDate: timestamp("order_date").notNull().defaultNow(),
    total: numeric("total").notNull(),
    status: varchar("status").notNull(),
});

// export const User = pgTable("user", {
//     id: text("id").primaryKey(),
//     name: varchar("name").notNull(),
//     email: varchar("email").unique().notNull(),
//     phone: varchar("phone").notNull(),
//     Users: varchar("user_no").notNull(),
// });

// export const OrderS = pgTable("order", {
//     id: serial("id").primaryKey(),
//     customerId: text("customer_id") // Change customerId to text to match User.id
//         .notNull()
//         .references(() => User.id, { onDelete: "cascade" }),
//     customerName: varchar("customer_name").notNull(),
//     orderDate: timestamp("order_date").notNull().defaultNow(),
//     total: numeric("total").notNull(),
//     status: varchar("status").notNull(),
// });

// // Define the relationship to automatically populate customerName
// export const OrderRelations = relations(OrderS, ({ one }) => ({
//     customer: one(User, {
//         fields: [OrderS.customerId],
//         references: [User.id],
//     }),
// }));
