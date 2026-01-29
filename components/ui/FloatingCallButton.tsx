'use client';

import { Phone } from 'lucide-react';
import { siteConfig } from '@/components/site/siteConfig';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.a
      href={siteConfig.phoneHref}
      className={`
        fixed bottom-8 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-[#F07F22] text-white
        shadow-lg shadow-[#F07F22]/30
        hover:bg-[#F9B983] hover:shadow-[#F07F22]/50
        transition-all duration-300
        cursor-pointer
        border border-white/20
        backdrop-blur-sm
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      aria-label={`Call ${siteConfig.phone}`}
      title={`Call ${siteConfig.phone}`}
      initial={{ scale: 0, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="w-6 h-6" />
      <span className="sr-only">Call us at {siteConfig.phone}</span>
    </motion.a>
  );
}