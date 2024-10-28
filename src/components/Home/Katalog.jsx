import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCrown, FaGem, FaStar, FaMedal, FaEye } from 'react-icons/fa'; // Tambahkan FaEye untuk Preview icon
import data from '../../data/paket.json'; // Assuming JSON is stored in a file called data.json
import './floating.css';

function Katalog() {
  const [selectedCategory, setSelectedCategory] = useState('Diamond'); // Default to 'Diamond'

  // Filter paket berdasarkan kategori yang dipilih
  const filteredPackages = data.paket.filter(p => p.kategori_paket === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-3">
      {/* Header Section */}
      <div className="w-full text-center mb-6 max-w-4xl">
        <h2 className="text-3xl font-serif text-gray-800 mt-2">
          {/* Header akan berubah sesuai kategori yang dipilih */}
          KATALOG ({selectedCategory.toUpperCase()})
        </h2>
        <div className="flex-grow border-t border-gray-300 mt-2 mx-auto w-1/2"></div> {/* Separator line */}
      </div>

      {/* Category Options */}
      <div className="flex space-x-6   border-b border-gray-300 pb-2">
  {['Diamond', 'Gold', "Syar'i", 'Silver'].map((category, index) => (
    <div
      key={index}
      className={`cursor-pointer relative ${
        selectedCategory === category
          ? 'text-gray-800 font-bold'
          : 'text-gray-500 font-normal'
      } transition-all duration-300 ease-in-out`}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
      {selectedCategory === category && (
        <span
          className="absolute left-0 -bottom-1 w-full h-0.5 bg-gray-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out"
          style={{ transform: selectedCategory === category ? 'scaleX(1)' : 'scaleX(0)' }}
        />
      )}
    </div>
  ))}
</div>





      {/* Display filtered packages with updated layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 justify-center items-center">
        {filteredPackages.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} category={selectedCategory} />
        ))}
      </div>
    </div>
  );
}

function PackageCard({ pkg, category }) {
  const [isLoading, setIsLoading] = useState(true); // State untuk melacak apakah gambar sedang dimuat

  // Function to return different icons based on the package
  const getIcon = (category) => {
    switch (category) {
      case 'Diamond':
        return <FaCrown className="text-yellow-500 text-3xl" />;
      case 'Gold':
        return <FaGem className="text-yellow-400 text-3xl" />;
      case "Syar'i":
        return <FaMedal className="text-green-500 text-3xl" />;
      case 'Silver':
        return <FaStar className="text-gray-500 text-3xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto border border-gray-300 flex flex-col items-start"> {/* Flex untuk membuat isi card rata kiri */}
      {/* Skeleton loading ketika gambar sedang dimuat */}
      <div className="relative w-full h-56">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div> // Skeleton
        )}
        <img
          src={pkg.image}
          alt={pkg.namapaket}
          className={`w-full h-56 object-cover border p-1 transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)} // Gambar telah dimuat
        />
      </div>

      <div className="p-6 w-full"> {/* Tambahkan w-full pada container ini untuk tombol memanjang */}
        <div className="flex justify-start items-center mt-4">
          {/* Tampilkan ikon berdasarkan kategori */}
          {/* {getIcon(category)} */}
        </div>
        {/* <h3 className="text-lg font-semibold text-gray-800 mt-4">{pkg.theme}</h3> */}
        <p className="text-lg font-bold text-black">{pkg.namapaket}</p>
        <div className="flex justify-between mt-2">
          <p className="text-base font-semibold text-black">{pkg.price}</p>
          <p className="text-sm text-gray-500 line-through">{pkg.originalPrice}</p>
        </div>
        <p className="text-sm text-gray-500 mt-2">{pkg.discount}</p>

        <div className="mt-4 w-full"> {/* Pastikan tombol memenuhi lebar penuh dengan w-full */}
          {/* Tambahkan icon Preview FaEye dengan animasi floating */}
          <a href={pkg.link} className="bg-white border border-gray-400 text-gray-700 px-6 py-3 rounded-full w-full text-center hover:bg-gray-700 hover:text-gray-100 flex items-center justify-center gap-2 floating-button">
            <FaEye className="mr-2" /> {/* Ikon Preview */}
            Preview
          </a>
        </div>
      </div>
    </div>
  );
}

// Define prop types for PackageCard
PackageCard.propTypes = {
  pkg: PropTypes.shape({
    namapaket: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link : PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    originalPrice: PropTypes.string,
    discount: PropTypes.string,
  }).isRequired,
  category: PropTypes.string.isRequired,
};

export default Katalog;
