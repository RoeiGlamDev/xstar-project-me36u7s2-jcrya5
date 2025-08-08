import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title: string;
  description: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, description }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-3 md:mr-2 mb-4 md:mb-0 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <motion.div
              type="submit"
              className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-md transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        ) : (
          <motion.div
            className="text-lg text-orange-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to luxury LRP cosmetics! Stay tuned for our latest updates and exclusive offers.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;