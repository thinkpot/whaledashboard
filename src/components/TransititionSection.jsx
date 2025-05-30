import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const TransitionSection = () => (
  <div className="relative bg-white grid-bg py-20 overflow-hidden">
    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
      {/* Animated Pill Label */}
      <motion.span
        className="inline-block bg-gradient-to-r from-primary to-secondary text-white uppercase text-sm font-semibold px-6 py-2 rounded-full mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Upcoming Highlight
      </motion.span>

      {/* Gradient Text Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        View Our Indicators
      </motion.h2>

      {/* Animated Underline */}
      <motion.div
        className="mx-auto h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"
        initial={{ width: 0 }}
        animate={{ width: '10rem' }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      />

      {/* Subtitle */}
      <motion.p
        className="text-lg text-secondary mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Dive into the power behind each signal with real-time insights.
      </motion.p>

      {/* Animated Arrow Down */}
      <motion.div
        className="flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
      >
        <FaChevronDown className="text-3xl text-primary" />
      </motion.div>
    </div>
  </div>
);

export default TransitionSection;
