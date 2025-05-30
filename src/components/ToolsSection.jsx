import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaBookOpen, FaSearch } from 'react-icons/fa';
import './ToolsOrbitSection.css';

const tools = [
  {
    icon: FaShieldAlt,
    title: 'Fraud Detection',
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

const ToolsOrbitSection = () => {
  const [hovered, setHovered] = useState(null);

  // Optional auto-cycle hover highlight every 6s
  useEffect(() => {
    const id = setInterval(() => {
      setHovered(h => (h === null ? 0 : (h + 1) % tools.length));
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 bg-white grid-bg">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">Our Pro Tools</h2>
        <p className="mt-2 text-lg text-gray-600">Seamless integration for smarter trading</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* LEFT: Static Cards */}
        <div className="grid grid-cols-1 gap-6 lg:w-1/2">
          {tools.map((t, i) => {
            const Icon = t.icon;
            const isActive = i === hovered;
            return (
              <div
                key={i}
                className={
                  `bg-white p-6 rounded-xl shadow-lg border-2 transition-all ` +
                  (isActive
                    ? 'border-primary shadow-2xl'
                    : 'border-transparent')
                }
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-tr from-primary to-secondary text-white rounded-full text-2xl">
                    <Icon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-primary">{t.title}</h3>
                    <p className="text-textcolor2 mt-1">{t.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: U-Pendulum Animation */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="orbit-container rounded-xl p-8 relative">
            {/* draw the curve for reference */}
            <svg
              className="orbit-svg"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
            >
              <path
                className="orbit-path"
                d="M32 32 Q200 180 368 32"
              />
            </svg>

            {tools.map((t, i) => {
              const Icon = t.icon;
              return (
                <div
                  key={i}
                  className="orbit-icon"
                  style={{ animationDelay: `${i * 2}s` }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Icon size={24} color="#fff" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsOrbitSection;
