import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Utensils, Eye } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';
import QuickViewModal, { type QuickViewDish } from '../ui/QuickViewModal';

const dishes = [
  {
    nameKey: 'signature.qabuli.name',
    descKey: 'signature.qabuli.desc',
    tag: { fr: 'Plat National Afghan', en: 'National Dish' },
    price: '10.00',
    image: restaurant.images.qabuliPalao,
    icon: <Sparkles size={14} className="text-[#F5B041]" />,
  },
  {
    nameKey: 'signature.naan.name',
    descKey: 'signature.naan.desc',
    tag: { fr: 'Street Food Signature', en: 'Signature Street Food' },
    price: '8.00',
    image: restaurant.images.naanSandwich,
    icon: <Utensils size={14} className="text-[#E07A4B]" />,
  },
  {
    nameKey: 'signature.brochettes.name',
    descKey: 'signature.brochettes.desc',
    tag: { fr: 'Grillade au Feu de Bois', en: 'Flame-Grilled' },
    price: '10.00',
    image: restaurant.images.brochettes,
    icon: <Flame size={14} className="text-[#E07A4B]" />,
  },
];

export default function SignatureDishes() {
  const { t, lang } = useLanguage();
  const [selectedDish, setSelectedDish] = useState<QuickViewDish | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#120F0D] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#F5B041]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E07A4B]/15 border border-[#E07A4B]/30 text-[#E07A4B] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={13} />
            {t('signature.subtitle')}
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            {t('signature.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.nameKey}
              onClick={() => setSelectedDish({
                name: t(dish.nameKey),
                category: dish.tag[lang],
                description: { fr: t(dish.descKey), en: t(dish.descKey) },
                price: dish.price,
                image: dish.image,
              })}
              className="glass-panel-hover rounded-3xl overflow-hidden flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Dish Image Container with 3D Depth */}
              <div className="aspect-[4/3] relative overflow-hidden bg-[#1A1614]">
                <img
                  src={dish.image}
                  alt={t(dish.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 filter saturate-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-transparent to-transparent opacity-80" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                  {dish.icon}
                  <span>{dish.tag[lang]}</span>
                </div>

                {/* Floating Price */}
                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#E07A4B] to-[#C46435] text-white font-extrabold text-base shadow-[0_0_15px_rgba(224,122,75,0.5)]">
                  €{dish.price}
                </div>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md border border-white/30">
                    <Eye size={14} />
                    {lang === 'fr' ? 'Aperçu Rapide' : 'Quick View'}
                  </span>
                </div>
              </div>

              {/* Dish Info */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#E07A4B] transition-colors">
                    {t(dish.nameKey)}
                  </h3>
                  <p className="text-sm text-[#A8A29E] leading-relaxed">
                    {t(dish.descKey)}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/8 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/50 group-hover:text-white transition-colors">
                    {lang === 'fr' ? 'Cliquez pour commander' : 'Click to inspect & order'}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:bg-[#E07A4B] group-hover:text-white transition-all">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </section>
  );
}
