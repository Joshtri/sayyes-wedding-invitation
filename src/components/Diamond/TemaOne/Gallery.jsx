import React from 'react';

const imageUrls = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
  '/path/to/image4.jpg',
  '/path/to/image5.jpg',
  '/path/to/image6.jpg',
  '/path/to/image7.jpg',
  '/path/to/image8.jpg',
  '/path/to/image9.jpg',
  '/path/to/image10.jpg',
  '/path/to/image11.jpg',
  '/path/to/image12.jpg',
  '/path/to/image13.jpg',
  '/path/to/image14.jpg',
  '/path/to/image15.jpg',
]; // Replace with actual paths to images

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-4xl font-serif font-bold mb-8">Our Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageUrls.map((url, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={url}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
