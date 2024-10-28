import React from 'react';
import loveStoryImage from '../TemaOne/wedding-img-diamond1.webp'; // Replace with actual path to the image

const LoveStory = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex bg-[#D3C6B1] rounded-3xl mt-10 mb-10 p-10 max-w-4xl shadow-lg space-x-10">
        
        {/* Image Section */}
        <div className="flex-shrink-0 w-1/2">
          <img
            src={loveStoryImage}
            alt="Love Story"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        
        {/* Text Section */}
        <div className="flex flex-col justify-center w-1/2 space-y-4">
          <h2 className="text-4xl font-serif font-bold text-black">LOVE STORY</h2>
          <p className="text-md text-black leading-relaxed">
            Berawal dari tempat pekerjaan Cianjur-2019, kami mengenal satu sama lain dan belum ada benih cinta kala itu, hanya sebatas teman kerja.
            <br /><br />
            Setelah cukup mengenal satu sama lain, satu tahun kurang lebih nya kami menjalin hubungan.
            <br /><br />
            Akhirnya kita memutuskan untuk melanjutkan ke Hubungan yang lebih serius mempertemukan kedua keluarga.
            <br /><br />
            Sampai tanggal ini kami melaksanakan akad terlebih dahulu dan akhirnya kami mengubah status hingga menjadi pasangan suami istri. Semoga Allah SWT memberikan keberkahan pernikahan ini.
          </p>
          <p className="text-lg font-semibold text-black mt-4">PANJI & SASA</p>
        </div>
      </div>
    </div>
  );
};

export default LoveStory;
