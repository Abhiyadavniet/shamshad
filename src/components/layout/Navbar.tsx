import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, UtensilsCrossed, Flame, CalendarCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import ReservationModal from '../ui/ReservationModal';

const navLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.menu', href: '#menu' },
  { key: 'nav.restaurant', href: '#experience' },
  { key: 'nav.reviews', href: '#reviews' },
  { key: 'nav.location', href: '#location' },
];

export default function Navbar() {
  const { t, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (mobileOpen || reserveOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen, reserveOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080706]/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-18' : 'h-22'}`}>
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E07A4B] to-[#C46435] flex items-center justify-center text-white shadow-[0_0_20px_rgba(224,122,75,0.45)] group-hover:scale-105 transition-transform duration-300">
              <Flame size={22} className="text-white" />
            </div>
            <div>
              <span className="font-display font-black text-xl md:text-2xl tracking-wider text-white flex items-center gap-1.5">
                SHAMSHAD
                <span className="w-2 h-2 rounded-full bg-[#E07A4B] inline-block animate-pulse-dot" />
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#A8A29E] uppercase font-semibold block -mt-1">
                Paris 18ᵉ • Afghan Grill
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 bg-white/5 border border-white/8 px-6 py-2 rounded-full backdrop-blur-md">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                className="text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors relative py-1 group"
              >
                {t(key)}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E07A4B] to-[#F5B041] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#E07A4B]" />
              </a>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />

            <button
              onClick={() => setReserveOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-all cursor-pointer"
            >
              <CalendarCheck size={14} className="text-[#F5B041]" />
              <span>{lang === 'fr' ? 'Réserver' : 'Book Table'}</span>
            </button>
            
            <a
              href="#menu"
              onClick={(e) => { e.preventDefault(); handleNavClick('#menu'); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#E07A4B] to-[#C46435] text-white hover:shadow-[0_0_25px_rgba(224,122,75,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <UtensilsCrossed size={14} />
              {t('hero.cta.menu')}
            </a>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#120F0D] border-l border-white/10 z-50 lg:hidden flex flex-col shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E07A4B] flex items-center justify-center text-white">
                    <Flame size={18} />
                  </div>
                  <span className="font-display font-bold text-lg text-white">SHAMSHAD</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg bg-white/5 text-white/80 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 px-6 py-6 flex flex-col gap-2 overflow-y-auto">
                {navLinks.map(({ key, href }, i) => (
                  <motion.a
                    key={key}
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    className="flex items-center justify-between text-base font-semibold text-white/90 py-3.5 px-4 rounded-xl hover:bg-white/5 hover:text-[#E07A4B] transition-all"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <span>{t(key)}</span>
                    <span className="text-white/20 text-sm">→</span>
                  </motion.a>
                ))}
              </div>

              <div className="p-6 border-t border-white/10 space-y-3 bg-[#080706]">
                <button
                  onClick={() => { setMobileOpen(false); setReserveOpen(true); }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white/10 border border-white/15 text-white rounded-xl font-bold text-xs uppercase tracking-wider"
                >
                  <CalendarCheck size={15} className="text-[#F5B041]" />
                  {lang === 'fr' ? 'Réserver une Table' : 'Reserve a Table'}
                </button>
                <a
                  href="#menu"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#menu'); }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#E07A4B] to-[#C46435] text-white rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(224,122,75,0.35)]"
                >
                  <UtensilsCrossed size={16} />
                  {t('hero.cta.menu')}
                </a>
                <a
                  href={restaurant.phoneLink}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-semibold text-xs hover:bg-white/10 transition-colors"
                >
                  <Phone size={14} className="text-[#E07A4B]" />
                  {restaurant.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* VIP Reservation Modal */}
      <ReservationModal
        isOpen={reserveOpen}
        onClose={() => setReserveOpen(false)}
      />
    </>
  );
}
