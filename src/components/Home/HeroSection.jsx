const HeroSection = () => (
  <div
    className="relative bg-cover bg-center h-screen"
    style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?wedding')` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <h1 className="text-white text-5xl font-bold mb-4">Undangan Pernikahan Digital</h1>
      <p className="text-white text-lg mb-6">
        Buat momen spesial Anda lebih berkesan dengan undangan digital elegan
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
        Buat Sekarang
      </button>
    </div>
  </div>
);

export default HeroSection;
