import { Flame, Star, Utensils, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function MarqueeBanner() {
  const { lang } = useLanguage();

  const items = [
    { icon: <Flame size={15} className="text-[#E07A4B]" />, fr: 'Brochettes Marinées au Feu de Bois', en: 'Flame-Grilled Marinated Skewers' },
    { icon: <Sparkles size={15} className="text-[#F5B041]" />, fr: 'Naans Chauds Faits Maison au Tandoor', en: 'Fresh Naan Baked in Tandoor' },
    { icon: <Utensils size={15} className="text-[#E07A4B]" />, fr: 'Véritable Qabuli Palao d’Afghanistan', en: 'Authentic Afghan Qabuli Palao' },
    { icon: <Star size={15} className="text-[#F5B041]" />, fr: 'Viandes 100% Halal & Fraîches', en: '100% Fresh Halal Meats' },
    { icon: <MapPin size={15} className="text-[#E07A4B]" />, fr: '26 Rue Marx Dormoy, Paris 18ᵉ', en: '26 Rue Marx Dormoy, Paris 18th' },
    { icon: <Flame size={15} className="text-[#E07A4B]" />, fr: 'Service Continu 7j/7 Midi & Soir', en: 'Continuous 7/7 Lunch & Dinner' },
  ];

  return (
    <div className="relative py-4 bg-gradient-to-r from-[#141110] via-[#1C1816] to-[#141110] border-y border-white/8 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm font-semibold tracking-wider text-white/80 uppercase">
            {item.icon}
            <span>{item[lang]}</span>
            <span className="text-white/20 ml-6">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
