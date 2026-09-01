import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Navigation, Train, Clock, ExternalLink, Copy, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';

export default function Location() {
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('26 Rue Marx Dormoy, 75018 Paris');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-[#0D0B0A] relative overflow-hidden">
      {/* Background Ambient Spot */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#E07A4B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E07A4B]/15 border border-[#E07A4B]/30 text-[#E07A4B] text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin size={13} />
            {lang === 'fr' ? 'Accès & Coordonnées' : 'Location & Access'}
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-3">
            {t('location.title')}
          </h2>
          <p className="text-[#A8A29E] text-base sm:text-lg max-w-xl mx-auto font-sans">
            {t('location.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card */}
          <motion.div
            className="lg:col-span-5 glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#F5B041] uppercase tracking-widest">
                  Paris 18ᵉ Arrondissement
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {lang === 'fr' ? 'Ouvert 7j/7' : 'Open 7/7'}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
                {restaurant.name}
              </h3>

              <div className="space-y-6">
                {/* Address with Copy Action */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/8">
                  <div className="w-10 h-10 rounded-xl bg-[#E07A4B]/20 flex items-center justify-center text-[#E07A4B] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-base">{restaurant.address.street}</p>
                    <p className="text-[#A8A29E] text-xs sm:text-sm">{restaurant.address.city}, {restaurant.address.country}</p>
                    <button
                      onClick={handleCopy}
                      className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#E07A4B] hover:text-[#FFAE8A] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-emerald-400" />
                          <span className="text-emerald-400">{lang === 'fr' ? 'Adresse copiée !' : 'Address copied!'}</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>{lang === 'fr' ? 'Copier l’adresse' : 'Copy address'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Metro Transit */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/8">
                  <div className="w-10 h-10 rounded-xl bg-[#F5B041]/20 flex items-center justify-center text-[#F5B041] shrink-0">
                    <Train size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      {lang === 'fr' ? 'Lignes de Métro' : 'Metro Lines'}
                    </p>
                    <div className="mt-1 space-y-1">
                      <p className="text-xs text-[#A8A29E] flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-[#00814F] text-white font-black text-[10px]">12</span>
                        <strong className="text-white font-semibold">Marx Dormoy</strong> (1 min à pied)
                      </p>
                      <p className="text-xs text-[#A8A29E] flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-[#0055C8] text-white font-black text-[10px]">2</span>
                        <strong className="text-white font-semibold">La Chapelle</strong> (6 min à pied)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/8">
                  <div className="w-10 h-10 rounded-xl bg-[#E07A4B]/20 flex items-center justify-center text-[#E07A4B] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      {lang === 'fr' ? 'Téléphone & Commandes' : 'Phone & Takeaway'}
                    </p>
                    <a
                      href={restaurant.phoneLink}
                      className="text-[#E07A4B] font-extrabold text-lg hover:underline inline-block mt-0.5"
                    >
                      {restaurant.phone}
                    </a>
                  </div>
                </div>

                {/* Hours Note */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/8">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/70 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      {lang === 'fr' ? 'Horaires & Service' : 'Hours & Service'}
                    </p>
                    <p className="text-xs text-[#A8A29E] mt-0.5 leading-relaxed">
                      {lang === 'fr'
                        ? 'Service continu midi et soir du Lundi au Dimanche.'
                        : 'Continuous lunch and dinner service Monday through Sunday.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={restaurant.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#E07A4B] to-[#C46435] text-white rounded-2xl font-bold hover:shadow-[0_0_25px_rgba(224,122,75,0.4)] transition-all duration-300 text-sm uppercase tracking-wider"
              >
                <Navigation size={16} />
                {t('location.directions')}
              </a>
              <a
                href={restaurant.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 border border-white/15 text-white rounded-2xl font-bold hover:bg-white/15 transition-colors text-sm uppercase tracking-wider"
              >
                <Phone size={16} className="text-[#E07A4B]" />
                {t('contact.call')}
              </a>
            </div>
          </motion.div>

          {/* Interactive Map Container */}
          <motion.div
            className="lg:col-span-7 glass-panel rounded-3xl overflow-hidden flex flex-col min-h-[480px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Map Frame */}
            <div className="relative flex-1 w-full min-h-[380px] bg-[#141110] overflow-hidden">
              <iframe
                title="Shamshad Restaurant Google Maps"
                src="https://maps.google.com/maps?q=26+Rue+Marx+Dormoy+75018+Paris&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-120 saturate-75 opacity-85"
                loading="lazy"
                aria-label="Map location of Shamshad Restaurant"
              />
              
              {/* Floating Map Pin Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#0D0B0A]/90 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#E07A4B] animate-ping" />
                <div>
                  <p className="text-xs font-bold text-white">Shamshad Restaurant</p>
                  <p className="text-[11px] text-[#A8A29E]">26 Rue Marx Dormoy, Paris 18</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="p-6 bg-[#141110] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-heading font-bold text-sm text-white">
                  {lang === 'fr' ? 'Itinéraire GPS en un clic' : 'One-Click GPS Navigation'}
                </p>
                <p className="text-xs text-[#A8A29E] mt-0.5">
                  Google Maps, Apple Maps, Waze ou Piéton
                </p>
              </div>
              <a
                href={restaurant.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                <span>Google Maps</span>
                <ExternalLink size={14} className="text-[#E07A4B]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
