import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const WeddingEvent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6f0e4] text-gray-800 px-4 py-8">
      {/* Title */}
      <h2 className="text-4xl font-great-vibes mb-8 text-center">Wedding Event</h2>
      
      {/* Image */}
      <div className="mb-8">
        <img
          src="https://placehold.co/600x400" // Replace with actual image URL
          alt="Wedding couple"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Akad Nikah Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <h3 className="text-xl font-bold text-gray-700 mb-2">AKAD NIKAH</h3>
        <p className="text-gray-700 mb-1">Minggu, 31 Desember 2022</p>
        <p className="text-gray-700 mb-2">08.00 - 09.00 WIB</p>
        <p className="text-gray-700 mb-2 font-medium">Rumah Mempelai Wanita</p>
        <p className="text-gray-600 mb-4">Jl. Lorem Ipsum No. 21 Kab. Dolor Set Amit, 71345</p>
        <a
          href="https://maps.google.com" // Replace with actual Google Maps link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-700 transition"
        >
          <FaMapMarkerAlt className="mr-2" />
          Google Maps
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 w-3/4 mb-8"></div>

      {/* Resepsi Section */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-gray-700 mb-2">RESEPSI</h3>
        <p className="text-gray-700 mb-1">Minggu, 31 Desember 2022</p>
        <p className="text-gray-700 mb-2">10.00 - 14.00 WIB</p>
        <p className="text-gray-700 mb-2 font-medium">Rumah Mempelai Wanita</p>
        <p className="text-gray-600 mb-4">Jl. Lorem Ipsum No. 21 Kab. Dolor Set Amit, 71345</p>
        <a
          href="https://maps.google.com" // Replace with actual Google Maps link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-700 transition"
        >
          <FaMapMarkerAlt className="mr-2" />
          Google Maps
        </a>
      </div>
    </div>
  );
};
    
export default WeddingEvent;
