import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-orange-600 font-bold text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="luxury LRP cosmetics logo" className="h-10" />
          luxury LRP cosmetics
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.div
            href="#products"
            className="text-gray-700 hover:text-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div
            href="#about"
            className="text-gray-700 hover:text-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="text-gray-700 hover:text-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-orange-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ height: 0}}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col p-4 space-y-2">
            <motion.div
              href="#products"
              className="text-gray-700 hover:text-orange-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Products
            </motion.a>
            <motion.div
              href="#about"
              className="text-gray-700 hover:text-orange-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#contact"
              className="text-gray-700 hover:text-orange-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;