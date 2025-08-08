import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Luxury Skin Care Package',
    price: '$150',
    features: [
      'Deep Cleansing Facial',
      'Moisturizing Treatment',
      'Luxury Face Mask',
      'Complimentary Consultation',
    ],
  },
  {
    title: 'Premium Makeup Application',
    price: '$120',
    features: [
      'Full Face Makeup',
      'Luxury Products Used',
      'Personalized Look',
      'Complimentary Touch-Up',
    ],
  },
  {
    title: 'Exclusive Spa Day',
    price: '$300',
    features: [
      'Full Body Massage',
      'Facial Treatment',
      'Manicure & Pedicure',
      'Luxury Refreshments',
    ],
  },
];

const FAQ = [
  {
    question: 'What products do you use?',
    answer: 'We use only the highest quality luxury products that are safe and effective for all skin types.',
  },
  {
    question: 'Do you offer group discounts?',
    answer: 'Yes, we offer special pricing for groups of 5 or more. Please contact us for more details.',
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment directly through our website or by calling our customer service.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.div
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Luxury LRP Cosmetics Pricing
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{option.title}</h2>
            <p className="text-xl font-bold mb-4">{option.price}</p>
            <ul className="list-disc list-inside mb-4">
              {option.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors duration-300">
              Book Now
            </button>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="text-3xl font-bold text-center mt-12 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="bg-orange-100 p-6 rounded-lg">
        {FAQ.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;