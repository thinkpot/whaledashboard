import React from 'react';

/**
 * CTAButton Component
 * Reusable Call-To-Action button styled with gradient background.
 * Props:
 * - onClick: function to call when button is clicked
 * - children: button label/text
 */
const CTAButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="mt-12 inline-flex items-center bg-gradient-to-r from-primary to-secondary text-textcolor px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 transition"
  >
    {children}
  </button>
);

export default CTAButton;
