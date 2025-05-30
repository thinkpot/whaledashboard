import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const partners = [
  { name: 'AngelOne', logoSrc: '/partners/angelone.png', href: 'https://angelone.in' },
  { name: 'Zerodha', logoSrc: '/partners/zerodha.png', href: 'https://zerodha.com' },
  { name: 'Exness', logoSrc: '/partners/exness.png', href: 'https://exness.com' },
];

const Footer = () => (
  <footer className="bg-primary text-textcolor py-12 ">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Brand Info */}
      <div>
        <h4 className="text-2xl font-bold mb-2">Whalestreet</h4>
        <p className="text-textcolor">Empowering your trading journey with pro-grade tools.</p>
      </div>

      {/* Quick Links */}
      <div>
        <h5 className="text-xl font-semibold mb-2">Quick Links</h5>
        <ul className="space-y-1 text-textcolor">
          <li><a href="#tools" className="hover:text-white transition">Tools</a></li>
          <li><a href="#demo" className="hover:text-white transition">Demo</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      {/* Partners */}
      <div>
        <h5 className="text-xl font-semibold mb-2">Partnered With</h5>
        <div className="flex flex-wrap items-center space-x-4">
          {partners.map(p => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src={p.logoSrc}
                alt={p.name}
                className="h-8 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Social & Contact */}
      <div>
        <h5 className="text-xl font-semibold mb-2">Connect With Us</h5>
        <div className="flex space-x-4 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaFacebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram size={20} />
          </a>
        </div>
        <p className="text-textcolor">support@whalestreet.in</p>
      </div>
    </div>
    <div className="mt-8 text-center text-sm text-textcolor">
      © {new Date().getFullYear()} Whalestreet. All rights reserved.
    </div>
  </footer>
);

export default Footer;
