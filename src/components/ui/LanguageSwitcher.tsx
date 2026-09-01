import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
      <button
        onClick={() => setLang('fr')}
        className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
          lang === 'fr'
            ? 'bg-[#E07A4B] text-white shadow-[0_0_12px_rgba(224,122,75,0.4)]'
            : 'text-white/60 hover:text-white'
        }`}
        aria-label="Français"
      >
        FR
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
          lang === 'en'
            ? 'bg-[#E07A4B] text-white shadow-[0_0_12px_rgba(224,122,75,0.4)]'
            : 'text-white/60 hover:text-white'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
