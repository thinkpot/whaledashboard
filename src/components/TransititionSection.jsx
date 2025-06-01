// src/components/TransitionSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
};

export default function TransitionSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#EDE8FF] to-[#F3E8FF] overflow-hidden">
      {/* Decorative SVG blobs */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2 w-64 h-64 bg-secondary rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, -15, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 py-12 px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white uppercase text-[0.65rem] font-bold py-1.5 px-3 rounded-full mb-3"
          variants={itemVariants}
        >
          Upcoming Highlight
        </motion.span>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-3"
          variants={itemVariants}
        >
          Explore Our Indicators
        </motion.h2>

        <motion.div
          className="mx-auto h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"
          variants={itemVariants}
          style={{ width: '10rem' }}
        />

        <motion.p
          className="max-w-xl mx-auto text-base text-secondary mb-8"
          variants={itemVariants}
        >
          Dive into the power behind each signal with real-time insights, optimized strategies, and proven accuracy.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, delay: 1.2 }}
        >
          <FaChevronDown className="text-3xl text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
