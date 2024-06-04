CREATE TABLE IF NOT EXISTS "pillow_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"price" varchar NOT NULL,
	"imageUrl" varchar NOT NULL,
	"pillowId" uuid NOT NULL
);
