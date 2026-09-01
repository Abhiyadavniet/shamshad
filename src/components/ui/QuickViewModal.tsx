import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Flame, Sparkles, Navigation } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';

export interface QuickViewDish {
  name: string;
  category?: string;
  description?: { fr: string; en: string };
  price: string;
  image?: string;
  highlight?: boolean;
}

interface QuickViewModalProps {
  dish: QuickViewDish | null;
  onClose: () => void;
}

export default function QuickViewModal({ dish, onClose }: QuickViewModalProps) {
  const { lang } = useLanguage();

  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-lg glass-panel rounded-3xl overflow-hidden border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 my-auto"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>

          {/* Dish Header Visual */}
          {dish.image ? (
            <div className="aspect-[16/10] relative overflow-hidden bg-[#141110]">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover filter saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161210] via-transparent to-black/40" />
            </div>
          ) : (
            <div className="h-28 bg-gradient-to-br from-[#E07A4B]/20 via-[#161210] to-[#080706] flex items-center justify-center border-b border-white/8">
              <Flame size={36} className="text-[#E07A4B]" />
            </div>
          )}

          {/* Modal Content */}
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                {dish.category && (
                  <span className="text-[11px] font-bold text-[#F5B041] uppercase tracking-wider block mb-1">
                    {dish.category}
                  </span>
                )}
                <h3 className="font-display font-extrabold text-2xl text-white">
                  {dish.name}
                </h3>
              </div>
              <span className="text-xl font-black text-[#E07A4B] bg-[#E07A4B]/15 px-3.5 py-1.5 rounded-xl shrink-0">
                €{dish.price}
              </span>
            </div>

            {dish.description && (
              <p className="text-sm text-[#A8A29E] leading-relaxed mb-6 font-sans">
                {dish.description[lang]}
              </p>
            )}

            {/* Culinary Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium">
                <Flame size={12} className="text-[#E07A4B]" />
                {lang === 'fr' ? 'Fait Maison & Cuit Minute' : 'Freshly Prepared'}
              </span>
              <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium">
                <Sparkles size={12} className="text-[#F5B041]" />
                {lang === 'fr' ? '100% Viande Halal' : '100% Halal Meat'}
              </span>
            </div>

            {/* Quick Action CTAs */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <a
                href={restaurant.phoneLink}
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#E07A4B] to-[#C46435] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(224,122,75,0.4)] hover:scale-[1.02] transition-all"
              >
                <Phone size={16} />
                {lang === 'fr' ? 'Commander (Appel)' : 'Order by Phone'}
              </a>
              <a
                href={restaurant.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Navigation size={16} />
                {lang === 'fr' ? 'Y Aller (GPS)' : 'Directions (GPS)'}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
