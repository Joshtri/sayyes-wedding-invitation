import React, { useState } from 'react';
import { FaYoutube, FaGift, FaCopy } from 'react-icons/fa';
import bankLogo from '../TemaOne/wedding-img-diamond1.webp'; // Replace with actual path to the bank logo

const EventDetails = () => {
  const [showGiftOptions, setShowGiftOptions] = useState(false);

  const toggleGiftOptions = () => {
    setShowGiftOptions(!showGiftOptions);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative bg-cover bg-center rounded-3xl shadow-lg max-w-3xl w-full p-10" style={{ backgroundImage: `url('/path/to/background-image.jpg')` }}>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10 text-white space-y-12 text-center">
          
          {/* Live Streaming Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold">LIVE STREAMING</h2>
            <p>Kami juga berencana untuk mempublikasikan acara akad kami secara virtual melalui link berikut:</p>
            <button className="flex items-center justify-center mt-4 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-200 space-x-2">
              <FaYoutube />
              <span>LIVE STREAMING</span>
            </button>
          </div>

          {/* Separator */}
          <hr className="border-t border-gray-400" />

          {/* Wedding Gift Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold">WEDDING GIFT</h2>
            <p>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.</p>
            <button
              onClick={toggleGiftOptions}
              className="flex items-center justify-center mt-4 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-200 space-x-2"
            >
              <FaGift />
              <span>Klik disini</span>
            </button>

            {/* Conditional Gift Options */}
            {showGiftOptions && (
              <div className="flex space-x-4 mt-8">
                {/* Bank Account Card */}
                <div className="flex-1 bg-white text-black rounded-2xl p-6 shadow-lg text-center">
                  <img src={bankLogo} alt="Bank Logo" className="mx-auto mb-4 h-12" />
                  <p className="font-semibold text-lg">4516xxxx <br /> a.n Sasa</p>
                  <button className="flex items-center justify-center mt-4 px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-200 space-x-2">
                    <FaCopy />
                    <span>Salin Rekening</span>
                  </button>
                </div>

                {/* Address Card */}
                <div className="flex-1 bg-white text-black rounded-2xl p-6 shadow-lg text-center">
                  <h3 className="font-semibold text-lg">Alamat Kirim Kado</h3>
                  <hr className="my-4 border-t border-gray-400" />
                  <p className="text-sm">Nama Penerima: Sasa <br /> No. Hp: +628xxxx <br /> Alamat: Jl. Lorem Ipsum</p>
                  <button className="flex items-center justify-center mt-4 px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-200 space-x-2">
                    <FaCopy />
                    <span>Salin Alamat</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
