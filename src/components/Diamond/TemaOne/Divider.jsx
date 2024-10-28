import React from 'react';

const Divider = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="border-t border-gray-400 w-full"></div>
      <span className="mx-4 text-gray-200 text-2xl font-serif">&</span>
      <div className="border-t border-gray-400 w-full"></div>
    </div>
  );
};

export default Divider;
