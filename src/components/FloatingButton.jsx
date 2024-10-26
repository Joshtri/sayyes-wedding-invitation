import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import icon WhatsApp dari react-icons

const FloatingButton = () => (
  <div className="fixed bottom-4 right-4">
    <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
      <FaWhatsapp className="text-2xl" /> {/* Menggunakan FaWhatsapp */}
    </button>
  </div>
);

export default FloatingButton;
