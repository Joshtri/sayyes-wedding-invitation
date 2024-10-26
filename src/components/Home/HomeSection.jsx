import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion
import FloatingButton from '../FloatingButton';

// Import gambar
import imgWedding1 from './img-wedding.jpg';
import imgWedding2 from './img-wedding-2.jpg';
import imgWedding3 from './img-wedding.jpg';

// Array gambar dan teks
const images = [imgWedding1, imgWedding2, imgWedding3];
const featureTexts = [
  "Most Complete Features",
  "Celebrate Every Moment",
  "Share Happiness Everywhere",
];

const HomeSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  // Ganti gambar setiap 3 detik
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageInterval); // Bersihkan interval saat komponen di-unmount
  }, []);

  // Ganti teks setiap 2 detik
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % featureTexts.length);
    }, 2000);

    return () => clearInterval(textInterval); // Bersihkan interval saat komponen di-unmount
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <main className="relative w-full h-screen">
        <AnimatePresence mode="wait"> {/* Gunakan mode='wait' */}
          <motion.div
            key={currentImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Responsive Text and Button Container */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-white z-10 text-left px-4 md:px-0">
          <AnimatePresence mode="wait"> {/* Gunakan mode='wait' */}
            <motion.p
              key={currentText}
              className="italic text-sm md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              {featureTexts[currentText]}
            </motion.p>
          </AnimatePresence>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            BAGIKAN MOMEN INDAH HANYA DALAM GENGGAMAN.
          </h1>
          <p className="text-base md:text-xl lg:text-2xl mt-2 md:mt-4">with sayyes</p>
          <button className="mt-4 px-4 py-2 md:px-6 md:py-2 border border-white rounded-full text-sm md:text-base">
            CEK PRICELIST
          </button>
        </div>
      </main>
      <FloatingButton />
    </div>
  );
};

export default HomeSection;
