-- Main Menu Items

INSERT INTO menu_items (category_id, code) VALUES
(3, 'menu.soups.noodles.pork.sinigang.title'),
(3, 'menu.soups.noodles.shrimp.sinigang.title'),
(3, 'menu.soups.noodles.balbacua.title'),
(3, 'menu.soups.noodles.bulalo.title'),
(3, 'menu.soups.noodles.mami.title'),
(3, 'menu.soups.noodles.miki.title'),
(3, 'menu.soups.noodles.spaghetti.title'),
(3, 'menu.soups.noodles.palabok.title'),
(3, 'menu.soups.noodles.pancit.bihon.title'),
(3, 'menu.soups.noodles.pancit.canton.title'),
(3, 'menu.soups.noodles.pancit.bami.title');


INSERT INTO menu_descriptions (item_id, lang_code, title, description) VALUES
(3,'en','Pork Sinigang','pork sour and savory soup'),
(3,'fr','Sinigang de Porc','soupe de porc aigre et salée'),
(3,'tl','Sinigang na Baboy','maasim at malinamnam na sabaw ng baboy'),
(3,'en','Shrimp Sinigang','shrimp sour and savory soup'),
(3,'fr','Sinigang de Crevettes','soupe de crevettes aigre et salée'),
(3,'tl','Sinigang na Hipon','maasim at malinamnam na sabaw ng hipon'),
(3,'en','Balbacua','beef stew'),
(3,'fr','Balbacua','ragoût de bœuf'),
(3,'tl','Balbacua','nilagang baka'),
(3,'en','Bulalo','beef marrow and shanks soup'),
(3,'fr','Bulalo','moelle de bœuf et soupe de jarrets'),
(3,'tl','Bulalo','sabaw ng buto at binti ng baka'),
(3,'en','Mami','wheat flour noodles soup'),
(3,'fr','Mami','soupe de nouilles de blé'),
(3,'tl','Mami','sabaw ng pansit na gawa sa harina ng trigo'),
(3,'en','Miki','egg noodles soup'),
(3,'fr','Miki','soupe de nouilles aux œufs'),
(3,'tl','Miki','sabaw ng pansit na may itlog'),
(3,'en','Spaghetti',''),
(3,'fr','Spaghetti',''),
(3,'tl','Spaghetti',''),
(3,'en','Palabok','starchy noodles'),
(3,'fr','Palabok','nouilles féculentes'),
(3,'tl','Palabok','malagkit na pansit'),
(3,'en','Pancit Bihon','rice vermicelli fried nooodles, vegetables, meat'),
(3,'fr','Pancit Bihon','nouilles de riz vermicelles frites, légumes, viande'),
(3,'tl','Pancit Bihon','pritong bihon, gulay, karne'),
(3,'en','Pancit Canton','thick egg noodle stir fried'),
(3,'fr','Pancit Canton','nouilles épaisses aux œufs sautées'),
(3,'tl','Pancit Canton','makapal na pansit canton na stir-fried'),
(3,'en','Pancit Bam-I','rice and wheat stir fried noodles'),
(3,'fr','Pancit Bam-I','nouilles de riz et de blé sautées'),
(3,'tl','Pancit Bam-I','pritong pansit na gawa sa bigas at trigo');



INSERT INTO menu_prices (item_id, price) VALUES
(1, 16.99),
(2, 16.99),
(3, 19.99),
(4, 21.99),
(5, 10.99),
(6, 10.99),
(7, 10.99),
(8, 10.99),
(9, 11.99),
(10, 12.99),
(11, 12.99);