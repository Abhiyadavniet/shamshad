import { motion } from 'framer-motion';
import { Utensils, Phone, Star, MapPin, Sparkles, Flame } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';

export default function Hero() {
  const { t, lang } = useLanguage();

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with Ambient Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurant.images.hero}
          alt="Festin de gastronomie afghane"
          className="w-full h-full object-cover scale-105 animate-float opacity-45 filter saturate-110 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/70 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D0B0A]/50 to-[#0D0B0A]" />
        {/* Amber Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E07A4B]/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-6">
        {/* Live Location / Category Badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl shadow-[0_0_20px_rgba(224,122,75,0.25)] mb-6 cursor-default"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E07A4B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E07A4B]"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F7F2EA]">
            {t('hero.label')}
          </span>
          <span className="text-white/30">•</span>
          <span className="text-xs font-semibold text-[#F5B041] flex items-center gap-1">
            <Sparkles size={12} />
            {lang === 'fr' ? 'Fait Maison' : 'Homemade'}
          </span>
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-6 uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          SHAMSHAD
          <span className="block font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E6] via-[#F5B041] to-[#E07A4B]">
            RESTAURANT
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="font-heading text-lg sm:text-xl md:text-2xl text-[#EDE8E3]/85 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Dual Primary CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button
            onClick={scrollToMenu}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#E07A4B] via-[#C46435] to-[#E07A4B] bg-[length:200%_auto] hover:bg-[position:right_center] text-white rounded-2xl font-bold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(224,122,75,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <Utensils size={18} className="group-hover:rotate-12 transition-transform" />
            {t('hero.cta.menu')}
          </button>
          
          <a
            href={restaurant.phoneLink}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-2xl font-bold text-sm sm:text-base uppercase tracking-wider backdrop-blur-md hover:border-[#E07A4B]/60 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Phone size={18} className="text-[#E07A4B]" />
            {t('hero.cta.call')}
          </a>
        </motion.div>

        {/* Trust Badges Strip */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-6 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 border border-white/8 backdrop-blur-sm">
            <Star size={16} className="text-[#F5B041] fill-[#F5B041]" />
            <span className="text-xs font-semibold text-white/90">
              {lang === 'fr' ? '4.9/5 sur Google Maps' : '4.9/5 on Google Maps'}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 border border-white/8 backdrop-blur-sm">
            <Flame size={16} className="text-[#E07A4B]" />
            <span className="text-xs font-semibold text-white/90">
              {lang === 'fr' ? 'Cuisson Tandoor & Grill' : 'Tandoor & Flame Grill'}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 border border-white/8 backdrop-blur-sm">
            <MapPin size={16} className="text-[#E07A4B]" />
            <span className="text-xs font-semibold text-white/90">
              26 Rue Marx Dormoy, Paris
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block cursor-pointer"
        onClick={scrollToMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/25 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-[#E07A4B]"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
