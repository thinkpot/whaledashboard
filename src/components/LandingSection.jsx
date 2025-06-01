// LandingSection.jsx

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LandingSection = () => {
  const features = [
    {
      title: 'Verified PnL',
      yOffset: '15%',    // 15% down from top of rope container
      swingDelay: 0,
    },
    {
      title: '5+ Years of Backtest Data',
      yOffset: '45%',
      swingDelay: 0.5,
    },
    {
      title: 'Associated with Top Institutions',
      yOffset: '75%',
      swingDelay: 1,
    },
  ];

  // Defines the swinging motion (rotation + slight vertical bob) for banners
  const bannerMotion = {
    animate: {
      rotate: ['-2deg', '2deg', '-2deg'],
      y: [0, -4, 0],
      transition: {
        rotate: { repeat: Infinity, repeatType: 'loop', duration: 3, ease: 'easeInOut' },
        y: { repeat: Infinity, repeatType: 'loop', duration: 3, ease: 'easeInOut' },
      },
    },
  };

  // Defines the wavy rope motion by morphing its path
  const ropeMotion = {
    animate: {
      d: [
        'M5,0 C4,40 6,80 5,120 C4,160 6,200 5,240',
        'M5,0 C4.2,40 5.8,80 5,120 C4.2,160 5.8,200 5,240',
        'M5,0 C4,40 6,80 5,120 C4,160 6,200 5,240',
      ],
      transition: { repeat: Infinity, repeatType: 'loop', duration: 3, ease: 'easeInOut' },
    },
  };

  return (
    <div className="relative min-h-screen bg-white text-primary overflow-hidden">
      {/* ─── Grid Background ─── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundSize: '30px 30px',
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)
          `,
        }}
      />

      {/* ─── Top Label ─── */}
      <div className="relative z-10 text-center mb-6 px-4 sm:px-6 lg:px-8">
        <span className="inline-block bg-primary text-white py-3 px-6 sm:px-8 rounded-b-2xl text-xl sm:text-2xl lg:text-3xl font-semibold shadow-lg">
          Transform Your Trading Skills
        </span>
      </div>

      <section className="relative z-10 pt-4 pb-16 px-4 sm:px-6 lg:px-8">
        {/* ─── Section Header ─── */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Mastering Institutional Trading — Book Your 1-on-1 Meeting
          </h1>
          <p className="mt-2 text-xl sm:text-2xl italic text-secondary">
            to become a profitable trader
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ─── Left Column: Video + Feature Cards ─── */}
          <div>
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ paddingTop: '56.25%' }} // 16:9 aspect ratio
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Intro Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6">
              {[
                {
                  title: '6 Institutional Statistical Dashboards',
                  text: 'Reveal market insights like top banks and hedge funds using historical & real-time data.',
                },
                {
                  title: 'Institutional Advance Datasheet',
                  text: 'Fraud detection, live journaling, and analytics to trade with institutional precision.',
                },
                {
                  title: 'Swing & Intraday Institutional Indicators',
                  text: 'Capture entries & exits with 92% backtested accuracy—modeled on top-tier financial firms.',
                },
                {
                  title: 'Art of Finding Multibagger Stocks',
                  text: 'Identify potential multibaggers early with advanced data frameworks and insider insights.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start bg-gray-50 p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <FaCheckCircle className="text-primary text-2xl sm:text-3xl mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-textcolor2 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Right Column: Rope Swing + Trendline + Finance Bars Background ─── */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-primary text-center">
              Session Highlights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {[
                { icon: '📊', label: 'Institutional Framework', value: '6 Dashboards Demo' },
                { icon: '🤝', label: 'Mentorship', value: '1-on-1 Meeting' },
                { icon: '🔍', label: 'Personal Support', value: 'Portfolio Review' },
                { icon: '🛠️', label: 'Pro Tools', value: 'All Access' },
              ].map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-gray-50 p-3 sm:p-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 duration-300"
                >
                  <div className="p-2 sm:p-3 bg-gradient-to-tr from-primary to-secondary text-white rounded-full text-xl sm:text-2xl flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="ml-3">
                    <p className="text-base sm:text-lg font-semibold text-primary">{info.label}</p>
                    <p className="text-textcolor2 text-sm sm:text-base">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:opacity-90 transition mb-6">
              Book Your 1-on-1 Meeting
            </button>

            {/* ─── Rope Swing + Trendline + Finance Bars Container ─── */}
            <div className="mt-10 px-4 sm:px-6 lg:px-0">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 mx-auto overflow-hidden">
                {/* ─── Finance Bars Background ─── */}
                <div className="absolute inset-0 flex items-end space-x-1 px-2 z-5">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-primary/30"
                      style={{ width: `${100 / 12}%` }}
                      initial={{ height: '20%' }}
                      animate={{ height: ['20%', '70%', '20%'] }}
                      transition={{
                        duration: 4 + i * 0.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                {/* ─── Trendline Background ─── */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 160"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="
                      M0,150 
                      L40,90 
                      L80,140 
                      L120,80 
                      L160,130 
                      L200,70 
                      L240,120 
                      L280,60 
                      L320,110 
                      L360,50 
                      L400,100
                    "
                    fill="transparent"
                    stroke="rgba(99,102,241,0.15)"  // indigo-500 @15% opacity
                    strokeWidth="6"
                    initial={{ pathLength: 0, opacity: 0.3 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{
                      pathLength: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                      opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    }}
                  />
                </svg>

                {/* ─── Centered Flex Wrapper for Rope & Banners ─── */}
                <div className="absolute inset-0 flex justify-center items-start z-10">
                  {/* Wavy Rope */}
                  <svg
                    className="w-1/12 h-full"
                    viewBox="0 0 10 200"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M5,0 C4,40 6,80 5,120 C4,160 6,200 5,240"
                      stroke="#7C3AED"
                      strokeWidth="2"
                      fill="none"
                      variants={ropeMotion}
                      animate="animate"
                    />
                  </svg>

                  {/* Overlayed banners need a relative container for vertical offsets */}
                  <div className="absolute inset-0 flex flex-col items-center">
                    {features.map((f, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute"
                        style={{ top: f.yOffset }}
                        initial={{ rotate: '-2deg', y: 0 }}
                        animate={bannerMotion.animate}
                        transition={{
                          rotate: {
                            delay: f.swingDelay,
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 3,
                            ease: 'easeInOut',
                          },
                          y: {
                            delay: f.swingDelay,
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 3,
                            ease: 'easeInOut',
                          },
                        }}
                      >
                        <div className="bg-primary text-white px-4 sm:px-6 py-2 rounded-lg shadow-lg whitespace-nowrap">
                          {f.title}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* ──────────────────────────────────────────────────────────── */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingSection;
