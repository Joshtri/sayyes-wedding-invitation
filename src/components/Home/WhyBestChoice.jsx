import React from 'react';
import { FaCoins, FaShieldAlt, FaClock, FaUserFriends, FaThumbsUp } from 'react-icons/fa';
import ReactTypingEffect from 'react-typing-effect';

function WhyBestChoice() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-700 to-gray-800">
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold mb-8">
          Why <i><ReactTypingEffect
            text={["Sayyes"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
            cursorClassName="text-white"
          /></i> is your best choice?
        </h1>
        
        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 relative">
            <div className="absolute top-0 left-0 w-6 h-6 bg-black text-white text-xs flex items-center justify-center rounded-full">01.</div>
            <FaCoins className="text-2xl text-white" />
          </div>
          <div className="ml-4 text-left">
            <h2 className="text-xl font-semibold">Harga Terjangkau</h2>
            <p className="text-white">Harga terjangkau dengan kualitas desain yang eksklusif dan fitur yang lengkap.</p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 relative">
            <div className="absolute top-0 left-0 w-6 h-6 bg-gray-200 text-black text-xs flex items-center justify-center rounded-full">02.</div>
            <FaShieldAlt className="text-2xl text-white" />
          </div>
          <div className="ml-4 text-left">
            <h2 className="text-xl font-semibold">Garansi Full Support</h2>
            <p className="text-white">Kami memberi garansi full support sampai hari-H tanpa tambahan biaya.</p>
          </div>
        </div>

        {/* Poin Tambahan */}
        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 relative">
            <div className="absolute top-0 left-0 w-6 h-6 bg-gray-200 text-black text-xs flex items-center justify-center rounded-full">03.</div>
            <FaClock className="text-2xl text-white" />
          </div>
          <div className="ml-4 text-left">
            <h2 className="text-xl font-semibold">Pengiriman Cepat</h2>
            <p className="text-white">Waktu pengerjaan yang cepat dan tepat sesuai timeline yang disepakati.</p>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 relative">
            <div className="absolute top-0 left-0 w-6 h-6 bg-gray-200 text-black text-xs flex items-center justify-center rounded-full">04.</div>
            <FaUserFriends className="text-2xl text-white" />
          </div>
          <div className="ml-4 text-left">
            <h2 className="text-xl font-semibold">Pelayanan Ramah</h2>
            <p className="text-white">Kami mengutamakan kenyamanan Anda dengan pelayanan yang ramah dan profesional.</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 relative">
            <div className="absolute top-0 left-0 w-6 h-6 bg-gray-200 text-black text-xs flex items-center justify-center rounded-full">05.</div>
            <FaThumbsUp className="text-2xl text-white" />
          </div>
          <div className="ml-4 text-left">
            <h2 className="text-xl font-semibold">Kualitas Terjamin</h2>
            <p className="text-white">Kami memberikan kualitas terbaik dengan hasil undangan digital yang memukau.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default WhyBestChoice;
