import React from 'react';

const GallerySection = () => {
  const images = [
    "https://placehold.co/300x400", // Replace with actual image URLs
    "https://placehold.co/300x400",
    "https://placehold.co/300x400",
    "https://placehold.co/300x400",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6f0e4] text-gray-800 px-4 py-8">
      {/* Title */}
      <h2 className="text-4xl font-great-vibes mb-8 text-center">Our Gallery</h2>

      {/* YouTube Video */}
      <div className="w-full max-w-2xl mb-8 aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/example" // Replace with actual YouTube video link
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="rounded-lg shadow-md object-cover h-full w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
