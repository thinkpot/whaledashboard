import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { FaPlay } from 'react-icons/fa';

// Sample data for two indicators
const indicators = [
  {
    imageSrc: '/indicator.jpeg',
    title: 'SuperTrend Pro',
    data: [
      { label: 'Timeframe', value: '1 Hour' },
      { label: 'Signal Type', value: 'Trend-Following' },
      { label: 'Alert Method', value: 'Email & Push' },
      { label: 'Backtest Period', value: '5 Years' },
      { label: 'Supported Assets', value: 'Stocks, Crypto, Forex' },
    ],
  },
  {
    imageSrc: '/indicator.jpeg',
    title: 'Volume Breakout XT',
    data: [
      { label: 'Timeframe', value: '15 Minutes' },
      { label: 'Signal Type', value: 'Volume Spike' },
      { label: 'Alert Method', value: 'SMS & App' },
      { label: 'Backtest Period', value: '3 Years' },
      { label: 'Supported Assets', value: 'Crypto, Commodities' },
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const rowVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

const IndicatorShowcaseSection = () => {
  return (
    <div className="min-h-screen bg-white grid-bg py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Animated Title & Subtitle */}
        <motion.div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Live Indicator Overview
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Stay on top with real-time trading signals
          </motion.p>
        </motion.div>

        {/* Indicators Grid with stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {indicators.map((ind, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Decorative animated gradient pulse behind image */}
              <motion.div
                className="absolute inset-0 flex justify-center items-start pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="w-48 h-48 bg-gradient-to-tr from-secondary to-primary rounded-full opacity-30 animate-pulse"></div>
              </motion.div>

              {/* Image */}
              <motion.img
                src={ind.imageSrc}
                alt={ind.title}
                className="relative mx-auto w-full max-w-xs rounded-lg shadow mb-6 z-10"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />

              {/* Indicator Title */}
              <motion.h3
                className="relative text-2xl font-semibold text-primary mb-6 text-center z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {ind.title}
              </motion.h3>

              {/* Info Rows */}
              <div className="space-y-4 relative z-10">
                {ind.data.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center"
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex-1 p-4 bg-white border border-gray-200 rounded-l-lg shadow hover:bg-secondary/10 transition">
                      <span className="text-secondary font-medium">{item.label}</span>
                    </div>
                    <div className="w-4 h-4 bg-white transform rotate-45 border-t border-r border-gray-200"></div>
                    <div className="flex-1 p-4 bg-white border border-gray-200 rounded-r-lg shadow text-primary font-semibold text-right">
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View Demo Button */}
              <div className="relative z-10 text-center mt-6">
                <CTAButton onClick={() => console.log(`View demo for ${ind.title}`)}>
                  <FaPlay className="mr-2" /> View Demo
                </CTAButton>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA Button */}
        <div className="mt-12 flex justify-center">
          <CTAButton onClick={() => console.log('Meeting booked')}>
            Book Your 1-on-1 Meeting
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default IndicatorShowcaseSection;
