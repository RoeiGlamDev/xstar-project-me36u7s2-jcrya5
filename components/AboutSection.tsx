import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    description: 'With over a decade of experience in the cosmetics industry, Sophia leads luxury LRP cosmetics with a passion for innovation and quality.',
  },
  {
    name: 'James Lee',
    role: 'Head of Product Development',
    description: 'James specializes in formulating luxurious skincare products that enhance natural beauty while ensuring the highest standards of safety and efficacy.',
  },
  {
    name: 'Emily Chen',
    role: 'Marketing Director',
    description: 'Emily brings a wealth of knowledge in luxury branding and marketing strategies, ensuring luxury LRP cosmetics resonates with our discerning clientele.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">About luxury LRP cosmetics</h2>
        <p className="mb-4">
          At luxury LRP cosmetics, we believe that beauty is an art form. Our journey began with a vision to create high-end cosmetics that not only enhance your natural beauty but also nourish your skin. Each product is meticulously crafted using the finest ingredients, ensuring that our customers experience luxury in every application.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="mb-4">
          Our mission at luxury LRP cosmetics is to empower individuals to express their unique beauty through luxurious, high-quality cosmetics. We are committed to sustainability, ethical sourcing, and creating products that are as kind to the planet as they are to your skin.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="italic">{member.role}</p>
              <p className="mt-2">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;