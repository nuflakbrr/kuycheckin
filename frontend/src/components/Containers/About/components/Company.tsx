import { FC } from 'react';

const CompanySection: FC = () => {
  return (
    <section className="py-10 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="mb-10 lg:mb-0 w-full px-4 lg:w-1/2">
              <img
                src="/assets/img/hotel_building.jpg"
                loading="lazy"
                alt="Gedung PT Wikusama Hotel Tbk"
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div>
                <h1 className="max-w-sm lg:max-w-none font-primary font-semibold text-2xl lg:text-3xl mb-5">
                  Wikusama Hotel Memiliki
                </h1>
              </div>

              <div>
                <p className="font-primary font-semibold text-lg xl:text-xl text-primary mb-2">
                  Visi
                </p>

                <p className="text-gray-500 text-justify xl:text-lg leading-relaxed mb-5 px-4">
                  Berusaha Untuk Menjadi Perusahaan Manajemen Perhotelan
                  Indonesia Khususnya Di Wilayah Provinsi Jawa Timur, Yang
                  Memberi Kesan Berbeda dan Memberikan Kesan Positif Dengan
                  Semua Kalangan.
                </p>
              </div>

              <div>
                <p className="font-primary font-semibold text-lg xl:text-xl text-primary mb-2">
                  Misi
                </p>

                <p className="text-gray-500 text-justify xl:text-lg leading-relaxed">
                  <ul className="list-disc px-8">
                    <li>
                      Mengembangkan produk dan pelayanan berkualitas yang secara
                      konsisten memenuhi bahkan melebihi harapan konsumen
                    </li>
                    <li>
                      Mengembangkan sumber daya manusia berkualitas yang
                      kompeten, dinamis dan mampu secara kreatif mempertahankan
                      pelayanan yang bermutu tinggi.
                    </li>
                    <li>
                      Memantapkan posisi pasar yang kuat melalui kinerja yang
                      proaktif dan kompetitif dalam memenuhi kebutuhan konsumen.
                    </li>
                    <li>
                      Menjadi perusahaan yang efisien, profesional dan produktif
                      serta berkomitmen untuk mencapai tujuan dengan menjunjung
                      tinggi integritas, keuntungan, pengembangan karyawan dan
                      peduli akan pelestarian lingkungan.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
