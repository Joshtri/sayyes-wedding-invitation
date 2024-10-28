import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import backgroundImage from '../TemaOne/wedding-img-diamond1.webp'; // Replace with the actual path to the background image

const EventSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative bg-cover bg-center rounded-3xl shadow-lg max-w-5xl w-full p-10" style={{ backgroundImage: `url(${backgroundImage})` }}>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10 text-white space-y-12">
          {/* Akad Nikah Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold">AKAD NIKAH</h2>
            <p className="text-lg">MINGGU, 31 DESEMBER 2024</p>
            <div className="flex items-center space-x-2">
              <FaClock />
              <span>07:00 - Selesai</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>Rumah Mempelai Wanita</span>
            </div>
            <button className="mt-4 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-200">
              Google Map
            </button>
          </div>

          {/* Separator */}
          <hr className="border-t border-gray-400" />

          {/* Resepsi Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold">RESEPSI</h2>
            <p className="text-lg">MINGGU, 31 DESEMBER 2024</p>
            <div className="flex items-center space-x-2">
              <FaClock />
              <span>09:00 - Selesai</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>Rumah Mempelai Wanita</span>
            </div>
            <button className="mt-4 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-200">
              Google Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
