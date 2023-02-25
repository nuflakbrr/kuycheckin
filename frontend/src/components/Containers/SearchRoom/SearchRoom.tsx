import { FC } from 'react';
import Head from 'next/head';

import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer';
import SearchRoomSection from './components/SearchRoom';

const ContainerSearchRoom: FC = () => {
  return (
    <>
      <Head>
        <title>Cari Kamar</title>
      </Head>

      <Navbar />

      <main className="py-20">
        <SearchRoomSection />
      </main>

      <Footer />
    </>
  );
};

export default ContainerSearchRoom;
