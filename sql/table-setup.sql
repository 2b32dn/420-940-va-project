-- 1. Categories Table
CREATE TABLE menu_categories (
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);

-- 2. Menu Items Table
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES menu_categories(id),
  code VARCHAR(250) UNIQUE NOT NULL 
);

-- 3. Descriptions (title + desc per language)
CREATE TABLE menu_descriptions (
  id SERIAL PRIMARY KEY,
  item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  lang_code VARCHAR(2) NOT NULL, 
  title TEXT NOT NULL,
  description TEXT NOT NULL
);

-- 4. Prices
CREATE TABLE menu_prices (
  id SERIAL PRIMARY KEY,
  item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  price NUMERIC(5, 2) NOT NULL
);

-- 5. Image Descriptions
CREATE TABLE menu_img_descriptions (
  id SERIAL PRIMARY KEY,
  item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  img_desc TEXT
);

-- Insert Sample Categories
INSERT INTO menu_categories (category_name) VALUES 
('Combo'), ('Main Dishes'), ('Soup & Noodles'), ('Specials & Extras'), ('Desserts & Drinks');

ALTER TABLE menu_descriptions ADD CONSTRAINT unique_item_lang UNIQUE (item_id, lang_code);