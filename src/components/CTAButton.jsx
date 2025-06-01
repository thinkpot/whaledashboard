// src/components/CTAButton.jsx

import React from 'react';

/**
 * CTAButton Component
 * Reusable Call-To-Action button styled with gradient background.
 * Now wraps an <a> linking to Calendly.
 * Props:
 * - href: URL to open (defaults to Calendly link)
 * - children: button label/text
 */
const CTAButton = ({ href = 'https://calendly.com/admin-whalestreet/30min', children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-12 inline-flex items-center bg-gradient-to-r from-primary to-secondary text-textcolor px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 transition"
  >
    {children}
  </a>
);

export default CTAButton;
