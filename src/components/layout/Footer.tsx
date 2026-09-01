import { MapPin, Phone, Flame } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';

const navLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.menu', href: '#menu' },
  { key: 'nav.restaurant', href: '#experience' },
  { key: 'nav.reviews', href: '#reviews' },
  { key: 'nav.location', href: '#location' },
];

export default function Footer() {
  const { t, lang } = useLanguage();

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080706] text-[#A8A29E] pt-20 pb-28 lg:pb-16 border-t border-white/8 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E07A4B] to-[#C46435] flex items-center justify-center text-white shadow-[0_0_20px_rgba(224,122,75,0.3)]">
                <Flame size={20} />
              </div>
              <span className="font-display font-black text-2xl tracking-wider text-white">
                SHAMSHAD
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#A8A29E] max-w-sm mb-6 font-sans">
              {t('footer.tagline')} — {lang === 'fr' ? 'Spécialités afghanes, brochettes au feu de bois et naans cuits au tandoor dans le 18ᵉ arrondissement.' : 'Authentic Afghan specialties, flame-grilled skewers and tandoor-baked naan in Paris 18th.'}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{lang === 'fr' ? 'Accueil chaleureux garanti 7j/7' : 'Warm welcome guaranteed 7/7'}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleClick(href); }}
                    className="text-sm font-medium hover:text-[#E07A4B] transition-colors"
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-5">
              {lang === 'fr' ? 'Nous Trouver' : 'Contact & Address'}
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E07A4B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-semibold">{restaurant.address.street}</p>
                  <p className="text-[#A8A29E]">{restaurant.address.city}, {restaurant.address.country}</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">Métro 12 Marx Dormoy • Métro 2 La Chapelle</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#E07A4B] shrink-0" />
                <a
                  href={restaurant.phoneLink}
                  className="text-white font-semibold hover:text-[#E07A4B] transition-colors"
                >
                  {restaurant.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B]">
          <p>{t('footer.rights')}</p>
          <p className="flex items-center gap-1.5">
            <span>Shamshad Restaurant Paris</span>
            <span>•</span>
            <span className="text-[#E07A4B]">26 Rue Marx Dormoy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
