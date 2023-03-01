import { FC } from 'react';
import Head from 'next/head';

import Navbar from '@/components/Common/Navbar/Navbar';
import Footer from '@/components/Common/Footer';
import TopSection from './components/Top';
import CompanySection from './components/Company';

const ContainerAbout: FC = () => {
  return (
    <>
      <Head>
        <title>Tentang Kami - Wikusama Hotel</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Berdiri sejak 2020, Wikusama Hotel adalah hotel bintang 5 yang terletak di kota Malang, Jawa Timur. Hotel ini memiliki 400 kamar yang dilengkapi dengan fasilitas terbaik di kelasnya."
        />
        <meta property="og:url" content="https://wikusamahotel.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Wikusama Hotel" />
        <meta
          property="og:description"
          content="Berdiri sejak 2020, Wikusama Hotel adalah hotel bintang 5 yang terletak di kota Malang, Jawa Timur. Hotel ini memiliki 400 kamar yang dilengkapi dengan fasilitas terbaik di kelasnya."
        />
        <meta property="og:title" content="Tentang Kami - Wikusama Hotel" />
        <meta
          property="og:image"
          content="http://wikusamahotel.com/assets/svg/undraw_travel_booking.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tentang Kami - Wikusama Hotel" />
        <meta
          name="twitter:description"
          content="Berdiri sejak 2020, Wikusama Hotel adalah hotel bintang 5 yang terletak di kota Malang, Jawa Timur. Hotel ini memiliki 400 kamar yang dilengkapi dengan fasilitas terbaik di kelasnya."
        />
        <meta
          name="twitter:image"
          content="http://wikusamahotel.com/assets/svg/undraw_travel_booking.svg"
        />
        <link rel="canonical" href="https://wikusamahotel.com/about" />
      </Head>

      <Navbar />

      <main className="pt-20">
        <TopSection />
        <CompanySection />
      </main>

      <Footer />
    </>
  );
};

export default ContainerAbout;
