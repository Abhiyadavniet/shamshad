import { motion } from 'framer-motion';
import { Flame, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';

export default function Intro() {
  const { t, lang } = useLanguage();

  const highlights = [
    {
      icon: <Flame size={20} className="text-[#E07A4B]" />,
      title: { fr: 'Grillades à la Flamme', en: 'Flame Grill' },
      desc: { fr: 'Viandes marinées selon des recettes traditionnelles', en: 'Meats marinated with traditional spice recipes' },
    },
    {
      icon: <Sparkles size={20} className="text-[#F5B041]" />,
      title: { fr: 'Pain Naan au Tandoor', en: 'Tandoor Naan' },
      desc: { fr: 'Pâte pétrie chaque jour et cuite sous vos yeux', en: 'Fresh dough kneaded daily and baked hot' },
    },
    {
      icon: <ShieldCheck size={20} className="text-[#E07A4B]" />,
      title: { fr: '100% Viandes Fraîches & Halal', en: '100% Fresh Halal' },
      desc: { fr: 'Sélection rigoureuse des meilleurs morceaux', en: 'Strict selection of premium meat cuts' },
    },
    {
      icon: <Heart size={20} className="text-[#F5B041]" />,
      title: { fr: 'Hospitalité Afghane', en: 'Afghan Hospitality' },
      desc: { fr: 'Un accueil généreux et chaleureux au cœur de Paris', en: 'A warm and generous welcome in Paris' },
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0D0B0A] relative overflow-hidden">
      {/* Background Ambient Spot */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E07A4B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E07A4B]/15 border border-[#E07A4B]/30 text-[#E07A4B] text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={13} />
              {lang === 'fr' ? 'L’Art Culinaire Afghan' : 'Afghan Culinary Heritage'}
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] mb-6">
              {t('intro.title')}
            </h2>

            <p className="font-sans text-[#A8A29E] text-base sm:text-lg leading-relaxed mb-10">
              {t('intro.text')}
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="p-4.5 rounded-2xl bg-[#1C1816]/70 border border-white/8 hover:border-[#E07A4B]/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center mb-3">
                    {h.icon}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-white mb-1">
                    {h.title[lang]}
                  </h4>
                  <p className="text-xs text-[#A8A29E] leading-relaxed">
                    {h.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Image Card */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden p-2.5 bg-gradient-to-br from-white/15 via-white/5 to-[#E07A4B]/20 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                <img
                  src={restaurant.images.qabuliPalao}
                  alt="Qabuli Palao — Spécialité Shamshad Restaurant Paris"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                {/* Floating Plate Highlight */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-[#F5B041]">
                      Spécialité Signature
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mt-0.5">
                      Qabuli Palao
                    </h3>
                  </div>
                  <span className="px-4 py-2 rounded-xl bg-[#E07A4B] text-white font-bold text-base shadow-[0_0_20px_rgba(224,122,75,0.5)]">
                    €10.00
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-4 sm:-left-4 p-4 rounded-2xl bg-[#141110]/95 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E07A4B] to-[#F5B041] flex items-center justify-center text-white font-black text-xl shadow-md">
                26
              </div>
              <div>
                <p className="text-xs text-[#A8A29E] font-medium">Rue Marx Dormoy</p>
                <p className="text-sm font-bold text-white">Paris 18ᵉ Arrondissement</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
