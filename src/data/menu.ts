export interface MenuItem {
  name: string;
  description?: { fr: string; en: string };
  price: string;
  highlight?: boolean;
}

export interface CustomizationSection {
  title: { fr: string; en: string };
  items: string[];
}

export interface MenuCategory {
  id: string;
  name: { fr: string; en: string };
  note?: { fr: string; en: string };
  items: MenuItem[];
  customizations?: CustomizationSection[];
  extras?: { name: string; price: string }[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'naan',
    name: { fr: 'Naan Sandwich', en: 'Naan Sandwich' },
    note: { fr: 'Pain naan frais cuit au tandoor avec fromage fondu', en: 'Fresh naan bread baked in tandoor with melted cheese' },
    items: [
      { name: 'Naan Kebab', description: { fr: 'Cheese naan, kebab savoureux, cheddar, crudités fraîches', en: 'Cheese naan, flavorful kebab, cheddar, fresh salad' }, price: '8.00', highlight: true },
      { name: 'Naan Tandoori', description: { fr: 'Cheese naan, poulet mariné tandoori, cheddar, crudités', en: 'Cheese naan, tandoori marinated chicken, cheddar, salad' }, price: '8.00', highlight: true },
      { name: 'Naan Curry', description: { fr: 'Cheese naan, poulet au curry délicat, cheddar, crudités', en: 'Cheese naan, tender curry chicken, cheddar, salad' }, price: '8.00' },
      { name: 'Triple Steaks', description: { fr: 'Cheese naan, 3 steaks hachés pur bœuf, cheddar, crudités', en: 'Cheese naan, 3 beef patties, cheddar, fresh salad' }, price: '8.00' },
      { name: 'Naan Adana', description: { fr: 'Cheese naan, kebab adana épicé, cheddar, crudités', en: 'Cheese naan, spiced adana kebab, cheddar, salad' }, price: '8.00' },
      { name: 'Naan Tenders', description: { fr: 'Cheese naan, aiguillettes croustillantes, cheddar, crudités', en: 'Cheese naan, crispy chicken tenders, cheddar, salad' }, price: '8.00' },
    ],
  },
  {
    id: 'plats',
    name: { fr: 'Spécialités Traditionnelles', en: 'Traditional Specialties' },
    note: { fr: 'Les grands classiques de la gastronomie afghane', en: 'The great classics of Afghan culinary tradition' },
    items: [
      { name: 'Qabuli Palao', description: { fr: 'Plat national — veau tendre, riz basmati parfumé, raisins secs, carottes caramélisées', en: 'National dish — tender veal, fragrant basmati rice, raisins, caramelized carrots' }, price: '10.00', highlight: true },
      { name: 'Mahicha Palao', description: { fr: 'Souris d’agneau fondante, riz parfumé aux épices douces, raisins secs, carottes', en: 'Slow-cooked lamb shank, spiced basmati rice, raisins, carrots' }, price: '15.00', highlight: true },
      { name: 'Mantoo', description: { fr: 'Raviolis afghans vapeur farcis à la viande hachée, sauce chaka (yaourt à l\'ail) et pois', en: 'Steamed Afghan dumplings filled with ground meat, chaka garlic yogurt sauce & split peas' }, price: '10.00', highlight: true },
      { name: 'Chapli Kabab', description: { fr: 'Galettes de viande hachée marinée, tomates, oignons, épices, servi avec naan frais', en: 'Marinated ground meat patties, fresh tomatoes, onions, spices, with hot naan' }, price: '8.00' },
      { name: 'Shami Kebab', description: { fr: 'Viande assaisonnée au masala afghan, piment doux, servi avec naan', en: 'Spiced meat patties with Afghan masala, mild peppers, with naan' }, price: '8.00' },
      { name: 'Afghani Kofta', description: { fr: 'Boulettes de viande mijotées dans une sauce masala parfumée, avec naan', en: 'Tender meatballs simmered in aromatic masala gravy, with naan' }, price: '10.00' },
      { name: 'Biryani', description: { fr: 'Poulet mariné, riz épicé safrané, piments doux et masala', en: 'Marinated chicken, fragrant spiced saffron rice, mild chili & masala' }, price: '8.00' },
      { name: 'Dopiaza', description: { fr: 'Viande d’agneau braisée aux oignons caramélisés et masala', en: 'Braised lamb in rich caramelized onion and masala sauce' }, price: '10.00' },
      { name: 'Qurma', description: { fr: 'Ragoût d’agneau parfumé, sauce masala onctueuse, chaka et pois', en: 'Aromatic lamb stew in rich masala sauce with chaka yogurt and peas' }, price: '10.00' },
      { name: 'Poisson Frit', description: { fr: 'Poisson mariné et doré, servi avec frites dorées et salade fraîche', en: 'Golden seasoned fish, served with crispy fries and fresh salad' }, price: '14.00' },
      { name: 'Bamya', description: { fr: 'Ragoût végétarien traditionnel de gombos mijotés aux tomates et épices', en: 'Traditional vegetarian okra stew simmered in spiced tomato gravy' }, price: '6.00' },
      { name: 'Luba', description: { fr: 'Ragoût réconfortant de haricots et pois chiches au masala, avec naan', en: 'Comforting bean and chickpea stew in masala sauce, served with naan' }, price: '6.00' },
    ],
  },
  {
    id: 'brochettes',
    name: { fr: 'Nos Brochettes', en: 'Our Skewers' },
    note: { fr: 'Grillées à la flamme et assaisonnées selon la tradition', en: 'Flame-grilled and seasoned according to tradition' },
    items: [
      { name: 'Brochette d’Agneau (3 pièces)', description: { fr: 'Morceaux d’agneau marinés et grillés au feu', en: 'Tender lamb chunks marinated and flame-grilled' }, price: '10.00', highlight: true },
      { name: 'Brochette de Bœuf (3 pièces)', description: { fr: 'Bœuf sélectionné mariné aux épices douces', en: 'Select beef marinated in gentle Afghan spices' }, price: '10.00' },
      { name: 'Brochette Shami (2 pièces)', description: { fr: 'Brochettes de viande hachée assaisonnée', en: 'Seasoned minced meat skewers' }, price: '10.00' },
    ],
    extras: [
      { name: 'Naan Nature chaud', price: '1.00' },
      { name: 'Cheese Naan fondant', price: '2.50' },
      { name: 'Lassi maison', price: '3.00' },
    ],
  },
  {
    id: 'assiettes',
    name: { fr: 'Nos Assiettes', en: 'Our Platters' },
    note: { fr: 'Toutes servies généreusement avec frites & salade composée', en: 'All generously served with crispy fries & fresh mixed salad' },
    items: [
      { name: 'Assiette Kebab', description: { fr: 'Viande kebab émincée, frites maison, salade', en: 'Sliced kebab meat, fries, salad' }, price: '10.00' },
      { name: 'Assiette Poulet Curry', description: { fr: 'Poulet mijoté au curry, frites, salade', en: 'Curry chicken, fries, salad' }, price: '10.00' },
      { name: 'Assiette Poulet Tandoori', description: { fr: 'Poulet mariné tandoori grillé, frites, salade', en: 'Tandoori marinated chicken, fries, salad' }, price: '10.00' },
      { name: 'Assiette Côtelette', description: { fr: 'Côtelettes d’agneau grillées, frites, salade', en: 'Grilled lamb chops, fries, salad' }, price: '13.00', highlight: true },
      { name: 'Assiette Chicken Mixte', description: { fr: 'Curry & Tandoori combinés, frites, salade', en: 'Curry & Tandoori chicken combo, fries, salad' }, price: '12.00' },
      { name: 'Assiette Brochette Adana', description: { fr: 'Brochette adana épicée, frites, salade', en: 'Spicy adana skewer, fries, salad' }, price: '10.00' },
      { name: 'Assiette Agneau', description: { fr: 'Morceaux d’agneau grillés, frites, salade', en: 'Grilled lamb chunks, fries, salad' }, price: '12.00' },
      { name: 'Assiette Mixte Royale', description: { fr: 'Assortiment de nos meilleures viandes, frites, salade', en: 'Royal mixed selection of grilled meats, fries, salad' }, price: '12.00', highlight: true },
    ],
  },
  {
    id: 'tacos',
    name: { fr: 'Nos Tacos Français', en: 'Our French Tacos' },
    note: { fr: 'Garnis de sauce fromagère maison et frites incluses', en: 'Stuffed with homemade cheese sauce and fries included' },
    items: [
      { name: 'Tacos M (1 Viande)', description: { fr: '1 viande au choix + sauce au choix', en: '1 meat of choice + sauce of choice' }, price: '7.00' },
      { name: 'Tacos L (2 Viandes)', description: { fr: '2 viandes au choix + sauce au choix', en: '2 meats of choice + sauce of choice' }, price: '8.00', highlight: true },
      { name: 'Tacos XL (3 Viandes)', description: { fr: '3 viandes au choix + sauce au choix', en: '3 meats of choice + sauce of choice' }, price: '10.00' },
    ],
    customizations: [
      {
        title: { fr: 'Viandes au choix', en: 'Meat Choices' },
        items: ['Kebab', 'Poulet Curry', 'Tandoori', 'Viande Hachée', 'Cordon Bleu', 'Merguez', 'Tenders', 'Larzouj', 'Nuggets'],
      },
      {
        title: { fr: 'Sauces au choix', en: 'Sauces' },
        items: ['Algérienne', 'Ketchup', 'Mayonnaise', 'Biggy', 'Samouraï', 'Harissa', 'Blanche', 'Barbecue', 'Moutarde', 'Poivre', 'Curry', 'Cheezy'],
      },
    ],
    extras: [
      { name: 'Supplément Viande', price: '2.00' },
      { name: 'Supplément Sauce', price: '0.30' },
    ],
  },
  {
    id: 'burgers',
    name: { fr: 'Nos Burgers', en: 'Our Burgers' },
    note: { fr: 'Tous servis en menu avec Coca-Cola & frites croustillantes', en: 'All served as a combo with Coca-Cola & crispy fries' },
    items: [
      { name: 'Cheese Burger', description: { fr: 'Steak pur bœuf, cheddar fondu, sauces', en: 'Pure beef patty, melted cheddar, sauces' }, price: '5.00' },
      { name: 'Double Cheese', description: { fr: '2 steaks pur bœuf, double cheddar fondu', en: '2 beef patties, double melted cheddar' }, price: '7.00', highlight: true },
      { name: 'Chicken Burger', description: { fr: 'Filet de poulet pané doré, cheddar, sauce', en: 'Golden breaded chicken, cheddar, sauce' }, price: '6.00' },
      { name: 'Fish Burger', description: { fr: 'Filet de poisson pané croustillant, cheddar', en: 'Crispy fish fillet, cheddar, tartar sauce' }, price: '6.00' },
    ],
  },
  {
    id: 'chicken',
    name: { fr: 'Wings Croustillants', en: 'Crispy Wings' },
    note: { fr: 'Ailes de poulet marinées et frites à la commande', en: 'Marinated chicken wings freshly fried to order' },
    items: [
      { name: '5 Pièces', description: { fr: 'Seul : €2.50  ·  Menu (avec frites + boisson 33cl) : €5.00', en: 'Alone: €2.50  ·  Combo (with fries + 33cl drink): €5.00' }, price: '2.50' },
      { name: '10 Pièces', description: { fr: 'Seul : €6.00  ·  Menu (avec frites + boisson 33cl) : €7.50', en: 'Alone: €6.00  ·  Combo (with fries + 33cl drink): €7.50' }, price: '6.00' },
      { name: '15 Pièces', description: { fr: 'Seul : €7.50  ·  Menu (avec 2 frites + boisson 33cl) : €10.00', en: 'Alone: €7.50  ·  Combo (with 2 fries + 33cl drink): €10.00' }, price: '7.50', highlight: true },
      { name: '30 Pièces Format Famille', description: { fr: 'Seul : €15.00  ·  Menu (avec 4 frites + bouteille 1.5L) : €22.00', en: 'Alone: €15.00  ·  Combo (with 4 fries + 1.5L bottle): €22.00' }, price: '15.00' },
    ],
  },
  {
    id: 'panini',
    name: { fr: 'Panini Maison', en: 'Homemade Panini' },
    note: { fr: 'Pain maison toasté à cœur avec fromage — Tarif unique €5.00', en: 'Toasted homemade bread with cheese — Flat rate €5.00' },
    items: [
      { name: 'Panini Chicken Tandoori', description: { fr: 'Poulet tandoori mariné, fromage', en: 'Marinated tandoori chicken, cheese' }, price: '5.00' },
      { name: 'Panini Chicken Curry', description: { fr: 'Poulet au curry, fromage fondant', en: 'Curry chicken, melted cheese' }, price: '5.00' },
      { name: 'Panini Viande Hachée', description: { fr: 'Viande hachée assaisonnée, fromage', en: 'Seasoned minced beef, cheese' }, price: '5.00' },
      { name: 'Panini Merguez', description: { fr: 'Merguez épicées, fromage', en: 'Spicy merguez sausages, cheese' }, price: '5.00' },
      { name: 'Panini Tenders', description: { fr: 'Aiguillettes croustillantes, fromage', en: 'Crispy chicken tenders, cheese' }, price: '5.00' },
      { name: 'Panini Cordon Bleu', description: { fr: 'Cordon bleu fondant, fromage', en: 'Melted cordon bleu, cheese' }, price: '5.00' },
      { name: 'Panini Kebab', description: { fr: 'Viande kebab, fromage', en: 'Kebab meat, cheese' }, price: '5.00' },
      { name: 'Panini Nuggets', description: { fr: 'Nuggets croustillants, fromage', en: 'Crispy nuggets, cheese' }, price: '5.00' },
    ],
  },
  {
    id: 'pizza',
    name: { fr: 'Nos Pizzas', en: 'Our Pizzas' },
    note: { fr: 'Sauce tomate cuisinée, mozzarella, olives, champignons & oignons', en: 'Cooked tomato sauce, mozzarella, olives, mushrooms & onions' },
    items: [
      { name: 'Format Junior', description: { fr: 'Recette au choix (Kebab, Chicken, Viande Hachée, Margherita, Merguez, Mixte, Indienne, Italienne)', en: 'Choice of recipe (Kebab, Chicken, Ground Beef, Margherita, Merguez, Mixed, Indian, Italian)' }, price: '6.00' },
      { name: 'Format Sénior', description: { fr: 'Recette au choix (Kebab, Chicken, Viande Hachée, Margherita, Merguez, Mixte, Indienne, Italienne)', en: 'Choice of recipe (Kebab, Chicken, Ground Beef, Margherita, Merguez, Mixed, Indian, Italian)' }, price: '8.00', highlight: true },
      { name: 'Format Mega (À partager)', description: { fr: 'Recette au choix (Kebab, Chicken, Viande Hachée, Margherita, Merguez, Mixte, Indienne, Italienne)', en: 'Choice of recipe (Kebab, Chicken, Ground Beef, Margherita, Merguez, Mixed, Indian, Italian)' }, price: '10.00' },
    ],
    customizations: [
      {
        title: { fr: 'Saveurs disponibles', en: 'Available Flavors' },
        items: ['Kebab', 'Chicken', 'Viande Hachée', 'Marguerita', 'Merguez', 'Mixte', 'Indian', 'Italian'],
      },
    ],
  },
  {
    id: 'sandwiches',
    name: { fr: 'Nos Sandwiches', en: 'Our Sandwiches' },
    note: { fr: 'Pain chaud avec crudités fraîches et frites', en: 'Warm bread with fresh salad and fries' },
    items: [
      { name: 'Sandwich Grec', description: { fr: 'Viande kebab savoureuse, sauce au choix', en: 'Flavorful kebab meat, choice of sauce' }, price: '7.00' },
      { name: 'Steak Menu', description: { fr: '2 steaks pur bœuf, cheddar, crudités', en: '2 beef patties, cheddar, salad' }, price: '7.00' },
      { name: 'Triple Steaks', description: { fr: '3 steaks pur bœuf, cheddar, crudités', en: '3 beef patties, cheddar, salad' }, price: '8.00' },
      { name: 'Sandwich Chicken Curry', description: { fr: 'Poulet au curry parfumé', en: 'Aromatic curry chicken' }, price: '7.50' },
      { name: 'Sandwich Chicken Tandoori', description: { fr: 'Poulet mariné aux épices tandoori', en: 'Tandoori spiced chicken' }, price: '7.50' },
      { name: 'Sandwich Chicken Mixte', description: { fr: 'Duo savoureux curry & tandoori', en: 'Curry & tandoori chicken duo' }, price: '7.50', highlight: true },
      { name: 'Sandwich Adana', description: { fr: 'Brochette adana, cheddar, crudités', en: 'Adana skewer, cheddar, salad' }, price: '8.00' },
      { name: 'Sandwich Steak Gallery', description: { fr: 'Steaks pur bœuf + cordon bleu, cheddar', en: 'Beef steaks + cordon bleu, cheddar' }, price: '8.00' },
      { name: 'Sandwich Agneau', description: { fr: 'Morceaux d’agneau grillés, cheddar, crudités', en: 'Grilled lamb chunks, cheddar, salad' }, price: '8.50', highlight: true },
    ],
  },
];
