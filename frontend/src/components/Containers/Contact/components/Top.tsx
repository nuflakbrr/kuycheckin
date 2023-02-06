import { FC } from 'react';

const TopSection: FC = () => {
  return (
    <section className="py-10 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap-reverse">
            <div className="w-full px-4 lg:w-1/2">
              <p className="font-primary font-semibold text-lg xl:text-xl text-primary uppercase mb-3 md:mb-6">
                Kontak Kami
              </p>

              <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-12">
                Kami Butuh Kritik & Saran Anda
              </h1>

              <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-3 md:mb-12">
                Untuk meningkatkan kualitas layanan kami, kami sangat
                mengharapkan kritik dan saran Anda. Jika Anda memiliki kritik
                dan saran untuk kami, silahkan isi form di bawah ini.
              </p>
            </div>

            <div className="mb-10 lg:mb-0 w-full px-4 lg:w-1/2">
              <img
                src="/assets/svg/undraw_group_video.svg"
                loading="lazy"
                alt="Hero Illustration"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
