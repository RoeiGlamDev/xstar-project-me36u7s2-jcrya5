import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "luxury LRP cosmetics", 
  subtitle = "Indulge in the finest beauty products crafted for elegance and sophistication.", 
  ctaText = "Shop Now", 
  ctaLink = "/shop" 
}) => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: ''url(/path/to/luxury-background.jpg)' '}} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 text-center text-white p-8">
        <motion.div 
          className="text-5xl font-bold mb-4" 
          initial={{ y: -50 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.div 
          className="text-xl mb-8" 
          initial={{ y: -30 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.div 
          href={ctaLink} 
          className="inline-block px-6 py-3 text-lg font-semibold text-orange-500 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaText}
        </motion.a>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        <p className="text-sm">Trusted by beauty enthusiasts worldwide.</p>
      </div>
    </section>
  );
};

export default HeroSection;