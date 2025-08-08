import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Luxury LRP Cosmetics</h1>
      <SlideUp>
        <h2 className="text-2xl font-semibold text-orange-500">Elevate Your Beauty Routine</h2>
        <p className="text-gray-700 mt-2">
          Discover our exquisite range of luxury cosmetics designed to enhance your natural beauty.
          At Luxury LRP Cosmetics, we believe in the power of high-quality ingredients and elegant
          formulations that cater to your unique style.
        </p>
        <button className="mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
          Shop Now
        </button>
      </SlideUp>
    </div>
  );
};

export default LuxuryLRPCosmetics;