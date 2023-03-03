import { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import axios from '@/lib/axios';
import { headerConfig } from '@/lib/headerConfig';
import { errorToast, infoToast } from '@/lib/toast';
import SidebarAdmin from '@/components/Common/SidebarAdmin';
import SidebarReceptionist from '@/components/Common/SidebarReceptionist';
import StatsSection from './components/Stats';
import BookingSection from './components/Booking';

const ContainerDashboard: FC = () => {
  const [user, setUser] = useState<any>('');
  const [dataTypeRoom, setDataTypeRoom] = useState<any>([]);
  const [dataRoom, setDataRoom] = useState<any>([]);
  const [dataBooking, setDataBooking] = useState<any>([]);
  const [dataUser, setDataUser] = useState<any>([]);

  useEffect(() => {
    if (localStorage.getItem('admin')) {
      setUser(JSON.parse(localStorage.getItem('admin') || '{}'));
    }

    if (localStorage.getItem('resepsionis')) {
      setUser(JSON.parse(localStorage.getItem('resepsionis') || '{}'));
    }

    const getUser = async () => {
      await axios
        .get('/user', headerConfig())
        .then((res) => {
          infoToast('Memuat data 📦...');
          setDataUser(res.data.data);
        })
        .catch((err) => errorToast(err));
    };

    const getTypeRoom = async () => {
      await axios
        .get('/room-type', headerConfig())
        .then((res) => setDataTypeRoom(res.data.data))
        .catch((err) => errorToast(err));
    };

    const getRoom = async () => {
      await axios
        .get('/room', headerConfig())
        .then((res) => setDataRoom(res.data.data))
        .catch((err) => errorToast(err));
    };

    const getBooking = async () => {
      await axios
        .get('/booking', headerConfig())
        .then((res) => setDataBooking(res.data.data))
        .catch((err) => errorToast(err));
    };

    Promise.all([getUser(), getTypeRoom(), getRoom(), getBooking()]);

    return () => {
      setUser('');
      setDataTypeRoom([]);
      setDataRoom([]);
      setDataBooking([]);
      setDataUser([]);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Dasbor - Wikusama Hotel</title>
      </Head>

      <ToastContainer autoClose={1500} />

      {user.role === 'admin' && <SidebarAdmin />}

      {user.role === 'resepsionis' && <SidebarReceptionist />}

      <main className="bg-white md:ml-64 min-h-screen">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full p-10">
              <h2 className="text-2xl font-bold text-primary capitalize">
                Dashbor {user.role}
              </h2>
              <StatsSection
                dataUser={dataUser}
                dataTypeRoom={dataTypeRoom}
                dataRoom={dataRoom}
                dataBooking={dataBooking}
              />
            </div>

            <div className="w-full p-10">
              <div className="pb-6">
                <h2 className="text-gray-500 text-2xl font-semibold">
                  Daftar Pemesanan
                </h2>

                <BookingSection dataBooking={dataBooking} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContainerDashboard;
