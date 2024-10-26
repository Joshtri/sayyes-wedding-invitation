// import React from 'react';
import { FaPlay, FaHome } from 'react-icons/fa'; // Import React Icons
import imgBackgroundHero from '../TemaOne/wedding-img-diamond1.webp'

const WeddingHero = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="relative bg-gradient-to-r from-green-900 to-green-700 text-white rounded-lg shadow-lg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url('${imgBackgroundHero}`}}></div>
        {/* Content */}
        <div className="relative z-10 p-8">
          <h1 className="text-3xl font-bold text-white">THE WEDDING OF</h1>
          <h1 className="text-5xl font-extrabold text-yellow-300 mt-2">PANJI & SASA</h1>
          <p className="text-lg text-gray-200 mt-4">Minggu, 31 Desember 2024</p>

          {/* Quote */}
          <div className="mt-8 italic text-gray-300">
            <p>
              “Dan di antara ayat-ayat-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu merasa nyaman kepadanya, dan dijadikan-Nya di antaramu mawadah dan rahmah. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir”
            </p>
            <span className="block mt-4 text-right">(Q.S. Ar-Rum : 21)</span>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 bg-green-800 text-white flex justify-between p-4 border-t border-gray-700">
          <button className="text-2xl flex items-center gap-2 hover:text-yellow-300 transition duration-300">
            <FaPlay />
            <span>Play</span>
          </button>
          <button className="text-2xl flex items-center gap-2 hover:text-yellow-300 transition duration-300">
            <FaHome />
            <span>Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeddingHero;
