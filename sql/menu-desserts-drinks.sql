-- Main Menu Items

INSERT INTO menu_items (category_id, code) VALUES
(3, 'menu.desserts.drinks.leche.flan.title'),
(3, 'menu.desserts.drinks.buko.pandan.title'),
(3, 'menu.desserts.drinks.halo.halo.title'),
(3, 'menu.desserts.drinks.coffee.jelly.title'),
(3, 'menu.desserts.drinks.ice.cream.title'),
(3, 'menu.desserts.drinks.palamig.title'),
(3, 'menu.desserts.drinks.water.bottle.title'),
(3, 'menu.desserts.drinks.coffee.title'),
(3, 'menu.desserts.drinks.soft.drinks.title');


INSERT INTO menu_descriptions (item_id, lang_code, title, description) VALUES
(3,'en','Leche Flan','caramel custard'),
(3,'fr','Leche Flan','Crème caramel'),
(3,'tl','Leche Flan','caramel Custard'),
(3,'en','Buko Pandan','shredded young coconut (buko), pandan flavored jelly, sweetened cream'),
(3,'fr','Buko Pandan','jeune noix de coco râpée (buko), gelée aromatisée au pandan, crème sucrée'),
(3,'tl','Buko Pandan','nilaga na buko, pandan flavored jelly, pinatamis na cream'),
(3,'en','Halo-Halo','shaved ice, sweetened fruits, jellies and beans, coconut or evaporated milk'),
(3,'fr','Halo-Halo','glace pilée, fruits confits, gelées et haricots, lait de coco ou lait évaporé'),
(3,'tl','Halo-Halo','nilaga na yelo, pinatamis na prutas, jellies at beans, gata o evaporated milk'),
(3,'en','Coffee Jelly',''),
(3,'fr','Gelée de café',''),
(3,'tl','Coffee Jelly',''),
(3,'en','Ice Cream',''),
(3,'fr','Crème glacée',''),
(3,'tl','Ice Cream',''),
(3,'en','Palamig','tapioca pearls, sweet agar-agar jelly, fruit syrups, sweetened cold flavored water'),
(3,'fr','Palamig','perles de tapioca, gelée d'\'agar-agar sucrée, sirops de fruits, eau froide aromatisée sucrée'),
(3,'tl','Palamig','tapioca pearls, matamis na agar-agar jelly, fruit syrups, pinatamis na malamig na tubig na may lasa'),
(3,'en','Water Bottle',''),
(3,'fr','Bouteille d'\'eau',''),
(3,'tl','Water Bottle',''),
(3,'en','Coffee',''),
(3,'fr','Café',''),
(3,'tl','Kape',''),
(3,'en','Soft Drinks',''),
(3,'fr','Boissons gazeuses',''),
(3,'tl','Soft Drinks','')



INSERT INTO menu_prices (item_id, price) VALUES
(1, 3.99),
(2, 3.99),
(3, 11.99),
(4, 3.99),
(5, 3.99),
(6, 4.99),
(7, 1.99),
(8, 1.99),
(9, 1.99);