// import React from 'react';
import CountUp from 'react-countup';

function StatsSection() {
  const stats = [
    { value: 65, label: 'Tema' },
    { value: 1200, label: 'Pelanggan' },
    { value: 499000, label: 'Undangan Terkirim' },
  ];

  return (
    // min-h-screen and items-center.
    <div className="flex justify-center pt-10 bg-gray-100 py-2">
      <div className="grid grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-gray-800">
            <h3 className="text-3xl font-bold text-yellow-500">
              <CountUp end={stat.value} duration={2} />+
            </h3>
            <p className="mt-2 text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
