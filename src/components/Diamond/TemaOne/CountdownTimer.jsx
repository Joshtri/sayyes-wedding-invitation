import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center text-white py-12">
      <h2 className="text-4xl font-serif font-bold mb-6">COUNTDOWN TIMER</h2>
      <div className="flex space-x-8 text-center">
        {Object.keys(timeLeft).map((interval, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-5xl font-bold">{String(timeLeft[interval]).padStart(2, '0')}</span>
            <span className="text-lg mt-2">{interval.charAt(0).toUpperCase() + interval.slice(1)}</span>
          </div>
        ))}
      </div>
      <button className="mt-8 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-200">
        SAVE THE DATE
      </button>
    </div>
  );
};

export default CountdownTimer;
