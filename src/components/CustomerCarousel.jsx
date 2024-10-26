// Impor modul dan CSS Swiper dengan benar
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';  // Ubah impor Autoplay
import 'swiper/css';
import 'swiper/css/autoplay';

const CustomerCarousel = () => {
  const customers = [
    'https://source.unsplash.com/1600x900/?couple1',
    'https://source.unsplash.com/1600x900/?couple2',
    'https://source.unsplash.com/1600x900/?couple3',
    'https://source.unsplash.com/1600x900/?couple4',
    'https://source.unsplash.com/1600x900/?couple5',
  ];

  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Our Customers</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}  // Pastikan modul dimasukkan di sini
      >
        {customers.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={img}
              alt={`Customer ${index + 1}`}
              className="w-40 h-40 rounded-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerCarousel;
