// src/components/TransitionSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
};

export default function TransitionSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#EDE8FF] to-[#F3E8FF] overflow-hidden">
      {/* Decorative SVG blobs */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2 w-96 h-96 bg-secondary rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 py-20 px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white uppercase text-xs font-bold py-2 px-4 rounded-full mb-4"
          variants={itemVariants}
        >
          Upcoming Highlight
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4"
          variants={itemVariants}
        >
          Explore Our Indicators
        </motion.h2>

        <motion.div
          className="mx-auto h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"
          variants={itemVariants}
          style={{ width: '12rem' }}
        />

        <motion.p
          className="max-w-2xl mx-auto text-lg text-secondary mb-12"
          variants={itemVariants}
        >
          Dive into the power behind each signal with real-time insights, optimized strategies, and proven accuracy.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, delay: 1.2 }}
        >
          <FaChevronDown className="text-4xl text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
