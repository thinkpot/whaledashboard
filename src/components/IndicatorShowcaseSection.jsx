// src/components/IndicatorShowcaseSection.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { FaPlay, FaTimes } from 'react-icons/fa';

// Sample data
const indicators = [
  {
    imageSrc: '/intraday.jpeg',
    title: 'SignalAI (Intraday Indicator)',
    demoVideoId: 'c0bly6Er47k', // Replace with actual YouTube video ID
    data: [
      { label: 'Accuracy', value: '80%' },
      { label: 'Feature', value: 'Predefined TP & SL' },
      { label: 'RR Ratio', value: '1:3' },
      { label: 'Assets', value: 'All' },
      { label: 'Backtest', value: '5 Years' },
      { label: 'Strategy', value: 'Machine Learning AI' },
    ],
  },
  {
    imageSrc: '/swing.jpeg',
    title: 'BottomX (Swing Indicator)',
    demoVideoId: 'YQMVpVDqEPw', // Replace with actual YouTube video ID
    data: [
      { label: 'Accuracy', value: '92%' },
      { label: 'Feature', value: 'Capture Bottom' },
      { label: 'Stoploss', value: 'Not Needed' },
      { label: 'Assets', value: 'Equity' },
      { label: 'Backtest', value: '5 Years' },
      { label: 'Strategy', value: 'Statistics Modelling' },
    ],
  },
];

export default function IndicatorShowcaseSection() {
  const [modalVideoId, setModalVideoId] = useState(null);

  // Generate 10 animated bars for background
  const barCount = 10;
  const bars = Array.from({ length: barCount }, (_, i) => i);

  return (
    <section className="relative bg-[#F3E8FF] py-20 overflow-hidden">
      {/* ─── STOCK-INDICATOR BACKGROUND MOTION ─── */}
      {/* 1) Animated Polyline “Indicator Line” */}
      <motion.svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        <motion.path
          d="
            M0,130
            L100,100
            L200,120
            L300,90
            L400,110
            L500,80
            L600,140
            L700,70
            L800,120
            L900,90
            L1000,110
          "
          fill="transparent"
          stroke="rgba(50, 22, 110, 0.15)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            pathLength: { duration: 6, repeat: Infinity, ease: 'linear' },
          }}
        />
      </motion.svg>

      {/* 2) Animated Vertical Bars “Volume Bars” */}
      <div className="absolute inset-0 z-0 flex items-end">
        {bars.map((_, idx) => (
          <motion.div
            key={idx}
            className="mx-1 bg-secondary/20 w-2 rounded-t-md"
            initial={{ height: '20%' }}
            animate={{
              height: [
                '10%',
                '70%',
                '20%',
                '60%',
                '15%',
                '80%',
                '25%',
                '50%',
                '30%',
                '65%',
              ][idx % 10],
            }}
            transition={{
              duration: 4 + idx * 0.2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      {/* ──────────────────────────────────────────── */}

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-primary">Live Indicator Overview</h2>
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
                      <span className="block text-sm text-secondary">{item.label}</span>
                      <span className="block font-medium text-primary">{item.value}</span>
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
                  <p className="text-sm italic text-secondary">Trusted by top institutions</p>
                </motion.div>

                {/* View Demo with hover animation */}
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="inline-block"
                  >
                    <button
                      className="bg-gradient-to-tr from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold"
                      onClick={() => setModalVideoId(ind.demoVideoId)}
                    >
                      <FaPlay className="mr-2 inline" />
                      View Demo
                    </button>
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

      {/* ─── Video Modal ─── */}
      {modalVideoId && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-11/12 sm:w-3/4 lg:w-1/2 xl:w-2/5">
            {/* Close Button (higher z-index than iframe) */}
            <button
              className="absolute top-2 right-2 z-30 text-white text-2xl"
              onClick={() => setModalVideoId(null)}
            >
              <FaTimes />
            </button>
            {/* Responsive 16:9 iframe container */}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1`}
                title="Indicator Demo"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full z-20"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
