import React from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiClipboardList, HiRefresh, HiCalendar, HiMap, HiMusicNote, HiCash, HiBookOpen, HiMoon } from 'react-icons/hi'; // Flowbite/React-icons for icons
import { useInView } from 'react-intersection-observer'; // To animate on scroll

function FiturUndangan() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Start animation when 10% is visible
  });

  const features = [
    { icon: HiStar, title: 'Hemat', description: '1 Undangan website bisa dibagikan unlimited' },
    { icon: HiClipboardList, title: 'Informasi', description: 'Semua informasi mempelai, lokasi & waktu resepsi bisa ditampilkan' },
    { icon: HiRefresh, title: 'Custom Tamu', description: 'Nama penerima undangan akan muncul di Cover' },
    { icon: HiCalendar, title: 'Countdown', description: 'Hitung mundur menuju acara bahagiamu' },
    { icon: HiMap, title: 'Google Maps', description: 'Menemukan acaramu jadi lebih mudah' },
    { icon: HiMoon, title: 'Islami', description: 'Adab Walimah, bisa request Animasi Faceless' },
    { icon: HiMusicNote, title: 'Musik / Lagu', description: 'Iringi undangan website dengan backsound pilihan' },
    { icon: HiCash, title: 'Amplop', description: 'Tamu undangan bisa kirim hadiah via transfer' },
    { icon: HiBookOpen, title: 'Ucapan Tamu', description: 'Tuliskan doa dan pesan untuk mempelai' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-pink-200 to-yellow-100 p-4 sm:p-8">
      <motion.div
        ref={ref}
        className="max-w-screen-lg mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
          Beberapa Fitur <span className="text-yellow-500">Undangan Website</span>
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-2 sm:p-3 bg-white rounded-md shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <feature.icon className="text-green-600 text-2xl sm:text-3xl mx-auto mb-1 sm:mb-2" />
              <h3 className="text-xs sm:text-sm font-semibold text-yellow-500 mb-1">{feature.title}</h3>
              <p className="text-xs sm:text-xs text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default FiturUndangan;
