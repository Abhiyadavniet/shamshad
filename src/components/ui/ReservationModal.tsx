import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Users, Send, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../data/restaurant';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const { lang } = useLanguage();
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState('19:30');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = ['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      window.location.href = restaurant.phoneLink;
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[95] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-lg glass-panel rounded-3xl overflow-hidden border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 my-auto p-6 sm:p-8"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="text-[11px] font-bold text-[#F5B041] uppercase tracking-widest block mb-1">
              {lang === 'fr' ? 'Accueil VIP & Groupes' : 'VIP Table & Groups'}
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {lang === 'fr' ? 'Réserver une Table' : 'Reserve a Table'}
            </h3>
            <p className="text-xs text-[#A8A29E] mt-1">
              Shamshad Restaurant • 26 Rue Marx Dormoy, Paris 18ᵉ
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <Check size={28} />
              </div>
              <h4 className="font-display font-bold text-xl text-white">
                {lang === 'fr' ? 'Demande Prise en Compte' : 'Request Received'}
              </h4>
              <p className="text-xs text-[#A8A29E] max-w-xs mx-auto">
                {lang === 'fr'
                  ? 'Connexion téléphonique directe avec le restaurant en cours...'
                  : 'Direct phone connection with the restaurant in progress...'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Number of Guests */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-2 flex items-center gap-1.5">
                  <Users size={14} className="text-[#E07A4B]" />
                  {lang === 'fr' ? 'Nombre de Personnes' : 'Number of Guests'}
                </label>
                <div className="flex gap-2">
                  {[1, 2, 4, 6, 8, '10+'].map((num) => (
                    <button
                      type="button"
                      key={num.toString()}
                      onClick={() => setGuests(typeof num === 'number' ? num : 10)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        (num === guests || (num === '10+' && guests >= 10))
                          ? 'bg-[#E07A4B] text-white border-[#E07A4B] shadow-[0_0_12px_rgba(224,122,75,0.4)]'
                          : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-2 flex items-center gap-1.5">
                  <Clock size={14} className="text-[#F5B041]" />
                  {lang === 'fr' ? 'Créneau Horaire' : 'Preferred Time'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        time === slot
                          ? 'bg-[#F5B041] text-black font-bold border-[#F5B041] shadow-[0_0_12px_rgba(245,176,65,0.4)]'
                          : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-white/70 block mb-1">
                    {lang === 'fr' ? 'Votre Nom' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Karim"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-white/30 focus:outline-none focus:border-[#E07A4B]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-white/70 block mb-1">
                    {lang === 'fr' ? 'Téléphone' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07 58 44 43 86"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-white/30 focus:outline-none focus:border-[#E07A4B]"
                  />
                </div>
              </div>

              {/* Confirm / Call Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E07A4B] to-[#C46435] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(224,122,75,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  {lang === 'fr' ? 'Confirmer la Réservation' : 'Confirm Reservation'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
