import { FC, useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Link from 'next/link';

import axios from '@/lib/axios';
import { formatCurrency } from '@/lib/formatCurrency';
import { TypeRoom } from '@/interfaces/typeroom';

const CarouselRecom: FC = () => {
  const [data, setData] = useState<TypeRoom[]>([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('/room-type')
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    Promise.all([getData()]);

    return () => {
      setData([]);
    };
  }, []);

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
      {data?.map((a: any, i: any) => (
        <SwiperSlide className="px-4 py-5" key={i}>
          <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-[200px] object-cover object-center"
              src={a.foto || '/assets/img/template-img-room.png'}
              loading="lazy"
              alt="Sunset in the mountains"
            />

            <div className="px-6 py-4">
              <h2 className="font-bold text-xl text-primary">
                {a.nama_tipe_kamar}
              </h2>

              <p
                dangerouslySetInnerHTML={{
                  __html: a.deskripsi.substring(0, 25) + '...',
                }}
                className="font-normal text-base text-gray-500 whitespace-no-wrap mt-2"
              />
            </div>

            <div className="flex items-center justify-between px-6 pb-4">
              <p className="font-semibold text-lg text-gray-500">
                {formatCurrency(a.harga)}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}

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

export default CarouselRecom;
