import React, { useState } from 'react';
import { FaGift, FaCopy, FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa';

const GiftSection = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 py-8">
      {/* Gift Icon and Title */}
      <FaGift className="text-4xl mb-4" />
      <h2 className="text-3xl font-great-vibes mb-2">KIRIM HADIAH</h2>
      <p className="text-center text-gray-300 mb-6">
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
      </p>
      
      {/* Show Details Button */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition mb-6 flex items-center space-x-2"
      >
        <FaGift className="mr-2" />
        <span>Klik disini</span>
      </button>

      {/* Gift Details Section */}
      {showDetails && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full">
          {/* Bank Transfer Option */}
          <div className="bg-gray-100 text-gray-800 rounded-lg p-6 shadow-md flex flex-col items-center">
            <FaCreditCard className="text-4xl mb-4" />
            <img
              src="https://placehold.co/150x50?text=mandiri" // Replace with actual bank logo URL
              alt="Bank Logo"
              className="mb-2"
            />
            <p className="text-center mb-2">4516xxxx<br />a.n Yulianti</p>
            <button
              onClick={() => handleCopy("4516xxxx")}
              className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2"
            >
              <FaCopy className="mr-2" />
              <span>Salin Rekening</span>
            </button>
          </div>

          {/* Delivery Address Option */}
          <div className="bg-gray-100 text-gray-800 rounded-lg p-6 shadow-md flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">ALAMAT KIRIM KADO</h3>
            <p className="text-center mb-2">
              Nama Penerima: Zhea<br />
              No. Hp: +628xxxx<br />
              Alamat: Jl. Lorem Ipsum
            </p>
            <button
              onClick={() => handleCopy("Nama Penerima: Zhea, No. Hp: +628xxxx, Alamat: Jl. Lorem Ipsum")}
              className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2"
            >
              <FaCopy className="mr-2" />
              <span>Salin Alamat</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftSection;
