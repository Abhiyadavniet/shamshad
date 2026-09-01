import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, UtensilsCrossed, X, Plus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { menuData } from '../../data/menu';
import QuickViewModal, { type QuickViewDish } from '../ui/QuickViewModal';

export default function MenuSection() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState<QuickViewDish | null>(null);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase().trim();
    const results: { categoryName: string; item: typeof menuData[0]['items'][0] }[] = [];
    menuData.forEach((cat) => {
      cat.items.forEach((item) => {
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description?.[lang]?.toLowerCase().includes(query) ?? false;
        if (matchesName || matchesDesc) {
          results.push({ categoryName: cat.name[lang], item });
        }
      });
    });
    return results;
  }, [searchQuery, lang]);

  const currentCategory = menuData.find((c) => c.id === activeCategory) || menuData[0];

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#0B0908] relative overflow-hidden">
      {/* Background Ambient Spot */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#E07A4B]/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header & Search */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E07A4B]/15 border border-[#E07A4B]/30 text-[#E07A4B] text-xs font-bold uppercase tracking-widest mb-4">
            <UtensilsCrossed size={14} />
            {lang === 'fr' ? 'La Carte Complète' : 'Full Digital Menu'}
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">
            {t('menu.title')}
          </h2>
          <p className="text-[#A8A29E] text-base sm:text-lg max-w-xl mx-auto mb-8 font-sans">
            {t('menu.subtitle')}
          </p>

          {/* Quick Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-white/40" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'fr' ? 'Rechercher un plat (Kebab, Palao, Tacos, Cheese...)' : 'Search a dish (Kebab, Palao, Tacos, Wings...)'}
                className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white/5 border border-white/12 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#E07A4B] focus:ring-2 focus:ring-[#E07A4B]/30 backdrop-blur-xl transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 p-1 rounded-full text-white/40 hover:text-white cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Search Results Mode */}
        {filteredItems !== null ? (
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <h3 className="font-display font-bold text-xl text-white">
                {lang === 'fr' ? `Résultats pour "${searchQuery}"` : `Results for "${searchQuery}"`}
              </h3>
              <span className="text-xs text-[#E07A4B] font-bold px-3 py-1 rounded-full bg-[#E07A4B]/15">
                {filteredItems.length} {lang === 'fr' ? 'trouvés' : 'found'}
              </span>
            </div>

            {filteredItems.length === 0 ? (
              <div className="text-center py-12 text-[#A8A29E]">
                <p className="text-base">{lang === 'fr' ? 'Aucun plat correspondant.' : 'No matching dish found.'}</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-xs font-bold text-[#E07A4B] uppercase tracking-wider underline cursor-pointer"
                >
                  {lang === 'fr' ? 'Voir toute la carte' : 'View all items'}
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredItems.map(({ categoryName, item }, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedDish({
                      name: item.name,
                      category: categoryName,
                      description: item.description,
                      price: item.price,
                      highlight: item.highlight,
                    })}
                    className="p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-[#E07A4B]/40 hover:bg-white/10 transition-all flex items-start justify-between gap-3 cursor-pointer group"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#F5B041] uppercase tracking-wider block mb-1">
                        {categoryName}
                      </span>
                      <h4 className="font-heading font-bold text-base text-white group-hover:text-[#E07A4B] transition-colors">
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-[#A8A29E] mt-1">
                          {item.description[lang]}
                        </p>
                      )}
                    </div>
                    <span className="text-sm font-extrabold text-[#E07A4B] bg-[#E07A4B]/15 px-2.5 py-1 rounded-lg shrink-0">
                      €{item.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Normal Category Mode */
          <>
            {/* Category Pills Bar */}
            <div className="mb-10 overflow-x-auto scrollbar-hide -mx-6 px-6">
              <div className="flex gap-2.5 min-w-max pb-2 justify-start md:justify-center">
                {menuData.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#E07A4B] to-[#C46435] text-white shadow-[0_0_20px_rgba(224,122,75,0.45)] scale-105'
                          : 'bg-[#161210] text-white/70 hover:bg-[#221C18] hover:text-white border border-white/8'
                      }`}
                      aria-pressed={isActive}
                    >
                      <span>{cat.name[lang]}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-white/50'}`}>
                        {cat.items.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Menu Items Container Card */}
            <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {currentCategory.name[lang]}
                  </h3>
                  {currentCategory.note && (
                    <p className="text-[#F5B041] text-xs sm:text-sm font-semibold mt-1 flex items-center gap-1.5">
                      <Sparkles size={14} />
                      {currentCategory.note[lang]}
                    </p>
                  )}
                </div>
                <span className="text-xs font-semibold text-[#A8A29E] bg-white/5 px-3.5 py-1.5 rounded-full border border-white/8 self-start sm:self-auto">
                  {currentCategory.items.length} {lang === 'fr' ? 'options' : 'items'}
                </span>
              </div>

              {/* Items Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {currentCategory.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      onClick={() => setSelectedDish({
                        name: item.name,
                        category: currentCategory.name[lang],
                        description: item.description,
                        price: item.price,
                        highlight: item.highlight,
                      })}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/6 hover:border-[#E07A4B]/40 hover:bg-white/[0.06] transition-all flex flex-col justify-between group cursor-pointer"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.025, duration: 0.2 }}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-heading font-bold text-base text-white group-hover:text-[#E07A4B] transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-sm font-extrabold text-[#E07A4B] bg-[#E07A4B]/15 px-2.5 py-1 rounded-lg shrink-0">
                            €{item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-xs text-[#A8A29E] mt-1.5 leading-relaxed font-sans">
                            {item.description[lang]}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 pt-2 border-t border-white/6 flex items-center justify-between">
                        {item.highlight ? (
                          <div className="flex items-center gap-1 text-[10px] font-bold text-[#F5B041] uppercase tracking-wider">
                            <Sparkles size={11} />
                            {lang === 'fr' ? 'Recommandé du Chef' : 'Chef’s Pick'}
                          </div>
                        ) : (
                          <span className="text-[10px] text-[#A8A29E]">
                            {lang === 'fr' ? 'Cliquez pour détails' : 'Click for details'}
                          </span>
                        )}
                        <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-[#E07A4B] transition-all">
                          <Plus size={11} />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Customizations / Options */}
              {currentCategory.customizations && currentCategory.customizations.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                  {currentCategory.customizations.map((cust) => (
                    <div key={cust.title.fr}>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                        {cust.title[lang]} :
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {cust.items.map((opt) => (
                          <span
                            key={opt}
                            className="text-xs bg-white/5 text-[#EDE8E3] px-3 py-1 rounded-lg border border-white/10 font-medium"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Extras */}
              {currentCategory.extras && currentCategory.extras.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3">
                    {lang === 'fr' ? 'Suppléments & Accompagnements' : 'Extras & Sides'} :
                  </p>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {currentCategory.extras.map((extra) => (
                      <div
                        key={extra.name}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-xl text-xs font-semibold border border-white/8"
                      >
                        <span className="text-[#EDE8E3]">{extra.name}</span>
                        <span className="text-[#E07A4B] font-bold">+€{extra.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </section>
  );
}
