import { FC } from 'react';
import Head from 'next/head';

import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer';
import TopSection from './components/Top';
import SearchRoomSection from './components/SearchRoom';
import RecomendationSection from './components/Recomendation';
import AboutSection from './components/About';
import FacilitiesSection from './components/Facilities';
import CallToAction from '../../CallToAction';
import FAQ from './components/FAQ';

const ContainerHome: FC = () => {
  return (
    <>
      <Head>
        <title>Wikusama Hotel</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Berdiri sejak 2020, Wikusama Hotel adalah hotel bintang 5 yang terletak di kota Malang, Jawa Timur. Hotel ini memiliki 400 kamar yang dilengkapi dengan fasilitas terbaik di kelasnya."
        />
        <meta property="og:url" content="https://wikusamahotel.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Wikusama Hotel" />
        <meta
          property="og:description"
          content="Berdiri sejak 2020, Wikusama Hotel adalah hotel bintang 5 yang terletak di kota Malang, Jawa Timur. Hotel ini memiliki 400 kamar yang dilengkapi dengan fasilitas terbaik di kelasnya."
        />
        <meta property="og:title" content="Wikusama Hotel" />
        <meta
          property="og:image"
          content="http://wikusamahotel.com/assets/svg/undraw_travel_booking.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wikusama Hotel" />
        <meta
          name="twitter:description"
          content="Berdiri sejak 2020, Wikusama Hotel adalah hotel bintang 5 yang terletak di kota Malang, Jawa Timur. Hotel ini memiliki 400 kamar yang dilengkapi dengan fasilitas terbaik di kelasnya."
        />
        <meta
          name="twitter:image"
          content="http://wikusamahotel.com/assets/svg/undraw_travel_booking.svg"
        />
        <link rel="canonical" href="https://wikusamahotel.com/" />
      </Head>

      <Navbar />

      <main className="pt-20">
        <TopSection />
        <SearchRoomSection />
        <RecomendationSection />
        <AboutSection />
        <FacilitiesSection />
        <CallToAction />
        <FAQ />
      </main>

      <Footer />
    </>
  );
};

export default ContainerHome;
