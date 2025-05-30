// src/components/IndicatorShowcaseSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { FaPlay } from 'react-icons/fa';

// Sample data
const indicators = [
  {
    imageSrc: '/indicator.jpeg',
    title: 'SignalAI (Intraday Indicator)',
    data: [
      { label: 'Accuracy', value: '80%' },
      { label: 'Feature', value: 'Predefined TP & SL' },
      { label: 'RR Ratio', value: '1:3' },
      { label: 'Assets', value: 'All' },
      { label: 'Backtest', value: '5 Years' },
      { label: 'Strategy', value: 'Machine Learning AI'}
      
    ],
  },
  {
    imageSrc: '/indicator2.jpeg',
    title: 'BottomX (Swing Indicator)',
    data: [
      { label: 'Accuracy', value: '92%' },
      { label: 'Feature', value: 'Capture Bottom' },
      { label: 'Stoploss', value: 'Not Needed' },
      { label: 'Assets', value: 'Equity' },
      { label: 'Backtest', value: '5 Years' },
      { label: 'Strategy', value: 'Statistics Modelling'}
    ],
  },
];

export default function IndicatorShowcaseSection() {
  return (
    <section className="relative bg-[#F3E8FF] py-20 overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-secondary/20 rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-primary">
            Live Indicator Overview
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {indicators.map((ind, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.3, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="bg-white/75 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                {/* Rotating ring behind image */}
                <motion.div
                  className="relative mb-6"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                >
                  <div className="absolute inset-0 m-auto w-40 h-40 border-4 border-secondary rounded-full opacity-30" />
                  <img
                    src={ind.imageSrc}
                    alt={ind.title}
                    className="relative z-10 w-36 h-36 object-cover rounded-full mx-auto"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
                  {ind.title}
                </h3>

                {/* Data Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {ind.data.map((item, i) => (
                    <motion.div
                      key={i}
                      className="p-3 bg-[#EFF0F6] rounded-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    >
                      <span className="block text-sm text-secondary">
                        {item.label}
                      </span>
                      <span className="block font-medium text-primary">
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Institutional Trust Tagline */}
                <motion.div
                  className="text-center mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm italic text-secondary">
                    Trusted by top institutions
                  </p>
                </motion.div>

                {/* View Demo with hover animation */}
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="inline-block"
                  >
                    <CTAButton onClick={() => console.log(`View demo ${ind.title}`)}>
                      <FaPlay className="mr-2" /> View Demo
                    </CTAButton>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="mt-16 text-center">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <CTAButton onClick={() => console.log('Book meeting')}>
              Book Your 1-on-1 Meeting
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
