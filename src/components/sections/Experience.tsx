import { motion } from 'framer-motion';
import { Sparkles, Users, Coffee, Flame } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';

export default function Experience() {
  const { t, lang } = useLanguage();

  const values = [
    { icon: <Flame size={18} className="text-[#E07A4B]" />, fr: 'Saveurs Grillées d’Origine', en: 'Authentic Grilled Flavors' },
    { icon: <Users size={18} className="text-[#F5B041]" />, fr: 'Accueil Familial & Convivial', en: 'Family & Friendly Atmosphere' },
    { icon: <Coffee size={18} className="text-[#E07A4B]" />, fr: 'Boissons & Lassi Maison', en: 'Homemade Drinks & Lassi' },
  ];

  return (
    <section id="experience" className="relative py-32 md:py-44 overflow-hidden">
      {/* Background Photography with Dark Amber Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurant.images.interior}
          alt="Ambiance Shamshad Restaurant Paris 18"
          className="w-full h-full object-cover filter brightness-50 contrast-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B0A] via-[#0D0B0A]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-transparent to-[#0D0B0A]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-2xl glass-panel p-8 sm:p-12 rounded-3xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E07A4B]/20 text-[#E07A4B] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={13} />
            {lang === 'fr' ? 'L’Hospitalité' : 'Hospitality'}
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] mb-6 uppercase tracking-tight">
            {t('experience.title')}
          </h2>

          <p className="font-sans text-[#EDE8E3]/85 text-base sm:text-lg leading-relaxed mb-8">
            {t('experience.text')}
          </p>

          <div className="pt-6 border-t border-white/10 space-y-3">
            {values.map((v, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <span>{v[lang]}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
