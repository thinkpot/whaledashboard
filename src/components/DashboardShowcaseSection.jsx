import React, { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';
import CTAButton from './CTAButton';


// Dashboard definitions with YouTube video IDs
const dashboards = [
    { title: 'Equity Market Overview', points: ['Real-time price heatmaps', 'Sector-wise performance snapshots', 'Top gainers & losers infographics'], videoId: 'VIDEO_ID1' },
    { title: ' Volatility Analytics', points: ['Implied vs. historical volatility curves', 'Surface plots for option Greeks', 'IV rank & skew analysis'], videoId: 'VIDEO_ID2' },
    { title: 'Portfolio Health Monitor', points: ['Risk-adjusted P&L breakdown', 'Correlation & diversification metrics', 'Custom alerts & risk thresholds'], videoId: 'VIDEO_ID3' },
    { title: 'Algorithmic Strategy Builder', points: ['Drag-&-drop rule creation', 'Backtest with built-in data', 'Optimization via parameter sweeps'], videoId: 'VIDEO_ID4' },
    { title: 'Order Flow Tracker', points: ['Level II order book visualizer', 'Trade tape clustering', 'Liquidity heat charts'], videoId: 'VIDEO_ID5' },
    { title: 'Risk Management Dashboard', points: ['Value-at-Risk simulations', 'Stress-test scenario builder', 'Margin & exposure reports'], videoId: 'VIDEO_ID6' },
];

// Framer Motion variant for glowing effect
const glowVariant = {
    hidden: { boxShadow: '0 0 0 rgba(0,0,0,0)' },
    visible: { boxShadow: '0 0 20px rgba(126,48,225,0.8)' },
};

const DashboardShowcaseSection = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <div className="relative bg-gray-900 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Our Dashboards</h2>
                    <p className="mt-2 text-lg text-gray-400">Explore the six powerhouse tools that drive your trading edge</p>
                </div>

                <div className="relative">
                    {/* Curved gradient timeline line */}
                    <svg
                        className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 h-full w-full pointer-events-none"
                        viewBox="0 0 100 900"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="gradTimeline" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#7E30E1" />
                                <stop offset="100%" stopColor="#49108B" />
                            </linearGradient>
                        </defs>
                        <motion.path
                            d="M50,0 C20,150 80,300 50,450 C20,600 80,750 50,900"
                            stroke="url(#gradTimeline)"
                            strokeWidth={2}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.8, ease: 'easeOut' }}
                        />
                    </svg>

                    {/* Timeline Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 relative z-10">
                        {dashboards.map((dash, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <Fragment key={idx}>
                                    {/* Desktop left slot */}
                                    <div className={isEven ? 'hidden md:block md:pr-8 md:text-right' : 'hidden md:block'}>
                                        {isEven && (
                                            <motion.div
                                                className="relative inline-block bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm text-white mx-auto md:mx-0"
                                                variants={glowVariant}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.5 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <div className="absolute w-4 h-4 bg-white transform rotate-45 top-0 right-0 translate-x-1/2 -translate-y-1/2" />
                                                <h3 className="text-xl font-semibold text-white mb-4">{dash.title}</h3>
                                                <ul className="space-y-2 text-white">
                                                    {dash.points.map((pt, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="mr-2 text-secondary">–</span>
                                                            <span>{pt}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <button
                                                    onClick={() => setActiveVideo(dash.videoId)}
                                                    className="mt-4 inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded hover:opacity-90 transition"
                                                >
                                                    <FaPlay className="mr-2" /> View Demo
                                                </button>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="flex justify-center">
                                        <div className="w-4 h-4 bg-white rounded-full mt-2"></div>
                                    </div>

                                    {/* Mobile card */}
                                    <div className="md:hidden mt-4">
                                        <motion.div
                                            className="bg-gray-800 p-6 rounded-lg shadow-lg w-full text-white mx-auto"
                                            variants={glowVariant}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.5 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <h3 className="text-xl font-semibold text-white mb-4">{dash.title}</h3>
                                            <ul className="space-y-2 text-white">
                                                {dash.points.map((pt, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="mr-2 text-secondary">–</span>
                                                        <span>{pt}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <button
                                                onClick={() => setActiveVideo(dash.videoId)}
                                                className="mt-4 inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded hover:opacity-90 transition"
                                            >
                                                <FaPlay className="mr-2" /> View Demo
                                            </button>
                                        </motion.div>
                                    </div>

                                    {/* Desktop right slot */}
                                    <div className={isEven ? 'hidden md:block' : 'hidden md:block md:pl-8 md:text-left'}>
                                        {!isEven && (
                                            <motion.div
                                                className="relative inline-block bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm text-white mx-auto md:mx-0"
                                                variants={glowVariant}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.5 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <div className="absolute w-4 h-4 bg-white transform rotate-45 top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
                                                <h3 className="text-xl font-semibold text-white mb-4">{dash.title}</h3>
                                                <ul className="space-y-2 text-white">
                                                    {dash.points.map((pt, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="mr-2 text-secondary">–</span>
                                                            <span>{pt}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <button
                                                    onClick={() => setActiveVideo(dash.videoId)}
                                                    className="mt-4 inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded hover:opacity-90 transition"
                                                >
                                                    <FaPlay className="mr-2" /> View Demo
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
                            <div className="relative w-full max-w-3xl aspect-video">
                                <button
                                    onClick={() => setActiveVideo(null)}
                                    className="absolute top-2 right-2 text-white text-2xl"
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
                <div className="flex justify-center">
                    <CTAButton onClick={() => console.log('CTA clicked')}>Book Your 1-on-1 Meeting</CTAButton>
                </div>
            </div>
        </div>
    );
};

export default DashboardShowcaseSection;
