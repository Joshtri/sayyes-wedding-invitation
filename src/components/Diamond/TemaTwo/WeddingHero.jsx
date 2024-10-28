import React from 'react';
import { FaMicrophoneSlash, FaHome } from 'react-icons/fa';

const WeddingHero = () => {
  const archedText = "THE WEDDING OF";

  return (
    <div
      className="relative h-screen flex items-end pb-5 justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }} // Replace with your image URL
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjust opacity as needed */}

      {/* Text Content */}
      <div className="relative text-center text-white z-10">
        {/* Arched Text */}
        <div className="flex justify-center mb-2 space-x-1">
          {archedText.split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block text-sm font-roboto tracking-widest"
              style={{
                transform: `rotate(${index * 8 - (archedText.length * 8) / 2}deg)`,
                transformOrigin: "0 40px"
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-great-vibes mb-2">Andy & Zhea</h1>
        <p className="text-lg font-roboto">31 Desember 2023</p>
      </div>

      {/* Icons */}
      {/* <div className="absolute bottom-4 left-4 z-10">
        <FaMicrophoneSlash className="text-2xl" />
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <FaHome className="text-2xl" />
      </div> */}
    </div>
  );
};

export default WeddingHero;
