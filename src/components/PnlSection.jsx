import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRupeeSign } from 'react-icons/fa';

// Sample P&L data with images
const pnlData = [
  { client: 'Aakash Sharma', imageSrc: '/pnl-aakash.png', capital: 100000, profit: 32000, roi: 32, timeframe: 'Jan–Mar 2025' },
  { client: 'Priya Patel', imageSrc: '/pnl-priya.png', capital: 150000, profit: 45000, roi: 30, timeframe: 'Feb–Apr 2025' },
  { client: 'Rahul Verma', imageSrc: '/pnl-rahul.png', capital: 200000, profit: 60000, roi: 30, timeframe: 'Mar–May 2025' },
  { client: 'Sneha Gupta', imageSrc: '/pnl-sneha.png', capital: 120000, profit: 36000, roi: 30, timeframe: 'Apr–Jun 2025' },
  { client: 'Deepak Jain', imageSrc: '/pnl-deepak.png', capital: 180000, profit: 54000, roi: 30, timeframe: 'May–Jul 2025' },
];

const PnLSection = () => {
  const [selected, setSelected] = useState(pnlData[0]);

  return (
    <section className="py-16 bg-white grid-bg">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">Verified P&L Records</h2>
        <p className="mt-2 text-lg text-gray-600">Real trader results, transparently shared</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Client List */}
        <ul className="space-y-4">
          {pnlData.map((row) => (
            <li
              key={row.client}
              onClick={() => setSelected(row)}
              className={`flex items-center p-4 rounded-lg cursor-pointer transition ${
                selected.client === row.client ? 'bg-primary/10 border-l-4 border-primary' : 'bg-gray-50 hover:bg-primary/5'
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

        {/* Detail Panel */}
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
                <span className="font-semibold"><FaRupeeSign className="inline" />{selected.capital.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Profit Gained</span>
                <span className="font-semibold"><FaRupeeSign className="inline" />{selected.profit.toLocaleString()}</span>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PnLSection;
