import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

// FAQ data
const faqs = [
  { question: 'Is this session free to attend?', answer: 'Yes, this session is completely free for all registered attendees.' },
  { question: 'Is there any prerequisite knowledge required?', answer: 'No prior experience needed; we cover fundamentals to advanced strategies.' },
  { question: 'How long is the session?', answer: 'The session lasts 120 minutes with interactive Q&A.' },
  { question: 'Can I ask questions during the session?', answer: 'Absolutely! Live Q&A is encouraged throughout.' },
  { question: 'Will I get a recording of the session?', answer: 'No, As we know its 1-1 on sessions.' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-0 left-1/2 w-48 h-48 bg-primary/20 rounded-full -translate-x-1/2"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-extrabold text-primary"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-24 bg-secondary rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-transparent hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <button
                className="w-full flex justify-between items-center p-6"
                onClick={() => toggle(idx)}
              >
                <span className="text-xl font-semibold text-primary">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-secondary"
                >
                  {openIndex === idx ? <FaMinus /> : <FaPlus />}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    className="px-6 pb-6 bg-secondary/10 text-textcolor2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <p className="leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
