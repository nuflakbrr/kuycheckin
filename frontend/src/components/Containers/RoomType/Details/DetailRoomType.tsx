import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import axios from '@/lib/axios';
import { errorToast } from '@/lib/toast';
import { TypeRoom } from '@/interfaces/typeroom';
import Navbar from '@/components/Common/Navbar/Navbar';
import Footer from '@/components/Common/Footer';
import MainContentSection from './components/MainContent';
import ReviewsSection from './components/Reviews';

const ContainerDetailRoomType: FC = () => {
  const [data, setData] = useState<TypeRoom[] | any>();

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      axios
        .get(`/room-type/${slug}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {
      setData([]);
    };
  }, [router, slug]);

  return (
    <>
      <Head>
        <title>Detil Kamar {data?.nama_tipe_kamar} - Wikusama Hotel</title>
      </Head>

      <Navbar />

      <main className="pt-20">
        <MainContentSection data={data} />
        <ReviewsSection />
      </main>

      <Footer />
    </>
  );
};

export default ContainerDetailRoomType;
