import { FC } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

import CarouselRecom from './Carousel/CarouselRecom';

const RecomendationSection: FC = () => {
  return (
    <section className="py-10 lg:pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="w-full px-4">
            <h1 className="max-w-sm lg:max-w-none font-primary font-semibold text-2xl lg:text-3xl mb-10">
              Rekomendasi Kamar Untuk Anda
            </h1>

            <div className="relative max-w-[80px] my-8 -ml-4">
              <div className="swiper-button">
                <FaAngleLeft className="swiper-button-prev" />
                <FaAngleRight className="swiper-button-next" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 md:mb-16 w-full">
          <CarouselRecom />
        </div>
      </div>
    </section>
  );
};

export default RecomendationSection;
