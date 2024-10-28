import React from 'react';
import { FaHeart, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-100 text-gray-700 py-8 px-4">
      {/* Design Credit */}
      <p className="text-center mb-2 flex items-center space-x-1 text-gray-500">
        <span>Design with</span>
        <FaHeart className="text-red-500" />
        <span>by</span>
        <a href="https://digiveet.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          digiveet.com
        </a>
      </p>

      {/* Logo and Tagline */}
      <div className="flex flex-col items-center mb-4">
        <img
          src="https://placehold.co/50x50" // Replace with actual logo URL
          alt="Digiveet Logo"
          className="mb-2"
        />
        <p className="text-center font-semibold">Digiveet</p>
        <p className="text-center text-sm text-gray-500">Design undangan mudah hanya dengan genggaman</p>
      </div>

      {/* Contact Information and Social Media Links */}
      <div className="flex items-center space-x-6 text-gray-600">
        {/* WhatsApp */}
        <a href="https://wa.me/6283128622243" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-gray-800">
          <FaWhatsapp />
          <span>+6283128622243</span>
        </a>

        {/* Divider */}
        <span className="text-gray-400">|</span>

        {/* Instagram */}
        <a href="https://instagram.com/digiveet" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-gray-800">
          <FaInstagram />
          <span>@digiveet</span>
        </a>

        {/* Divider */}
        <span className="text-gray-400">|</span>

        {/* TikTok */}
        <a href="https://tiktok.com/@digiveet" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-gray-800">
          <FaTiktok />
          <span>@digiveet</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
