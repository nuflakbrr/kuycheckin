import { FC } from 'react';
import Head from 'next/head';

const ContainerFAQ: FC = () => {
  return (
    <>
      <Head>
        <title>FAQ - Wikusama Hotel</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Pertanyaan paling umum tentang cara kerja hotel kami dan apa yang dapat kami lakukan untuk Anda."
        />
        <meta property="og:url" content="https://wikusamahotel.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Wikusama Hotel" />
        <meta
          property="og:description"
          content="Pertanyaan paling umum tentang cara kerja hotel kami dan apa yang dapat kami lakukan untuk Anda."
        />
        <meta property="og:title" content="Pertanyaan Umum - Wikusama Hotel" />
        <meta
          property="og:image"
          content="http://wikusamahotel.com/assets/svg/undraw_travel_booking.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pertanyaan Umum - Wikusama Hotel" />
        <meta
          name="twitter:description"
          content="Pertanyaan paling umum tentang cara kerja hotel kami dan apa yang dapat kami lakukan untuk Anda."
        />
        <meta
          name="twitter:image"
          content="http://wikusamahotel.com/assets/svg/undraw_travel_booking.svg"
        />
        <link rel="canonical" href="https://wikusamahotel.com/faq" />
      </Head>

      <main className="pt-20">
        <section className="py-10 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="container">
              <div className="flex flex-wrap items-center justify-center">
                <div className="mb-10 md:mb-16 px-4">
                  <h2 className="font-primary font-semibold text-2xl lg:text-3xl lg:text-center text-primary mb-2">
                    Pertanyaan Umum
                  </h2>

                  <p className="max-w-screen-sm text-gray-500 xl:text-lg leading-relaxed lg:text-center">
                    Pertanyaan paling umum tentang cara kerja hotel kami dan apa
                    yang dapat kami lakukan untuk Anda.
                  </p>
                </div>

                <div className="w-full px-4">
                  <div className="rounded-xl shadow-lg p-5">
                    <div className="mb-0 md:mb-2">
                      <details className="mb-4">
                        <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                          Bagaimana Saya bisa memesan kamar hotel?
                        </summary>

                        <p className="px-2 text-justify">
                          Proses pemesanan kamar di Wikusama Hotel mudah dan
                          dengan sekali klik saja. Pilih tujuan Anda, masukkan
                          tanggal check-in dan check-out. Lalu klik &quot;Cari
                          sekarang!&quot; dan daftar pilihan Anda akan
                          ditampilkan.
                        </p>
                      </details>
                    </div>

                    <div className="mb-0 md:mb-2">
                      <details className="mb-4">
                        <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                          Bagaimana Saya bisa mengajukan pemohonan khusus?
                        </summary>

                        <p className="px-2 text-justify">
                          Anda dapat mengirim email kepada kami di
                          cs@wikusamahotel.com atau langsung menghubungi Hotel
                          untuk setiap permohonan khusus setelah pemesanan hotel
                          Anda dikonfirmasi. Setiap permohonan khusus tergantung
                          pada ketersediaan kamar hotel saat check-in. Tidak ada
                          jaminan yang bisa diberikan.
                        </p>
                      </details>
                    </div>

                    <div className="mb-0 md:mb-2">
                      <details className="mb-4">
                        <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                          Bisakah saya memesan hotel melalui telepon atau email?
                        </summary>

                        <p className="px-2 text-justify">
                          Silakan hubungi hotline Penjualan kami di
                          +6281234567890 atau Anda bisa kirim email ke
                          sales@wikusamahotel.com
                        </p>
                      </details>
                    </div>

                    <div className="mb-0 md:mb-0">
                      <details className="">
                        <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                          Berapa banyak tamu yang diizinkan untuk satu kamar
                          hotel?
                        </summary>

                        <p className="px-2 text-justify">
                          Kapasitas hunian kamar hotel tergantung pada jenis
                          kamarnya. Hotel mungkin akan membebankan biaya
                          tambahan untuk tamu tambahan. Tanyakan kepada hotel
                          yang bersangkutan atau hubungi kami untuk mendapatkan
                          bantuan.
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerFAQ;
