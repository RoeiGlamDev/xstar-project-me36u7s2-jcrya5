import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    // Initialize any necessary Three.js elements here
  }, []);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <motion.div
        className="text-5xl font-bold text-orange-500 absolute top-10 left-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        luxury LRP cosmetics
      </motion.h1>
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {/ Add 3D models or elements here /}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
      <div className="absolute bottom-10 left-10">
        <motion.div
          className="text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Discover the elegance of luxury LRP cosmetics, where beauty meets sophistication.
        </motion.p>
        <motion.div
          className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingElements;