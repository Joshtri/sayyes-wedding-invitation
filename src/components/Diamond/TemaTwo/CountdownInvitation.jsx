import React, { useEffect, useState } from 'react';

const CountdownInvitation = () => {
  const weddingDate = new Date('2023-12-31T00:00:00'); // Set your wedding date here
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6f0e4] text-gray-800 px-4 py-8">
      {/* Wedding Image */}
      <div className="mb-6">
        <img
          src="https://placehold.co/600x400" // Replace with the actual image URL
          alt="Wedding couple"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Countdown Timer */}
      <div className="flex space-x-8 text-center text-gray-700 font-semibold text-2xl mb-6">
        <div>
          <div>{timeLeft.days}</div>
          <div className="text-sm">Days</div>
        </div>
        <div>
          <div>{timeLeft.hours}</div>
          <div className="text-sm">Hours</div>
        </div>
        <div>
          <div>{timeLeft.minutes}</div>
          <div className="text-sm">Minutes</div>
        </div>
        <div>
          <div>{timeLeft.seconds}</div>
          <div className="text-sm">Seconds</div>
        </div>
      </div>

      {/* Save to Calendar Button */}
      <button
        className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition mb-6"
      >
        <i className="far fa-calendar-alt mr-2"></i> Simpan di Kalender
      </button>

      {/* Quote */}
      <div className="text-center text-gray-600 italic max-w-lg px-4">
        <p>
          "Dan Diantara Tanda-tanda (Kebesaran) -Nya Ialah Dia Menciptakan Pasangan-Pasangan
          Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tentram Kepadanya, Dan
          Dia Menjadikan Diantaramu Rasa Kasih Dan Sayang. Sungguh, Pada Yang Demikian Itu
          Benar-benar Terdapat Tanda-tanda (Kebesaran Allah) Bagi Kaum Yang Berfikir"
        </p>
        <p className="mt-2 text-gray-700">(Q.S : Ar-Rum (30) : 21)</p>
      </div>
    </div>
  );
};

export default CountdownInvitation;
