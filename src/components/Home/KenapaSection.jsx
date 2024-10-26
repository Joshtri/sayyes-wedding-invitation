import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Animasi saat terlihat di layar
import ImgBackground from './HomeImage/imageBackground.jpg';

const KenapaSection = () => {
  const controls = useAnimation(); // Untuk mengontrol animasi on-scroll
  const [ref, inView] = useInView({ threshold: 0.2 }); // Animasi saat 20% terlihat
  const [rotate, setRotate] = useState({ rotateX: 0, rotateY: 0 }); // State rotasi 3D

  // Jalankan animasi saat section terlihat di layar
  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
  }, [controls, inView]);

  // Event handler untuk menghitung posisi kursor dan mengubah rotasi
  const handleMouseMove = (e) => {
    const card = e.currentTarget; // Card yang sedang di-hover
    const { left, top, width, height } = card.getBoundingClientRect(); // Posisi card

    const x = e.clientX - left - width / 2; // Posisi X relatif terhadap tengah card
    const y = e.clientY - top - height / 2; // Posisi Y relatif terhadap tengah card

    const rotateX = -(y / height) * 15; // Rotasi di sumbu X
    const rotateY = (x / width) * 15; // Rotasi di sumbu Y

    setRotate({ rotateX, rotateY });
  };

  // Reset rotasi saat kursor keluar dari card
  const handleMouseLeave = () => {
    setRotate({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center p-9 justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${ImgBackground})`,
      }}
    >
      {/* Overlay untuk membuat gambar latar lebih redup */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        className="p-8 bg-white bg-opacity-80 rounded-lg shadow-xl max-w-3xl text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.rotateX}deg) rotateY(${rotate.rotateY}deg)`,
          transition: 'transform 0.1s ease-out', // Animasi halus
        }}
        whileTap={{ scale: 0.95 }} // Efek klik
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Kenapa Harus Mencoba <span className="text-yellow-500">Undangan Website?</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Undangan website tidak melalui tahap pencetakan seperti undangan cetak sehingga bisa
          meringkas waktu pengerjaan yang biasanya <strong>7 - 14 hari</strong> menjadi hanya{' '}
          <strong>1 hari saja</strong>. Biaya juga akan sangat hemat. Karena satu undangan website{' '}
          <strong>bisa disebar tanpa batas berapapun banyaknya tamu undanganmu</strong>.
        </p>
      </motion.div>
    </div>
  );
};

export default KenapaSection;
