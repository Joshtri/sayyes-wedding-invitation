import React from 'react';
import { FaHeart, FaHome } from 'react-icons/fa';

const ThankYouSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Thank You Message */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl italic font-serif">TERIMA KASIH</h2>
        <p className="text-lg">Atas kehadiran dan Doa Restunya kami ucapkan terimakasih.</p>
        <h3 className="text-3xl font-bold">PANJI & SASA</h3>
      </div>

      {/* Footer */}
      <footer className="mt-12 w-full bg-white py-4 text-center space-y-4">
        <p className="text-sm text-gray-700">
          Design with <FaHeart className="inline text-red-500" /> by <a href="https://digiveet.com" className="text-blue-600 hover:underline">digiveet.com</a>
        </p>
        <div className="flex items-center justify-center space-x-2 text-gray-700">
          <div className="flex items-center space-x-2">
            <img src="/path/to/digiveet-logo.png" alt="Digiveet Logo" className="h-6 w-6" /> {/* Replace with actual logo path */}
            <div>
              <p className="font-semibold">Digiveet</p>
              <p className="text-xs">Bagikan momen indah hanya dalam genggaman</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Home Button */}
      {/* <div className="fixed bottom-4">
        <button className="bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition duration-200">
          <FaHome />
        </button>
      </div> */}
    </div>
  );
};

export default ThankYouSection;
