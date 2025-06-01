// src/components/PnLSection.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRupeeSign } from 'react-icons/fa';

const pnlData = [
  { 
    client: 'Jagpal Jindal', 
    imageSrc: '/jagpalpnl.png', 
    capital: 1000000, 
    profit: 104219, 
    roi: 10.4, 
    timeframe: 'Jan–May 2025',
    verifiedPdf: 'https://console.zerodha.com/verified/8502e4be'
  },
  { 
    client: 'Kiran Devi', 
    imageSrc: '/kiranpnl.png', 
    capital: 500000, 
    profit: 73932, 
    roi: 14.78, 
    timeframe: 'Jan–May 2025',
    verifiedPdf: 'https://console.zerodha.com/verified/2f004cdc'
  },
  { 
    client: 'Raj Kumar', 
    imageSrc: '/rajpnl.png', 
    capital: 500000, 
    profit: 75495, 
    roi: 15.09, 
    timeframe: 'Aug 2024 - May 2025',
    verifiedPdf: 'https://console.zerodha.com/verified/5784cc0f'
  },
  { 
    client: 'Anant Mishra', 
    imageSrc: '/anantpnl.png', 
    capital: 200000, 
    profit: 65691, 
    roi: 32.84, 
    timeframe: 'Aug 2024 - Oct 2024',
    verifiedPdf: 'https://console.zerodha.com/verified/ee5425f4'
  },
];

export default function PnLSection() {
  const [selected, setSelected] = useState(pnlData[0]);

  // Configuration for floating icons
  const floatIcons = [
    { left: '10%', delay: 0 },
    { left: '30%', delay: 1 },
    { left: '50%', delay: 2 },
    { left: '70%', delay: 1.5 },
    { left: '90%', delay: 0.5 },
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* ─── Grid Overlay ─── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
        }}
      />

      {/* ─── Floating Background Rupee Icons & Sparkles & Waves ─── */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        {/* Floating Rupee Icons */}
        {floatIcons.map((cfg, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            style={{
              left: cfg.left,
              bottom: '-20%',
            }}
            initial={{ opacity: 0.6 }}
            animate={{
              bottom: ['-20%', '120%'],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              bottom: {
                duration: 8 + idx * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: cfg.delay,
              },
              opacity: {
                duration: 8 + idx * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: cfg.delay,
              },
            }}
          >
            <FaRupeeSign className="text-purple-600 text-5xl" />
          </motion.div>
        ))}

        {/* Sparkle Dots */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute bg-purple-400 rounded-full"
            style={{
              width: '8px',
              height: '8px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0], scale: [1, 2, 1] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated Wave Lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,140 C250,100 750,180 1000,120"
            fill="transparent"
            stroke="rgba(124, 58, 237, 0.2)"
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ pathLength: { duration: 5, repeat: Infinity, ease: 'linear' } }}
          />
          <motion.path
            d="M0,160 C250,120 750,200 1000,140"
            fill="transparent"
            stroke="rgba(124, 58, 237, 0.15)"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ pathLength: { duration: 7, repeat: Infinity, ease: 'linear', delay: 1 } }}
          />
        </motion.svg>
      </div>

      {/* ─── Main Content ─── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">Verified P&L Records</h2>
        <p className="mt-2 text-lg text-gray-600">Real trader results, transparently shared</p>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ─── Client List ─── */}
        <ul className="space-y-4">
          {pnlData.map((row) => (
            <li
              key={row.client}
              onClick={() => setSelected(row)}
              className={`flex items-center p-4 rounded-lg cursor-pointer transition ${
                selected.client === row.client
                  ? 'bg-primary/10 border-l-4 border-primary'
                  : 'bg-gray-50 hover:bg-primary/5'
              }`}
            >
              <img
                src={row.imageSrc}
                alt={`${row.client} PnL`}
                className="w-10 h-10 rounded-full mr-4 object-cover"
              />
              <span className="flex-1 font-medium text-lg text-primary">{row.client}</span>
              <span className="text-secondary font-semibold">{row.roi}%</span>
              <FaArrowRight className="ml-2 text-gray-400" />
            </li>
          ))}
        </ul>

        {/* ─── Detail Panel ─── */}
        <div className="relative">
          <motion.div
            key={selected.client}
            className="bg-gray-50 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* PnL Image */}
            <img
              src={selected.imageSrc}
              alt={`${selected.client} PnL Chart`}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-xl px-4 py-3">
              <h3 className="text-2xl font-bold">{selected.client}</h3>
            </div>

            {/* Metrics */}
            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Invested Capital</span>
                <span className="font-semibold">
                  <FaRupeeSign className="inline" />
                  {selected.capital.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Profit Gained</span>
                <span className="font-semibold">
                  <FaRupeeSign className="inline" />
                  {selected.profit.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">ROI</span>
                <span className="font-semibold">{selected.roi}%</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Timeframe</span>
                <span className="font-semibold">{selected.timeframe}</span>
              </div>
            </div>

            {/* ─── “View Verified PnL” Button ─── */}
            <div className="mt-6 text-center">
              <a
                href={selected.verifiedPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary/90 transition"
              >
                View Verified PnL
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
