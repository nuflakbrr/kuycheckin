import { FC } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

import CarouselDesktop from './Carousel/CarouselDesktop';
import CarouselMobile from './Carousel/CarouselMobile';

const FacilitiesSection: FC = () => {
  return (
    <section className="py-10 lg:pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="mb-10 md:mb-16 w-full px-4 lg:w-1/2">
              <h2 className="font-primary font-semibold text-2xl lg:text-3xl text-primary mb-2">
                Fasilitas Kami
              </h2>

              <p className="max-w-screen-xs text-gray-500 xl:text-lg leading-relaxed">
                Wikusama Hotel menawarkan berbagai macam fasilitas untuk
                kenyamanan Pelanggan. Berikut adalah fasilitas kami bisa Anda
                nikmati di Wikusama Hotel.
              </p>

              <div className="relative max-w-[80px] my-8 -ml-4">
                <div className="swiper-button">
                  <FaAngleLeft className="swiper-button-prev" />
                  <FaAngleRight className="swiper-button-next" />
                </div>
              </div>
            </div>

            <div className="mb-10 md:mb-16 w-full px-4 lg:w-1/2">
              <div className="hidden lg:contents">
                <CarouselDesktop />
              </div>

              <div className="contents lg:hidden">
                <CarouselMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
