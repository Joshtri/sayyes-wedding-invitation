import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const BrideSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6f0e4] text-gray-800 px-4 py-8">
      {/* Title */}
      <h2 className="text-3xl font-great-vibes mb-2 text-center">Bride & Groom</h2>
      
      {/* Image and Label */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-700 text-lg font-serif">
            THE BRIDE
          </div>
          <img
            src="https://placehold.co/600x400" // Replace with actual image URL
            alt="Bride"
            className="rounded-lg shadow-lg mb-6"
          />
        </div>
        
        {/* Bride's Name and Details */}
        <h3 className="text-2xl font-great-vibes mb-1">Zhea Hanifa</h3>
        <p className="text-gray-700 mb-4 text-center">
          Putri ke-1 dari :<br />
          Bapak lorem ipsum dan<br />
          Ibu lorem ipsum
        </p>
        
        {/* Instagram Link */}
        <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-700 transition">
          <FaInstagram className="mr-2" />
          digivect.com
        </button>
      </div>
    </div>
  );
};

export default BrideSection;
