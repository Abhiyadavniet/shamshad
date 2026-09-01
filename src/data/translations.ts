export type Lang = 'fr' | 'en';

export const translations: Record<string, Record<Lang, string>> = {
  // Navigation
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.menu': { fr: 'Notre Carte', en: 'Our Menu' },
  'nav.restaurant': { fr: 'Le Restaurant', en: 'The Restaurant' },
  'nav.reviews': { fr: 'Avis', en: 'Reviews' },
  'nav.location': { fr: 'Nous Trouver', en: 'Find Us' },

  // Hero
  'hero.label': { fr: 'Cuisine Afghane · Paris 18ᵉ', en: 'Afghan Cuisine · Paris 18th' },
  'hero.title': { fr: 'Shamshad Restaurant', en: 'Shamshad Restaurant' },
  'hero.subtitle': {
    fr: 'Les saveurs authentiques de l\'Afghanistan au cœur de Paris',
    en: 'Authentic flavors of Afghanistan in the heart of Paris',
  },
  'hero.cta.menu': { fr: 'Voir la Carte', en: 'View Menu' },
  'hero.cta.call': { fr: 'Nous Appeler', en: 'Call Us' },

  // Intro
  'intro.title': {
    fr: 'Une tradition culinaire venue d\'Afghanistan',
    en: 'A culinary tradition from Afghanistan',
  },
  'intro.text': {
    fr: 'Au cœur du 18ᵉ arrondissement de Paris, Shamshad Restaurant vous invite à découvrir les richesses de la cuisine afghane. Des kebabs grillés aux plats traditionnels comme le Qabuli Palao, chaque plat est préparé avec des épices authentiques et un savoir-faire hérité de générations.',
    en: 'In the heart of Paris\' 18th arrondissement, Shamshad Restaurant invites you to discover the richness of Afghan cuisine. From grilled kebabs to traditional dishes like Qabuli Palao, each dish is prepared with authentic spices and generational expertise.',
  },

  // Signature
  'signature.title': { fr: 'Nos Spécialités', en: 'Our Specialties' },
  'signature.subtitle': {
    fr: 'Découvrez nos plats emblématiques',
    en: 'Discover our signature dishes',
  },
  'signature.qabuli.name': { fr: 'Qabuli Palao', en: 'Qabuli Palao' },
  'signature.qabuli.desc': {
    fr: 'Le plat national afghan — riz parfumé, carottes caramélisées, raisins secs et viande tendre',
    en: 'Afghanistan\'s national dish — fragrant rice, caramelized carrots, raisins and tender meat',
  },
  'signature.naan.name': { fr: 'Naan Sandwich', en: 'Naan Sandwich' },
  'signature.naan.desc': {
    fr: 'Notre spécialité de rue — naan au fromage garni de viandes grillées et de crudités fraîches',
    en: 'Our street food specialty — cheese naan filled with grilled meats and fresh vegetables',
  },
  'signature.brochettes.name': { fr: 'Brochettes d\'Agneau', en: 'Lamb Skewers' },
  'signature.brochettes.desc': {
    fr: 'Agneau tendre grillé aux épices traditionnelles, servi avec des herbes fraîches',
    en: 'Tender lamb grilled with traditional spices, served with fresh herbs',
  },

  // Menu
  'menu.title': { fr: 'Notre Carte', en: 'Our Menu' },
  'menu.subtitle': {
    fr: 'Des saveurs pour tous les goûts',
    en: 'Flavors for every taste',
  },

  // Experience
  'experience.title': { fr: 'L\'Expérience Shamshad', en: 'The Shamshad Experience' },
  'experience.text': {
    fr: 'Plus qu\'un repas, une expérience. L\'hospitalité afghane se vit à travers une cuisine généreuse, des saveurs authentiques et un accueil chaleureux. Que vous soyez de passage ou habitué du quartier, notre table est la vôtre.',
    en: 'More than a meal, an experience. Afghan hospitality comes alive through generous cuisine, authentic flavors and a warm welcome. Whether you\'re passing through or a local regular, our table is yours.',
  },

  // Reviews
  'reviews.title': { fr: 'Ce que disent nos clients', en: 'What our customers say' },
  'reviews.cta': { fr: 'Voir nos avis sur Google', en: 'See our reviews on Google' },

  // Location
  'location.title': { fr: 'Nous Trouver', en: 'Find Us' },
  'location.subtitle': {
    fr: 'Venez nous rendre visite',
    en: 'Come visit us',
  },
  'location.directions': { fr: 'Itinéraire', en: 'Get Directions' },

  // Contact CTA
  'contact.title': { fr: 'Envie de découvrir nos saveurs ?', en: 'Ready to discover our flavors?' },
  'contact.call': { fr: 'Nous Appeler', en: 'Call Us' },
  'contact.directions': { fr: 'Itinéraire', en: 'Get Directions' },

  // Footer
  'footer.rights': { fr: '© 2024 Shamshad Restaurant. Tous droits réservés.', en: '© 2024 Shamshad Restaurant. All rights reserved.' },
  'footer.tagline': {
    fr: 'Cuisine afghane authentique à Paris',
    en: 'Authentic Afghan cuisine in Paris',
  },

  // Sticky Bar
  'sticky.menu': { fr: 'Carte', en: 'Menu' },
  'sticky.call': { fr: 'Appeler', en: 'Call' },
  'sticky.directions': { fr: 'Itinéraire', en: 'Directions' },
};
