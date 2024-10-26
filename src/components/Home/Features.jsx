const Features = () => {
  const features = [
    { title: 'Desain Unik', description: 'Undangan dengan desain elegan dan eksklusif.' },
    { title: 'Konfirmasi Kehadiran', description: 'RSVP mudah dan cepat.' },
    { title: 'Bagikan Mudah', description: 'Sebarkan undangan hanya dengan satu klik.' },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Fitur Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
