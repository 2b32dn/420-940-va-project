-- Insert Combo Menu Items

-- Insert Combo Menu Codenames
INSERT INTO menu_items (category_id, code) VALUES
(1, 'menu.combo.m.title'),
(1, 'menu.combo.o.title'),
(1, 'menu.combo.r.title'),
(1, 'menu.combo.e.title'),
(1, 'menu.combo.n.title'),
(1, 'menu.combo.a.title'),
(1, 'menu.combo.h.title'),
(1, 'menu.combo.j.title'),
(1, 'menu.combo.h.title');

-- Insert Combo Menu Title and Descriptions
INSERT INTO menu_descriptions (item_id, lang_code, title, description) VALUES
(1, 'en', 'Spaghetti with Two Fried Chicken Pieces', 'Banana ketchup, ground beef or hotdogs, spaghetti noodles, garlic, seasoned fried chicken'),
(1, 'fr', 'Spaghetti avec deux morceaux de poulet frit', 'Ketchup à la banane, bœuf haché ou hot-dogs, nouilles spaghetti, ail, poulet frit assaisonné'),
(1, 'tl', 'Spaghetti na may Dalawang Pritong Manok', 'Saging na ketchup, giniling na karne o hotdog, spaghetti noodles, bawang, tinimplahang pritong manok'),
(2, 'en', 'Palabok with One Pork BBQ Skewer', 'Rice noodles, shrimp sauce (stock and annatto), crushed chicharron, boiled egg'),
(2, 'fr', 'Palabok avec une brochette de porc BBQ', 'Nouilles de riz, sauce aux crevettes (bouillon et annatto), chicharron écrasé, œuf dur'),
(2, 'tl', 'Palabok na may Isang BBQ na Baboy', 'Bihon, shrimp sauce mula sa sabaw at annatto, durug na chicharon, nilagang itlog'),
(3, 'en', 'Pancit with Fried Chicken & Pork BBQ Skewer', 'Bihon or canton noodles, soy sauce, vegetables, fried chicken, pork bbq marinade'),
(3, 'fr', 'Pancit avec poulet frit et brochette de porc BBQ', 'Nouilles bihon ou canton, sauce soja, légumes, poulet frit, marinade BBQ au porc'),
(3, 'tl', 'Pancit na may Manok at BBQ na Baboy', 'Bihon o canton noodles, toyo, gulay, pritong manok, BBQ marinade ng baboy');
(4, 'en', 'Rice with One Fried Chicken & Fish Fillet','White rice, seasoned fried chicken, breaded fish fillet, lemon or calamansi for garnish'),
(4, 'fr', 'Riz avec un morceau de poulet frit et filet de poisson','riz blanc, poulet frit assaisonné, filet de poisson pané, citron ou calamansi pour la garniture'),
(4, 'tl', 'Kanin na may Isang Fried Chicken at Fish Fillet','puting kanin, tinimplahang fried chicken, tinapay na fish fillet, lemon o calamansi para sa palamuti'),
(5, 'en', 'Rice with Two Fried Chicken & Pork BBQ Skewer','White rice, seasoned fried chicken, pork BBQ marinade (banana ketchup, soy sauce, brown sugar, garlic)'),
(5, 'fr', 'Riz avec deux morceaux de poulet frit et une brochette de porc BBQ','riz blanc, poulet frit assaisonné, marinade de porc BBQ (ketchup banane, sauce soja, cassonade, ail)'),
(5, 'tl', 'Kanin na may Dalawang Fried Chicken at Pork BBQ Skewer','puting kanin, tinimplahang fried chicken, pork BBQ marinade (banana ketchup, toyo, brown sugar, bawang)'),
(6, 'en', 'Rice with Fish Fillet & Chicken BBQ','white rice, chicken BBQ (marinated in calamansi, soy sauce, brown sugar), breaded fish fillet, dipping sauce'),
(6, 'fr', 'Riz avec filet de poisson et poulet BBQ','riz blanc, poulet BBQ (mariné dans calamansi, sauce soja, cassonade), filet de poisson pané, sauce trempette'),
(6, 'tl', 'Kanin na may Fish Fillet at Chicken BBQ','puting kanin, chicken BBQ (minarinade sa calamansi, toyo, brown sugar), tinapay na fish fillet, sawsawan'),
(7, 'en', 'Rice with Pork BBQ Skewer & Chicken BBQ','White rice, pork BBQ, chicken BBQ, marinade (soy sauce, vinegar, garlic, brown sugar), achuete oil'),
(7, 'fr', 'Riz avec brochette de porc BBQ et poulet BBQ','riz blanc, porc BBQ, poulet BBQ, marinade (sauce soja, vinaigre, ail, cassonade), huile d\''achuete'),
(7, 'tl', 'Kanin na may Pork BBQ Skewer at Chicken BBQ','puting kanin, pork BBQ, chicken BBQ, marinade (toyo, suka, bawang, brown sugar), achuete oil'),
(8, 'en', 'Rice with Chicken BBQ','white rice, chicken BBQ (calamansi, soy sauce, brown sugar, garlic), annatto oil for glaze'),
(8, 'fr', 'Riz avec poulet BBQ','riz blanc, poulet BBQ (calamansi, sauce soja, cassonade, ail), huile de rocou pour le glaçage'),
(8, 'tl', 'Kanin na may Chicken BBQ','puting kanin, chicken BBQ (calamansi, toyo, brown sugar, bawang), annatto oil para sa glaze');

-- Insert Prices
INSERT INTO menu_prices (item_id, price) VALUES
(1, 14.99),
(2, 14.99),
(3, 15.99),
(4, 11.99),
(5, 14.99),
(6, 15.50),
(7, 15.50),
(8, 10.99);