import React, { useState } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'Yes',
    count: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('RSVP Submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative bg-cover bg-center rounded-3xl shadow-lg max-w-lg w-full p-10" style={{ backgroundImage: `url('/path/to/background-image.jpg')` }}>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">RSVP</h2>
          <p className="mb-6">Dimohon untuk mengisi konfirmasi kehadiran di bawah ini.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="flex flex-col items-start">
              <label className="text-sm mb-1">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama"
                className="w-full px-4 py-2 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Attendance and Count Row */}
            <div className="flex space-x-4">
              {/* Attendance Dropdown */}
              <div className="flex flex-col items-start w-1/2">
                <label className="text-sm mb-1">Kehadiran</label>
                <select
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  <option value="Yes">Ya</option>
                  <option value="No">Tidak</option>
                </select>
              </div>

              {/* Count Input */}
              <div className="flex flex-col items-start w-1/2">
                <label className="text-sm mb-1">Jumlah</label>
                <input
                  type="number"
                  name="count"
                  value={formData.count}
                  onChange={handleChange}
                  placeholder="Jumlah"
                  className="w-full px-4 py-2 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>

            {/* Confirmation Button */}
            <button
              type="submit"
              className="w-full mt-4 px-4 py-2 text-center bg-white text-black rounded-full hover:bg-gray-200 transition duration-200"
            >
              Konfirmasi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
