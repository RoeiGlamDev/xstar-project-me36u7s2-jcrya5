import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  socialLinks: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, socialLinks }) => {
  return (
    <footer className="bg-white text-orange-600 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">{companyName}</h2>
          <p className="mt-2 text-lg">Elevate your beauty with luxury LRP cosmetics.</p>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/about" className="hover:text-orange-500 transition duration-300">About Us</a>
          <a href="/products" className="hover:text-orange-500 transition duration-300">Products</a>
          <a href="/contact" className="hover:text-orange-500 transition duration-300">Contact</a>
          <a href="/faq" className="hover:text-orange-500 transition duration-300">FAQ</a>
        </motion.div>
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold">Connect with Us</h3>
          <div className="flex justify-center space-x-4 mt-2">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="text-orange-600 hover:text-orange-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;