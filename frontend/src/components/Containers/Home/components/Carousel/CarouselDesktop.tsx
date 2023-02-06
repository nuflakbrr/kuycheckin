import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const CarouselDesktop: FC = () => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={2}
      centeredSlides={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Navigation]}
    >
      <SwiperSlide className="py-5">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src="/assets/img/hotel_room.jpg"
            alt="Sunset in the mountains"
            loading="lazy"
            className="w-full h-52 object-cover object-center"
          />
          <div className="px-6 py-4">
            <h4 className="font-semibold text-xl mb-2">Ruang Kamar Ekskulif</h4>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="py-5">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src="/assets/img/hotel_gym.jpeg"
            alt="Sunset in the mountains"
            loading="lazy"
            className="w-full h-52 object-cover object-center"
          />
          <div className="px-6 py-4">
            <h4 className="font-semibold text-xl mb-2">Ruang Gym</h4>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="py-5">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src="/assets/img/hotel_pool.jpeg"
            alt="Sunset in the mountains"
            loading="lazy"
            className="w-full h-52 object-cover object-center"
          />
          <div className="px-6 py-4">
            <h4 className="font-semibold text-xl mb-2">Kolam Renang</h4>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="py-5">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src="/assets/img/hotel_dining.jpeg"
            alt="Sunset in the mountains"
            loading="lazy"
            className="w-full h-52 object-cover object-center"
          />
          <div className="px-6 py-4">
            <h4 className="font-semibold text-xl mb-2">Ruang Makan</h4>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselDesktop;
