import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    role: 'Head of Product Development',
    image: '/images/liam.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Marketing Director',
    image: '/images/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      <header className="py-10 text-center">
        <motion.div
          className="text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About luxury LRP cosmetics
        </motion.h1>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          className="text-3xl font-semibold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our History
        </motion.h2>
        <p className="mb-6">
          Founded in 2020, luxury LRP cosmetics has redefined the beauty industry with our commitment to high-quality, luxurious products. Our journey began with a vision to create cosmetics that not only enhance beauty but also nourish the skin. Each product is crafted with the finest ingredients, ensuring that our customers experience the epitome of luxury.
        </p>
        <p>
          At luxury LRP cosmetics, we believe that beauty is an art, and we are dedicated to providing our clients with the tools to express themselves elegantly. Our innovative formulations and exquisite packaging reflect our passion for luxury and sophistication.
        </p>
      </section>

      <section className="bg-orange-100 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-3xl font-semibold mb-4 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <p className="mb-6 text-center">
            At luxury LRP cosmetics, we are guided by our core values of quality, innovation, and sustainability. We strive to create products that not only meet but exceed the expectations of our discerning clientele. Our commitment to ethical sourcing and eco-friendly practices ensures that we contribute positively to the environment while delivering luxury.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          className="text-3xl font-semibold mb-4 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-orange-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;