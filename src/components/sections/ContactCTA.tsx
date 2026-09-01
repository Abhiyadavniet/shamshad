import { motion } from 'framer-motion';
import { Phone, Navigation, Flame } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';

export default function ContactCTA() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#141110] to-[#0D0B0A]">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="relative rounded-3xl p-8 sm:p-14 overflow-hidden text-center bg-gradient-to-br from-[#E07A4B] via-[#C46435] to-[#8C3A16] shadow-[0_20px_60px_rgba(224,122,75,0.35)] border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle Ambient Shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-widest mb-6">
            <Flame size={14} className="text-[#FFCA64]" />
            {lang === 'fr' ? 'À Table ou À Emporter' : 'Dine In & Takeout'}
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-4">
            {t('contact.title')}
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto mb-10 font-sans">
            {lang === 'fr'
              ? 'Venez savourer nos grillades fraîches et nos spécialités afghanes au 26 Rue Marx Dormoy, Paris 18ᵉ.'
              : 'Come enjoy our fresh grilled meats and Afghan specialties at 26 Rue Marx Dormoy, Paris 18th.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={restaurant.phoneLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#C46435] rounded-2xl font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-2xl hover:bg-[#FDFBF7] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              <Phone size={18} />
              {t('contact.call')}
            </a>
            <a
              href={restaurant.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-black/30 hover:bg-black/40 border border-white/30 text-white rounded-2xl font-extrabold text-sm sm:text-base uppercase tracking-wider backdrop-blur-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              <Navigation size={18} />
              {t('contact.directions')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
