const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// Enable CORS for all routes
const cors = require("cors");
app.use(cors());

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "restauranttest",
	password: "1234",
	port: 5432, // default PostgreSQL port
});

// Test DB connection
pool
	.connect()
	.then(() => console.log("Connected to PostgreSQL"))
	.catch((err) => console.error("Connection error", err.stack));

// GET endpoint for Combo menu items
app.get("/menu/combo", async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT 
          md.lang_code,
          md.title,
          md.description,
          mp.price::TEXT,
          mi.code
        FROM menu_items mi
        JOIN menu_descriptions md ON mi.id = md.item_id
        JOIN menu_prices mp ON mi.id = mp.item_id
        JOIN menu_categories mc ON mi.category_id = mc.id
        WHERE mc.category_name = 'Combo'`
		);
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error fetching menu items");
	}
});

// GET endpoint for Main Dishes menu items
app.get("/menu/main", async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT 
          md.lang_code,
          md.title,
          md.description,
          mp.price::TEXT,
          mi.code
        FROM menu_items mi
        JOIN menu_descriptions md ON mi.id = md.item_id
        JOIN menu_prices mp ON mi.id = mp.item_id
        JOIN menu_categories mc ON mi.category_id = mc.id
        WHERE mc.category_name = 'Main Dishes'`
		);
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error fetching menu items");
	}
});

// GET endpoint for Soup & Noodles menu items
app.get("/menu/soup&noodles", async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT 
          md.lang_code,
          md.title,
          md.description,
          mp.price::TEXT,
          mi.code
        FROM menu_items mi
        JOIN menu_descriptions md ON mi.id = md.item_id
        JOIN menu_prices mp ON mi.id = mp.item_id
        JOIN menu_categories mc ON mi.category_id = mc.id
        WHERE mc.category_name = 'Soup & Noodles'`
		);
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error fetching menu items");
	}
});

// GET endpoint for Specials & Extras menu items
app.get("/menu/specials&extras", async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT 
          md.lang_code,
          md.title,
          md.description,
          mp.price::TEXT,
          mi.code
        FROM menu_items mi
        JOIN menu_descriptions md ON mi.id = md.item_id
        JOIN menu_prices mp ON mi.id = mp.item_id
        JOIN menu_categories mc ON mi.category_id = mc.id
        WHERE mc.category_name = 'Specials & Extras'`
		);
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error fetching menu items");
	}
});

// GET endpoint for Desserts & Drinks menu items
app.get("/menu/desserts&drinks", async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT 
          md.lang_code,
          md.title,
          md.description,
          mp.price::TEXT,
          mi.code
        FROM menu_items mi
        JOIN menu_descriptions md ON mi.id = md.item_id
        JOIN menu_prices mp ON mi.id = mp.item_id
        JOIN menu_categories mc ON mi.category_id = mc.id
        WHERE mc.category_name = 'Desserts & Drinks'`
		);
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error fetching menu items");
	}
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
