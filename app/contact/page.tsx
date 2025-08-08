import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <motion.div
        className="text-4xl font-bold text-orange-600 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>
      <motion.div
        onSubmit={handleSubmit}
        className="bg-orange-100 p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={4}
            placeholder="Your Message"
            required
          />
        </div>
        <motion.div
          type="submit"
          className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-orange-600">Visit Us</h2>
        <p className="text-gray-700">luxury LRP cosmetics</p>
        <p className="text-gray-700">123 Luxury Lane</p>
        <p className="text-gray-700">Beauty City, BC 12345</p>
        <h3 className="text-xl font-semibold text-orange-600 mt-4">Business Hours</h3>
        <p className="text-gray-700">Monday - Friday: 9 AM - 6 PM</p>
        <p className="text-gray-700">Saturday: 10 AM - 4 PM</p>
        <p className="text-gray-700">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;