import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  useEffect(() => {
    // Initialize any necessary 3D elements or animations here
  }, []);

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-orange-500 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {/ Add your 3D models here /}
      </Canvas>
      <motion.div
        className="text-5xl font-bold text-orange-600 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-lg text-gray-800 z-10 mt-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Discover our exquisite range of high-end cosmetics designed to enhance your natural beauty.
      </motion.p>
      <motion.div
        className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-500 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default Scene;