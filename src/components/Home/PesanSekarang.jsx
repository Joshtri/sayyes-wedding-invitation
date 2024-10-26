import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Menggunakan ikon Whatsapp dari react-icons

function PesanSekarang() {
  return (
    <div className="bg-gray-800 text-white py-12 px-8 flex justify-between items-center">
      {/* Teks Kiri */}
      <div>
        <h2 className="text-4xl font-serif mb-4">PESAN SEKARANG</h2>
        <p className="text-lg">
          Konsultasi gratis sekarang dan dapatkan undangan digital kualitas terbaik
          dan fitur terlengkap sekarang juga!
        </p>
      </div>
      
      {/* Tombol Konsultasi */}
      <div>
        <a 
          href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" 
          className="border-2 border-white text-white flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          <FaWhatsapp className="text-2xl" />
          Konsultasi Gratis Sekarang
        </a>
      </div>
    </div>
  );
}

export default PesanSekarang;
