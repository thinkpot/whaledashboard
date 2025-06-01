import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

// Updated content arrays
const learnItems = [
  'Identify Profitable Trading Opportunities – Spot high-potential stocks and make informed trading decisions with confidence.',
  'Use Data Like Institutions – Implement real-time and historical data into your trading to gain an analytical edge.',
  'Make Data-Backed Decisions – Leverage historical patterns, statistics, and backtested insights for high-probability trades.',
  'Trade with Institutional Risk Control – Apply proven methods to minimize losses and grow consistently.',
  'Get Real-Time Trade Analysis – Receive expert analysis from our top team for deeper conviction.',
];

const audienceItems = [
  'Working Professionals – Structured, data-driven strategies for time-constrained traders.',
  'Aspiring Traders – Master advanced market techniques and build profitable systems.',
  'Growth-Oriented Investors – Decode trends with institutional-grade analysis for better returns.',
  'Students & Young Professionals – Early exposure to markets and quant-driven skills.',
  'Serious Wealth Seekers – Gain the institutional edge for side income or full-time trading.',
];

const panelVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' } }),
};

const AttendSection = () => (
  <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
    {/* Background grid pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
    {/* Accent shapes */}
    <motion.div
      className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-30"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-bl from-secondary to-primary rounded-full opacity-30"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-16 leading-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        After Attending This Session, You’ll Be Able To
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* What You’ll Learn */}
        <div>
          <motion.h3
            className="text-2xl font-semibold text-secondary mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            What You'll Learn
          </motion.h3>
          <div className="space-y-6">
            {learnItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary" />
                <div className="flex items-start">
                  <FaCheck className="text-secondary text-2xl mt-1 mr-4" />
                  <p className="text-textcolor2 leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Who Is This For? */}
        <div>
          <motion.h3
            className="text-2xl font-semibold text-secondary mb-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Who Is This For?
          </motion.h3>
          <div className="space-y-6">
            {audienceItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <div className="flex items-start">
                  <FaCheck className="text-primary text-2xl mt-1 mr-4" />
                  <p className="text-textcolor2 leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="mt-16 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
      >
        <CTAButton onClick={() => console.log('CTA clicked')}>
          Book Your 1-on-1 Meeting
        </CTAButton>
      </motion.div>
    </div>
  </section>
);

export default AttendSection;
