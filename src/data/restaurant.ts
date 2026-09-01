export const restaurant = {
  name: 'Shamshad Restaurant',
  shortName: 'Shamshad',
  tagline: {
    fr: 'Les saveurs authentiques de l\'Afghanistan au cœur de Paris',
    en: 'Authentic flavors of Afghanistan in the heart of Paris',
  },
  cuisine: {
    fr: 'Cuisine Afghane',
    en: 'Afghan Cuisine',
  },
  location: {
    fr: 'Paris 18ᵉ',
    en: 'Paris 18th',
  },
  address: {
    street: '26 Rue Marx Dormoy',
    city: '75018 Paris',
    country: 'France',
  },
  phone: '+33 7 58 44 43 86',
  phoneLink: 'tel:+33758444386',
  googleMapsUrl:
    'https://www.google.com/maps/place/Shamshad+Restaurant/@48.8863,2.3569948,17z/data=!4m15!1m8!3m7!1s0x47e66f0037b7d725:0x18a8cfbcda8c4771!2sShamshad+Restaurant!8m2!3d48.8862873!4d2.3597096!10e9!16s%2Fg%2F11mrzz7r9k!3m5!1s0x47e66f0037b7d725:0x18a8cfbcda8c4771!8m2!3d48.8862873!4d2.3597096!16s%2Fg%2F11mrzz7r9k?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D',
  coordinates: {
    lat: 48.8862873,
    lng: 2.3597096,
  },
  images: {
    hero: '/hero-food.jpg',
    naanSandwich: '/naan-sandwich.jpg',
    qabuliPalao: '/qabuli-palao.jpg',
    brochettes: '/brochettes.jpg',
    interior: '/interior.jpg',
  },
} as const;
