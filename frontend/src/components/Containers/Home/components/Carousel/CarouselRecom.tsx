import { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Link from 'next/link';

const CarouselRecomDesktop: FC = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      breakpoints={{
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation]}
    >
      <SwiperSlide className="px-4 py-5">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover object-center"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset 1</div>
            <p className="text-primary text-base"></p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="px-4 py-5">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover object-center"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset 2</div>
            <p className="text-primary text-base"></p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="px-4 py-5">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover object-center"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset 3</div>
            <p className="text-primary text-base"></p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="px-4 py-5">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover object-center"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset 4</div>
            <p className="text-primary text-base"></p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="px-4 py-5">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover object-center"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset 5</div>
            <p className="text-primary text-base"></p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="px-4 py-5">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover object-center"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset 6</div>
            <p className="text-primary text-base"></p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="px-4 py-5">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover object-center"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset 7</div>
            <p className="text-primary text-base"></p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="px-4 py-12">
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover object-center"
            src="/assets/svg/undraw_traveling.svg"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <Link href="/search-room" legacyBehavior>
              <a className="flex items-center justify-between hover:text-primary transition-all ease-in-out duration-200">
                <h4 className="font-bold text-xl mb-2">Lihat Semua</h4>
                <FaArrowRight />
              </a>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselRecomDesktop;
