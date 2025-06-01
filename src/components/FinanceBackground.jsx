// src/components/FinanceBackground.jsx

import React from 'react';
import { motion } from 'framer-motion';

/**
 * A full-page animated background inspired by finance dashboards:
 * Streaming vertical bars of varying heights drift from right to left.
 * Positioned behind all content.
 */
export default function FinanceBackground() {
  // Generate 20 bars with random heights and speeds
  const bars = Array.from({ length: 20 }).map((_, i) => ({
    height: `${Math.floor(20 + Math.random() * 60)}%`, // 20%–80% of container height
    delay: Math.random() * 5,                          // staggered start
    duration: 8 + Math.random() * 4,                   // 8–12 seconds loop
    opacity: 0.1 + Math.random() * 0.15,               // 0.1–0.25 opacity
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="relative w-full h-full">
        {bars.map((bar, idx) => (
          <motion.div
            key={idx}
            className="absolute bottom-0 bg-secondary" // use your theme’s secondary for bars
            style={{
              width: `${100 / bars.length}%`,
              height: bar.height,
              left: `${(100 / bars.length) * idx}%`,
              opacity: bar.opacity,
            }}
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              loop: Infinity,
              duration: bar.duration,
              ease: 'linear',
              delay: bar.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
