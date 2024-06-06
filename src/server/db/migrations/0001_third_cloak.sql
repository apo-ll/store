CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_id" serial NOT NULL,
	"customer_name" varchar NOT NULL,
	"order_date" timestamp DEFAULT now() NOT NULL,
	"total" numeric NOT NULL,
	"status" varchar NOT NULL
);
