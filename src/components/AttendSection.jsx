import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

// Data for attend sections
const leftItems = [
  'Beginners in Stock Market – Ideal for those who are new to trading and want to learn the basics.',
  'Working Professionals – Suitable for individuals with limited time, looking for strategies to manage part-time trading.',
  'Aspiring Traders – For those who wish to enhance their knowledge and develop profitable trading skills.',
  'Investors Seeking Growth – For investors who want to maximize their returns by understanding market trends.',
  'Students & Young Professionals – Interested in gaining financial knowledge and learning trading early.',
];

const rightItems = [
  'Proven Trading Strategies – Learn effective swing trading techniques that allow you to capture market momentum and maximize profits over time.',
  'Stock Selection Skills – Master the art of identifying high-potential stocks using powerful stock screening tools and metrics.',
  'Market Analysis Expertise – Develop the ability to analyze market trends and make informed trading decisions based on technical analysis.',
  'Risk Management Proficiency – Understand essential risk management principles that help protect your capital while maximizing returns.',
  'Proven Success Methods – Learn techniques used by successful traders that have been tested and refined for real-world trading.',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const AttendSection = () => (
  <section className="py-16 bg-[#F3F8FF] grid-bg overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      {/* Animated Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-primary italic text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        If you are facing above problems, Register Now!
      </motion.h2>

      {/* Two-column animated panels */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Who Should Attend */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
          variants={itemVariants}
        >
          <motion.div
            className="bg-secondary/10 text-secondary font-semibold text-lg rounded-full px-4 py-2 inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Who Should Attend?
          </motion.div>
          <div className="space-y-4">
            {leftItems.map((text, idx) => (
              <motion.div
                key={idx}
                className="group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start">
                  <FaCheck className="flex-shrink-0 mt-1 text-primary group-hover:text-secondary transition-colors" />
                  <p className="ml-3 text-textcolor2 leading-relaxed">{text}</p>
                </div>
                {idx < leftItems.length - 1 && <hr className="my-4 border-gray-200" />}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Should Attend */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
          variants={itemVariants}
        >
          <motion.div
            className="bg-secondary/10 text-secondary font-semibold text-lg rounded-full px-4 py-2 inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Why Should Attend?
          </motion.div>
          <div className="space-y-4">
            {rightItems.map((text, idx) => (
              <motion.div
                key={idx}
                className="group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start">
                  <FaCheck className="flex-shrink-0 mt-1 text-primary group-hover:text-secondary transition-colors" />
                  <p className="ml-3 text-textcolor2 leading-relaxed">{text}</p>
                </div>
                {idx < rightItems.length - 1 && <hr className="my-4 border-gray-200" />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Animated CTA Button */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <CTAButton onClick={() => console.log('CTA clicked')}>
          Book Your 1-on-1 Meeting
        </CTAButton>
      </motion.div>
    </div>
  </section>
);

export default AttendSection;
