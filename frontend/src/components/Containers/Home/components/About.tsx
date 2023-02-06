import { FC } from 'react';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

const AboutSection: FC = () => {
  return (
    <section className="pt-24 pb-10 lg:pt-36 lg:pb-24" id="about-us">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <img
                src="/assets/img/hotel_building.jpg"
                loading="lazy"
                alt="Gedung PT Brand Klinik"
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>

            <div className="mb-10 w-full px-4 lg:w-1/2">
              <p className="font-primary font-semibold text-lg xl:text-xl text-primary mb-2">
                Tentang Kami
              </p>

              <h1 className="text-3xl lg:text-4xl font-bold mb-5">
                Kami Membantu Anda Mendapatkan Akomodasi Yang Berkualitas.
              </h1>

              <p className="text-gray-500 xl:text-lg text-justify leading-relaxed mb-5">
                Wikusama Hotel adalah fasilitas masyarakat yang bergerak di
                bidang akomodasi yang berdiri sejak tahun 2020. Kami telah
                membantu banyak masyarakat dalam mendapatkan pelayanan akomodasi
                yang berkualitas.
              </p>

              <Link href="/about" legacyBehavior>
                <a className="inline-block items-center justify-center bg-primary hover:bg-primarydark active:bg-primary focus-visible:ring ring-primary text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-3 py-2">
                  Lihat Selengkapnya <FaAngleRight className="inline-block" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
