import React, { Fragment, useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';
import CTAButton from './CTAButton';

// Dashboard definitions with YouTube video IDs (4–5 word points)
const dashboards = [
  {
    title: 'IndexLens Dashboard',
    points: [
      'Compare sectors vs Nifty 50',
      'Evaluate market strength swiftly',
      'Insights for index allocation',
    ],
    videoId: 'VIDEO_ID1',
  },
  {
    title: 'Quantum Bottom Finder',
    points: [
      'Detect undervalued stocks mathematically',
      'Predict bottoms via drawdown mapping',
      'EMA, RSI, ARIMA timing signals',
    ],
    videoId: 'VIDEO_ID2',
  },
  {
    title: 'ETF Precision',
    points: [
      'Identify ETFs below fair value',
      'Monitor major support levels',
      'Understand sector ETF dynamics',
    ],
    videoId: 'VIDEO_ID3',
  },
  {
    title: 'Profit-Scan',
    points: [
      'Calculate portfolio beta instantly',
      'See allocation breakdown graphically',
      'Get diversification score easily',
    ],
    videoId: 'VIDEO_ID4',
  },
  {
    title: 'Event Master',
    points: [
      'Track events and market impact',
      'Analyze market reactions post-event',
      'Forecast trends from past events',
    ],
    videoId: 'VIDEO_ID5',
  },
  {
    title: 'Data Legacy',
    points: [
      'Rank stocks with multi-factor scoring',
      'Monitor ATH and 52-week corrections',
      'Identify Fibonacci retracement zones',
    ],
    videoId: 'VIDEO_ID6',
  },
];

// Framer Motion variant for glowing effect
const glowVariant = {
  hidden: { boxShadow: '0 0 0 rgba(0,0,0,0)' },
  visible: { boxShadow: '0 0 16px rgba(126,48,225,0.8)' },
};

const DashboardShowcaseSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // Scroll-based animation values
  const { scrollYProgress } = useViewportScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <div className="relative bg-gray-900 py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Our Dashboards</h2>
          <p className="mt-1 text-base text-gray-400">
            Explore the six powerhouse tools that drive your trading edge
          </p>
        </div>

        <div className="relative">
          {/* Curved gradient timeline line */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 h-full w-full pointer-events-none"
            viewBox="0 0 100 600"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradTimeline" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7E30E1" />
                <stop offset="100%" stopColor="#49108B" />
              </linearGradient>
              <linearGradient id="gradInner" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(126,48,225,0)" />
                <stop offset="50%" stopColor="rgba(126,48,225,0.6)" />
                <stop offset="100%" stopColor="rgba(126,48,225,0)" />
              </linearGradient>
            </defs>
            {/* Outer static path */}
            <motion.path
              d="M50,0 C20,100 80,200 50,300 C20,400 80,500 50,600"
              stroke="url(#gradTimeline)"
              strokeWidth={2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            {/* Inner glowing path that moves with scroll */}
            <motion.path
              d="M50,0 C20,100 80,200 50,300 C20,400 80,500 50,600"
              stroke="url(#gradInner)"
              strokeWidth={1}
              fill="none"
              style={{ translateY: yOffset }}
            />
          </svg>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 relative z-10">
            {dashboards.map((dash, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <Fragment key={idx}>
                  {/* Desktop left slot */}
                  <div
                    className={
                      isEven
                        ? 'hidden md:block md:pr-6 md:text-right'
                        : 'hidden md:block'
                    }
                  >
                    {isEven && (
                      <motion.div
                        className="relative inline-block bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-sm text-white mx-auto md:mx-0"
                        variants={glowVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute w-3 h-3 bg-white transform rotate-45 top-0 right-0 translate-x-1/2 -translate-y-1/2" />
                        <h3 className="text-lg font-semibold mb-3">{dash.title}</h3>
                        <ul className="space-y-1">
                          {dash.points.map((pt, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <span className="mr-2 text-secondary">–</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => setActiveVideo(dash.videoId)}
                          className="mt-3 inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-3 py-2 rounded hover:opacity-90 transition text-sm"
                        >
                          <FaPlay className="mr-1" /> View Demo
                        </button>
                      </motion.div>
                    )}
                  </div>

                  {/* Timeline dot */}
                  <div className="flex justify-center">
                    <div className="w-3 h-3 bg-white rounded-full mt-1"></div>
                  </div>

                  {/* Mobile card */}
                  <div className="md:hidden mt-2">
                    <motion.div
                      className="bg-gray-800 p-4 rounded-lg shadow-lg w-full text-white mx-auto"
                      variants={glowVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-lg font-semibold mb-3">{dash.title}</h3>
                      <ul className="space-y-1 text-sm">
                        {dash.points.map((pt, i) => (
                          <li key={i} className="flex items-center">
                            <span className="mr-2 text-secondary">–</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => setActiveVideo(dash.videoId)}
                        className="mt-3 inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-3 py-2 rounded hover:opacity-90 transition text-sm"
                      >
                        <FaPlay className="mr-1" /> View Demo
                      </button>
                    </motion.div>
                  </div>

                  {/* Desktop right slot */}
                  <div
                    className={
                      isEven
                        ? 'hidden md:block'
                        : 'hidden md:block md:pl-6 md:text-left'
                    }
                  >
                    {!isEven && (
                      <motion.div
                        className="relative inline-block bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-sm text-white mx-auto md:mx-0"
                        variants={glowVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute w-3 h-3 bg-white transform rotate-45 top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
                        <h3 className="text-lg font-semibold mb-3">{dash.title}</h3>
                        <ul className="space-y-1">
                          {dash.points.map((pt, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <span className="mr-2 text-secondary">–</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => setActiveVideo(dash.videoId)}
                          className="mt-3 inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-3 py-2 rounded hover:opacity-90 transition text-sm"
                        >
                          <FaPlay className="mr-1" /> View Demo
                        </button>
                      </motion.div>
                    )}
                  </div>
                </Fragment>
              );
            })}
          </div>

          {/* Video Modal */}
          {activeVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="relative w-full max-w-2xl aspect-video">
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-2 right-2 text-white text-xl"
                >
                  <FaTimes />
                </button>
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Dashboard Demo"
                />
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <CTAButton onClick={() => console.log('CTA clicked')}>
            Book Your 1-on-1 Meeting
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default DashboardShowcaseSection;
