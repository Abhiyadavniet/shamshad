import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[60] pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#E07A4B] via-[#F5B041] to-[#E07A4B] origin-left shadow-[0_0_12px_#E07A4B]"
        style={{ scaleX }}
      />
    </div>
  );
}
