import React from 'react';

const ThankYouSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6f0e4] text-gray-800 px-4 py-8">
      {/* Image */}
      <div className="mb-8">
        <img
          src="https://placehold.co/600x400" // Replace with the actual image URL
          alt="Couple"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Thank You Message */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Terima Kasih</h2>
      <p className="text-center text-gray-700 mb-8 max-w-2xl">
        Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i,
        berkenan hadir dan memberikan do'a restu kepada kami.
      </p>

      {/* Closing Statement */}
      <div className="text-center">
        <p className="text-gray-600 mb-2">Kami Yang Berbahagia,</p>
        <p className="text-gray-600 mb-8">Keluarga Besar Kedua Mempelai</p>
        <h3 className="text-4xl font-great-vibes">Andy & Zia</h3>
      </div>
    </div>
  );
};

export default ThankYouSection;
