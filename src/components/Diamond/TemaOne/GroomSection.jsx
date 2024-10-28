import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import groomImage from '../TemaOne/wedding-img-diamond1.webp'; // Replace with actual path to the groom's image

const GroomSection = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen ">
      {/* Vertical Text on the Left */}
      <div className="absolute left-4 transform rotate-90 text-white text-2xl font-serif tracking-widest">
        THE GROOM
      </div>
      
      {/* Content Container */}
      <div className="relative flex items-center bg-black bg-opacity-50 p-8 rounded-lg shadow-lg max-w-lg">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg opacity-60"
          style={{ backgroundImage: `url(${groomImage})` }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 text-white text-center p-8">
          <h2 className="text-4xl font-bold mb-2">PANJI GEMILANG</h2>
          <p className="text-md mb-4">Putra dari Bapak Lorem Ipsum dan Ibu Lorem Ipsum</p>
          
          {/* Social Media Icon */}
          <div className="flex justify-center items-center space-x-2">
            <FaInstagram />
            <span>@panji</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroomSection;
