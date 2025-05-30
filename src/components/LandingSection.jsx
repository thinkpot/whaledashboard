import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const LandingSection = () => {
  return (
    <div className="min-h-screen bg-white grid-bg text-primary">
      {/* Top Labels & Headings */}
      <div className="text-center">
        <span className="inline-block bg-primary secondary text-textcolor_light py-3 px-8 rounded-b-2xl text-2xl font-semibold">
          Transform Your Trading Skills
        </span>
      </div>
      <section className="pt-4 pb-16 mt-2">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary">
            Mastering Institutional Trading — Book Your 1-on-1 Meeting
          </h1>
          <p className="mt-2 text-3xl italic text-secondary">
            to become a profitable trader
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Video + Features */}
          <div>
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Intro Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <ul className="mt-8 space-y-6">
              {[
                {
                  title: '6 Institutional Statistical Dashboards',
                  text: 'Powered by stats and historical data, these tools reveal market insights like top banks and hedge funds.',
                },
                {
                  title: 'Institutional Advance Datasheet',
                  text: 'Powerful fraud detection, journals, and analytics to sharpen your strategy and trade like top institutions.',
                },
                {
                  title: 'Swing & Intraday Institutional Indicators',
                  text: 'Capture perfect intraday entries and swing bottoms with 94% backtested accuracy — powered by J.P. Morgan–inspired models.',
                },
                {
                  title: 'Art of Finding Multibagger Stocks',
                  text: 'Identify multibagger stocks fast using our advanced data framework and institutional insights.',
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <FaCheckCircle className="mt-1 text-primary text-2xl flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-textcolor2 text-sm">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Meeting Details + CTA + Countdown */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">
            Session Highlights
            </h2>
            <div className="space-y-4 mb-4">
              {[
                { icon: '📊', label: 'Date',    value: '6 Institutional Dashboards Software Demo' },
                { icon: '🤝', label: 'Time',    value: 'Personalized 1-on-1 Meeting'           },
                { icon: '🔍', label: 'Duration',value: ' Your Current Portfolio Analysis & Review'        },
                { icon: '🛠️', label: 'Platform',value: 'Access to all the tools'               },
              ].map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-white p-4 rounded-lg shadow-xl border"
                >
                  <span className="text-3xl">{info.icon}</span>
                  <span className="ml-3 text-textcolor2">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-primary to-secondary text-textcolor py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 transition mb-6">
              Book Your 1-on-1 Meeting
            </button>

            <div className="text-center mb-4">
              <p className="text-base text-textcolor2 italic">
                Price is less than a cup of tea ☕️
              </p>
            </div>

            <div className="mt-10 text-center">
              <p className="text-xl font-medium mb-4 text-primary">
                ₹9 Offer Expires In
              </p>
              <div className="flex justify-center space-x-4 mb-2">
                {['00','00','00','00'].map((val, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center w-20 h-20 bg-primary text-textcolor rounded-lg"
                  >
                    <span className="text-2xl font-bold">{val}</span>
                    <span className="text-xs uppercase">
                      {['Days','Hours','Minutes','Seconds'][idx]}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-secondary">
                Hurry up! Limited period offer
              </p>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingSection;
