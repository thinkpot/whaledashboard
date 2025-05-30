// src/components/CoachSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const CoachSection = ({ imageSrc }) => (
  <section className="relative bg-gray-800 text-white py-20 overflow-hidden">
    {/* Animated background shapes */}
    <motion.div
      className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary to-secondary opacity-15 rounded-full"
      animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
      transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-secondary to-primary opacity-10 rounded-full"
      animate={{ x: [0, -60, 0], y: [0, -60, 0] }}
      transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      {/* Image with entrance animation */}
      <motion.div
        className="flex justify-center md:justify-start"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img
          src={imageSrc}
          alt="Coach"
          className="w-full max-w-md rounded-lg shadow-2xl border-4 border-primary bg-gray-700"
        />
      </motion.div>

      {/* Text block with fade and slide */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="text-5xl font-bold mb-2 text-white">
          MAYANK AGARWAL
        </h2>
        <h3 className="text-2xl font-medium text-secondary mb-6">
          B.Tech, CFA & MBA | Quant & HFT Trader
        </h3>
        <ul className="list-disc list-inside space-y-4 mb-6">
          <li className="text-xl font-semibold">
            B.Tech from Delhi Technological University (DTU)
          </li>
          <li className="text-xl font-semibold">
            5+ years in quantitative & high-frequency trading
          </li>
          <li className="text-xl font-semibold">
            Partnered with AngelOne & Exness, managing ₹5+ crore funds
          </li>
          <li className="text-xl font-semibold">
            Trained over 1,000 students in institutional-grade strategies
          </li>
          <li className="text-xl font-semibold">
            Expert in data‑driven market analysis and HFT systems
          </li>
        </ul>

        {/* CTA Button */}
        <motion.div
          className="mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
        >
          <CTAButton onClick={() => console.log('CTA clicked')}>
          Book Your 1-on-1 Meeting
        </CTAButton>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CoachSection;
