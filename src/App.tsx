import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/layout/Navbar';
import StickyBar from './components/layout/StickyBar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import MarqueeBanner from './components/sections/MarqueeBanner';
import Intro from './components/sections/Intro';
import SignatureDishes from './components/sections/SignatureDishes';
import MenuSection from './components/sections/Menu';
import Experience from './components/sections/Experience';
import Reviews from './components/sections/Reviews';
import Location from './components/sections/Location';
import ContactCTA from './components/sections/ContactCTA';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#080706] text-[#EDE8E3] font-sans selection:bg-[#E07A4B] selection:text-white">
        {/* Scroll Depth Progress Bar */}
        <ScrollProgress />

        {/* Loading Intro Screen */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Main Website View */}
        <Navbar />
        <main>
          <Hero />
          <MarqueeBanner />
          <Intro />
          <SignatureDishes />
          <MenuSection />
          <Experience />
          <Reviews />
          <Location />
          <ContactCTA />
        </main>
        <Footer />
        <StickyBar />
      </div>
    </LanguageProvider>
  );
}
