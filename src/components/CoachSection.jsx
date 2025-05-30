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
          VINAY VERMA
        </h2>
        <h3 className="text-2xl font-medium text-secondary mb-6">
          NISM Regd. & MBA in Finance
        </h3>
        <div className="space-y-5 leading-relaxed">
          <p>
            I am Vinay Verma, a passionate stock market coach with over 5 years of trading experience.
            Holding an MBA in Finance and NISM certification, I bring deep market insights to every session.
          </p>
          <p>
            As founder of Tradings Nerd, I empower both beginners and seasoned traders with actionable
            strategies—swing trading, intraday setups, and stock selection methods—that stand the test of markets.
          </p>
          <p>
            Having trained over 3500 traders through our workshops, my focus is on real-world, practical skills
            to help you achieve consistent profitability and recover past losses.
          </p>
          <p>
            My mission is to equip you with the knowledge and confidence to navigate the stock market
            independently and successfully.
          </p>
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
        >
          <CTAButton onClick={() => console.log('Register clicked')}>
            Register Now at ₹9 only <span className="line-through text-gray-400">1999</span>
          </CTAButton>
        </motion.div>
        <p className="mt-4 italic text-secondary">Price is Less than a Cup of Tea</p>
      </motion.div>
    </div>
  </section>
);

export default CoachSection;
