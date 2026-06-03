import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';

export const PrivacyVault = () => {
  const [isLocked, setIsLocked] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setIsLocked(true), 600);
      return () => clearTimeout(timer);
    } else {
      setIsLocked(false);
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0 40px 0' }}>
      <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
        <AnimatePresence mode="wait">
          {!isLocked ? (
            <motion.div
              key="unlock"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Unlock size={64} color="var(--primary)" />
            </motion.div>
          ) : (
            <motion.div
              key="lock"
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Lock size={64} color="#22c55e" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        style={{ textAlign: 'center' }}
      >
        <h2 className="section-title" style={{ marginBottom: '16px' }}>100% Local. 100% Private.</h2>
        <p className="section-subtitle" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          We never see your data. Because we never collect it in the first place.
        </p>
      </motion.div>
    </div>
  );
};
