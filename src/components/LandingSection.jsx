// LandingSection.jsx

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const bobAndPulse = {
  y: {
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
  scale: {
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
};

const LandingSection = () => {
  const features = [
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
  ];

  // ─── Define the “uptrend” pathPoints (400×160 viewBox) ───
  const pathPoints = [
    { x:   0,  y: 150 },  // bottom-left
    { x:  40,  y:  90 },  // peak
    { x:  80,  y: 140 },  // small bottom
    { x: 120,  y:  80 },  // next peak
    { x: 160,  y: 130 },  // small bottom
    { x: 200,  y:  70 },  // big peak
    { x: 240,  y: 120 },  // small bottom
    { x: 280,  y:  60 },  // next peak
    { x: 320,  y: 110 },  // small bottom
    { x: 360,  y:  50 },  // final peak
    { x: 400,  y: 100 },  // bottom-right
  ];

  // ─── Choose three indices for your custom labels ───
  const chosenPoints = [
    { index: 1, label: 'Verified PnL',              fadeDelay: 0.2 },
    { index: 5, label: '5+ Years of Backtest Data', fadeDelay: 0.6 },
    { index: 9, label: 'Associated with Top Institutions', fadeDelay: 1.0 },
  ];

  // Convert chosenPoints into position objects (CSS percentages)
  const uptrendLabels = chosenPoints.map(({ index, label, fadeDelay }) => {
    const pt = pathPoints[index];
    const leftPercent = (pt.x / 400) * 100;
    const bottomPercent = ((160 - pt.y) / 160) * 100;
    return {
      label,
      left: `${leftPercent}%`,
      bottom: `${bottomPercent}%`,
      fadeDelay,
    };
  });

  return (
    <div className="min-h-screen bg-white grid-bg text-primary">
      {/* ─── Top Label ─── */}
      <div className="text-center mb-6">
        <span className="inline-block bg-primary text-textcolor_light py-3 px-8 rounded-b-2xl text-2xl font-semibold shadow-lg">
          Transform Your Trading Skills
        </span>
      </div>

      <section className="pt-4 pb-16">
        {/* ─── Section Header ─── */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary">
            Mastering Institutional Trading — Book Your 1-on-1 Meeting
          </h1>
          <p className="mt-2 text-3xl italic text-secondary">
            to become a profitable trader
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start bg-gray-50 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="flex-shrink-0">
                    <FaCheckCircle className="text-primary text-3xl mt-1" />
                  </div>
                  <div className="ml-4">
                    {/* Title in dark color */}
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-textcolor2 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Right Column: Session Info + CTA + Big Uptrend ─── */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">
              Session Highlights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {[
                { icon: '📊', label: 'Institutional Framework', value: '6 Institutional Dashboards Demo' },
                { icon: '🤝', label: 'Mentorship', value: 'Personalized 1-on-1 Meeting' },
                { icon: '🔍', label: 'Personal Support', value: 'Portfolio Analysis & Review' },
                { icon: '🛠️', label: 'Institutional Tools', value: 'Access to All Tools' },
              ].map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-gray-50 p-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 duration-300"
                >
                  <div className="p-3 bg-gradient-to-tr from-primary to-secondary text-white rounded-full text-2xl flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-primary">{info.label}</p>
                    <p className="text-textcolor2 text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 transition mb-6">
              Book Your 1-on-1 Meeting
            </button>

            {/* ─── Attractive Text Design for the Tagline ─── */}
            <div className="text-center mb-4">
              <motion.p
                className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                The only trading framework that makes you a profitable trader, backed by top institutions.
              </motion.p>
            </div>

            {/* ─── Big Market Uptrend Animation Section ─── */}
            <div className="mt-10">
              <div className="relative w-full h-96">
                {/* SVG Uptrend Path (viewBox 0 0 400 160) */}
                <svg
                  className="w-full h-full"
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
                    stroke="#7C3AED"
                    strokeWidth="4"
                    initial={{ pathLength: 0, opacity: 0.7 }}
                    animate={{
                      pathLength: [0, 1],
                      opacity: [0.3, 1],
                    }}
                    transition={{
                      pathLength: {
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      opacity: {
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  />
                </svg>

                {/* ─── Exactly Three Bubbles (Verified PnL, 5+ Years, Associated…) ─── */}
                {uptrendLabels.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute bg-primary text-textcolor px-4 py-2 rounded-full font-semibold shadow-lg whitespace-nowrap"
                    style={{
                      left: item.left,
                      bottom: item.bottom,
                      transform: 'translateX(-50%)',
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={[
                      // 1) Pop-in (fade + scale to normal)
                      {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          delay: item.fadeDelay,
                          duration: 0.6,
                          ease: 'easeOut',
                        },
                      },
                      // 2) Then infinite bob + pulse
                      {
                        y: ['0%', '-10%', '0%'],
                        scale: [1, 1.06, 1],
                        transition: {
                          y:     { ...bobAndPulse.y,     delay: item.fadeDelay + 0.6 },
                          scale: { ...bobAndPulse.scale, delay: item.fadeDelay + 0.6 },
                        },
                      },
                    ]}
                  >
                    {item.label}
                  </motion.div>
                ))}
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
