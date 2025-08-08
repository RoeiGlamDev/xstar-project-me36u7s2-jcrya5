import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Martinez',
    photo: '/images/sophia.jpg',
    review: 'Luxury LRP cosmetics transformed my skin! The quality is unmatched, and I feel radiant every day.',
    rating: 5,
  },
  {
    name: 'Olivia Johnson',
    photo: '/images/olivia.jpg',
    review: 'I love the luxurious feel of the products. They glide on effortlessly and leave my skin glowing.',
    rating: 4.5,
  },
  {
    name: 'Emma Brown',
    photo: '/images/emma.jpg',
    review: 'The packaging is stunning, and the results are even better. I can’t recommend Luxury LRP cosmetics enough!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-orange-600 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-orange-600 text-center">
                {testimonial.name}
              </h3>
              <p className="text-gray-700 text-center mb-4">
                {testimonial.review}
              </p>
              <div className="flex justify-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={h-5 w-5 ${i < testimonial.rating ? 'text-orange-600' : 'text-gray-300'}}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;