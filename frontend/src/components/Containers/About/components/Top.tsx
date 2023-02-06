import { FC } from 'react';

const TopSection: FC = () => {
  return (
    <section className="py-10 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="flex flex-col items-start lg:items-center justify-start lg:justify-center px-4">
              <p className="font-primary font-semibold text-md lg:text-lg text-primary uppercase lg:mb-2">
                Tentang Kami
              </p>

              <h1 className="text-2xl lg:text-5xl font-bold mb-3 lg:mb-5">
                Wikusama Hotel
              </h1>

              <div className="max-w-5xl">
                <p className="text-gray-500 xl:text-lg leading-relaxed text-justify mb-2">
                  Berdiri sejak 2020, Wikusama Hotel adalah hotel bintang 5 yang
                  terletak di kota Malang, Jawa Timur. Hotel ini memiliki 400
                  kamar yang dilengkapi dengan fasilitas terbaik di kelasnya.
                </p>

                <p className="text-gray-500 xl:text-lg leading-relaxed text-justify">
                  Wikusama Hotel adalah fasilitas akomodasi yang sangat cocok
                  untuk para wisatawan yang ingin menginap di Malang. Selain
                  itu, hotel ini juga sangat cocok untuk para wisatawan yang
                  ingin menginap di Malang untuk keperluan bisnis. Hotel ini
                  memiliki 400 kamar yang dilengkapi dengan fasilitas terbaik di
                  kelasnya. Selain itu, hotel ini juga memiliki fasilitas yang
                  sangat lengkap, seperti kolam renang, gym, spa, dan lain-lain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
