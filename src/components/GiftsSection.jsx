import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { FaRupeeSign } from 'react-icons/fa';

const gifts = [
  { title: 'EMA & RSI backtest report', value: '1999' },
  { title: 'Advanced Screener Spreadsheets', value: '6999' },
  { title: 'List of Multibagger Stocks', value: '3999' },
];

// Motion variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const GiftsSection = () => (
  <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 overflow-hidden">
    {/* Decorative Animated Shapes */}
    <motion.div
      className="absolute -top-10 -left-10 w-40 h-40 bg-primary rounded-full opacity-20"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-0 right-0 w-60 h-60 bg-secondary rounded-full opacity-15"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-primary mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Free Gifts Worth <FaRupeeSign className="inline" />10999 Just by Attending This Session!
      </motion.h2>

      {/* Animated Underline */}
      <motion.div
        className="mx-auto h-1 bg-primary rounded mb-12 w-0"
        initial={{ width: 0 }}
        animate={{ width: '6rem' }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      />

      {/* Gift Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {gifts.map((gift, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:-translate-y-2"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between">
              {/* Dashed Title Box */}
              <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-4">
                <p className="text-lg font-semibold text-textcolor2">{gift.title}</p>
              </div>
              {/* Value Pill */}
              <div className="ml-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                <FaRupeeSign className="inline" />{gift.value}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <div className="mb-4">
        <CTAButton onClick={() => console.log('Register Now clicked')}>
        Book Your 1-on-1 Meeting
        </CTAButton>
      </div>

      {/* Subtitle */}
      <motion.p
        className="text-xl italic text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Unlock these free gifts just by attending session!
      </motion.p>
    </div>
  </section>
);

export default GiftsSection;
