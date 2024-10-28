import React from 'react';

const LoveStory = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6f0e4] text-gray-800 px-4 py-8">
      {/* Title */}
      <h2 className="text-4xl font-great-vibes mb-8 text-center">Love Story</h2>
      
      {/* Image */}
      <div className="mb-8">
        <img
          src="https://placehold.co/600x400" // Replace with the actual image URL
          alt="Couple"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Story Text */}
      <div className="max-w-3xl text-center text-gray-700 leading-relaxed px-4">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lorem ut libero pretium venenatis nec eget lorem.
        </p>
        <p className="mb-4">
          Ut sagittis neque posuere, imperdiet magna id, maximus tellus. Vestibulum volutpat lectus nec leo luctus, vel laoreet risus facilisis.
        </p>
        <p className="mb-4">
          Duis ac arcu lacinia, posuere metus tristique, varius orci. Nullam dapibus consectetur mi, vitae accumsan orci scelerisque vitae.
        </p>
        <p>
          Proin in dignissim turpis, non pellentesque urna. Morbi egestas nibh quis quam tempus tempus.
        </p>
      </div>
    </div>
  );
};

export default LoveStory;
