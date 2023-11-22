-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "shoppingList" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80),
  "quantity" float4,
  "unit" VARCHAR(20),
  "bought" BOOLEAN DEFAULT false
);

INSERT INTO "shoppingList" 
  ("name", "quantity", "unit")
  VALUES
  ('Apples', 4.5, 'lbs');
  