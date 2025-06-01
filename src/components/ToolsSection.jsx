// src/components/ToolsOrbitSection.jsx

import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaBookOpen, FaSearch } from 'react-icons/fa';
import './ToolsOrbitSection.css';
import CTAButton from './CTAButton';
import { motion, AnimatePresence } from 'framer-motion';

const tools = [
  {
    icon: FaShieldAlt,
    title: 'Fraud Detection Sheet',
    desc: 'Automatically flag suspicious patterns with advanced algorithms.',
  },
  {
    icon: FaBookOpen,
    title: 'Trading Journal',
    desc: 'Log trades live and analyze performance over time.',
  },
  {
    icon: FaSearch,
    title: 'Advanced Screener',
    desc: 'Filter stocks using custom multi-factor criteria.',
  },
];

export default function ToolsOrbitSection() {
  const [hovered, setHovered] = useState(null);

  // Auto-cycle hover highlight every 6s
  useEffect(() => {
    const id = setInterval(() => {
      setHovered((h) => (h === null ? 0 : (h + 1) % tools.length));
    }, 6000);
    return () => clearInterval(id);
  }, []);

  // Tooltip animation variants
  const tooltipVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: '#1e2432' }}
    >
      {/* ─── Animated Stock-Chart Line in Background ─── */}
      <motion.svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        <motion.path
          d="
            M0,150
            L100,120
            L200,140
            L300,110
            L400,130
            L500,90
            L600,160
            L700,80
            L800,140
            L900,100
            L1000,130
          "
          fill="transparent"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            pathLength: {
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        />
      </motion.svg>

      {/* ─── Light Purple Animated Circle in Background ─── */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-purple-300 opacity-20 blur-2xl z-0"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 200, 150, -100, 0],
          y: [0, -100, 50, 150, 0],
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          y: {
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />

      {/* ─── Section Heading ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          Our Pro Tools
        </h2>
        <p className="mt-2 text-lg text-gray-300">
          Seamless integration for smarter trading
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* LEFT: Static Cards */}
        <div className="grid grid-cols-1 gap-6 lg:w-1/2">
          {tools.map((t, i) => {
            const Icon = t.icon;
            const isActive = i === hovered;
            return (
              <div
                key={i}
                className={
                  `bg-white/90 hover:bg-white p-6 rounded-xl shadow-lg border-2 transition-all ` +
                  (isActive ? 'border-purple-500 shadow-2xl' : 'border-transparent')
                }
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-tr from-purple-600 to-indigo-600 text-white rounded-full text-2xl shadow-md">
                    <Icon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-[#1e2432]">
                      {t.title}
                    </h3>
                    <p className="text-gray-700 mt-1">{t.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: U-Pendulum Animation with Hover Tooltips */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div
            className="orbit-container rounded-xl p-8 relative"
            style={{
              background: 'rgba(30, 36, 50, 0.5)',
              backdropFilter: 'blur(6px)',
            }}
          >
            {/* draw the curve for reference */}
            <svg
              className="orbit-svg"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
            >
              <path
                className="orbit-path"
                d="M32 32 Q200 180 368 32"
                stroke="rgba(255, 255, 255, 0.5)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {tools.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={i}
                  className="orbit-icon cursor-pointer"
                  style={{ animationDelay: `${i * 2}s` }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Icon Bubble */}
                    <div className="bg-purple-600 text-white p-3 rounded-full shadow-lg">
                      <Icon size={24} />
                    </div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {hovered === i && (
                        <motion.div
                          className="absolute bottom-12 bg-gradient-to-tr from-purple-600 to-indigo-600 text-white text-sm font-medium py-1 px-3 rounded-lg shadow-lg whitespace-nowrap"
                          variants={tooltipVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          {t.title}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <CTAButton onClick={() => console.log('Attend clicked')}>
            Book Your 1-on-1 Meeting
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
