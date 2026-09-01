import { motion } from 'framer-motion';
import { UtensilsCrossed, Phone, Navigation } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';

export default function StickyBar() {
  const { t } = useLanguage();

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="fixed bottom-3 left-4 right-4 z-40 lg:hidden glass-panel rounded-2xl border border-white/15 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] safe-bottom"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid grid-cols-3 items-center py-1.5 px-2">
        <button
          onClick={scrollToMenu}
          className="flex flex-col items-center justify-center gap-1 py-2 text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <UtensilsCrossed size={18} />
          <span className="text-[10px] font-bold uppercase tracking-wider">{t('sticky.menu')}</span>
        </button>

        {/* Center Glowing Call CTA */}
        <a
          href={restaurant.phoneLink}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 -my-2 bg-gradient-to-r from-[#E07A4B] to-[#C46435] text-white rounded-xl shadow-[0_0_20px_rgba(224,122,75,0.6)] transform scale-105"
        >
          <Phone size={17} />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">{t('sticky.call')}</span>
        </a>

        <a
          href={restaurant.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 text-white/70 hover:text-white transition-colors"
        >
          <Navigation size={18} />
          <span className="text-[10px] font-bold uppercase tracking-wider">{t('sticky.directions')}</span>
        </a>
      </div>
    </motion.div>
  );
}
