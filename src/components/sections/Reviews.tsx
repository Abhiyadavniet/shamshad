import { motion } from 'framer-motion';
import { Star, ExternalLink, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';

export default function Reviews() {
  const { t, lang } = useLanguage();

  const testimonials = [
    {
      author: 'Karim B.',
      date: 'Google Review',
      text: {
        fr: 'Le meilleur Qabuli Palao et naan fromage de Paris 18 ! Viande ultra tendre, riz parfaitement parfumé et accueil très chaleureux. On y retourne chaque semaine.',
        en: 'The best Qabuli Palao and cheese naan in Paris 18! Ultra-tender meat, perfectly spiced rice and very warm hospitality. We come back every week.',
      },
      stars: 5,
    },
    {
      author: 'Sophie L.',
      date: 'Google Review',
      text: {
        fr: 'Brochettes d’agneau exceptionnelles et naan fait minute sous nos yeux. Portions très généreuses à prix imbattable dans le quartier Marx Dormoy.',
        en: 'Exceptional lamb skewers and fresh naan baked right before our eyes. Very generous portions at an unbeatable price in the Marx Dormoy area.',
      },
      stars: 5,
    },
    {
      author: 'Tariq M.',
      date: 'Google Review',
      text: {
        fr: 'Cuisine afghane authentique avec du vrai goût. Le Mantoo et le sandwich Naan Kebab sont incroyables. Service rapide et avec le sourire !',
        en: 'Authentic Afghan cuisine with real depth of flavor. The Mantoo and Naan Kebab sandwich are incredible. Fast service with a smile!',
      },
      stars: 5,
    },
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#141110] relative overflow-hidden">
      {/* Background Ambient Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5B041]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5B041]/15 border border-[#F5B041]/30 text-[#F5B041] text-xs font-bold uppercase tracking-widest mb-4">
            <Star size={13} className="fill-[#F5B041]" />
            {lang === 'fr' ? 'Avis & Témoignages' : 'Customer Reviews'}
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            {t('reviews.title')}
          </h2>

          {/* Stars & Rating Summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="text-[#F5B041] fill-[#F5B041]" />
              ))}
            </div>
            <span className="text-sm font-bold text-white/90">
              {lang === 'fr' ? 'Recommandé par les clients du quartier' : 'Recommended by neighborhood diners'}
            </span>
          </div>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((rev, idx) => (
            <motion.div
              key={idx}
              className="glass-panel-hover rounded-3xl p-7 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} size={15} className="text-[#F5B041] fill-[#F5B041]" />
                    ))}
                  </div>
                  <MessageSquareQuote size={20} className="text-[#E07A4B]/60" />
                </div>
                <p className="text-sm text-[#EDE8E3]/90 leading-relaxed font-sans italic">
                  "{rev.text[lang]}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/8 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">{rev.author}</h4>
                  <span className="text-[11px] text-[#A8A29E] flex items-center gap-1 mt-0.5">
                    <CheckCircle2 size={11} className="text-emerald-400" />
                    {rev.date}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/maps_round_512dp.png"
                    alt="Google"
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Google Maps Action Card */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={restaurant.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm uppercase tracking-wider backdrop-blur-xl shadow-lg hover:border-[#F5B041]/50 hover:scale-[1.02] transition-all duration-300 group"
          >
            <img
              src="https://www.gstatic.com/images/branding/product/1x/maps_round_512dp.png"
              alt="Google Maps"
              className="w-5 h-5 group-hover:scale-110 transition-transform"
            />
            <span>{t('reviews.cta')}</span>
            <ExternalLink size={16} className="text-[#F5B041]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
