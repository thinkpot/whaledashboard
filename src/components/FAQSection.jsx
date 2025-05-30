import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

// FAQ data
const faqs = [
  { question: 'Is this workshop free to attend?', answer: 'Yes, this masterclass is completely free for all registered attendees.' },
  { question: 'Is there any prerequisite knowledge required?', answer: 'No prior experience needed; we cover fundamentals to advanced strategies.' },
  { question: 'How long is the workshop?', answer: 'The workshop lasts 120 minutes with interactive Q&A breaks.' },
  { question: 'Can I ask questions during the session?', answer: 'Absolutely! Live Q&A is encouraged throughout.' },
  { question: 'Will I get a recording of the workshop?', answer: 'Yes, all registrants receive a recording link post-event.' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
      {/* Decorative floating circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FAQs
          </motion.h2>
          <motion.div
            className="mx-auto mt-2 h-1 w-20 bg-primary rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
              whileHover={{ scale: 1.02 }}
            >
              <button
                className="w-full flex justify-between items-center p-5"
                onClick={() => toggle(idx)}
              >
                <span className="text-lg font-medium text-primary">{item.question}</span>
                {openIndex === idx ? (
                  <FaMinus className="text-primary" />
                ) : (
                  <FaPlus className="text-primary" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    className="px-5 pb-5 bg-secondary/10"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <p className="text-textcolor2 leading-relaxed">
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
