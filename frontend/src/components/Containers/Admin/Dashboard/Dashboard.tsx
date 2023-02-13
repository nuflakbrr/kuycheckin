import { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaCartPlus } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';

import Sidebar from '../../../Common/Sidebar';
import StatsSection from './components/Stats';
import axios from '../../../../lib/axios';
import { headerConfig } from '../../../../lib/headerConfig';
import { errorToast, infoToast } from '../../../../lib/toast';

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

    if (localStorage.getItem('receptionist')) {
      setUser(JSON.parse(localStorage.getItem('receptionist') || '{}'));
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
  }, []);

  return (
    <>
      <Head>
        <title>Dasbor - Wikusama Hotel</title>
      </Head>

      <ToastContainer autoClose={1500} />

      <Sidebar />

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
              <div className="flex items-center justify-between pb-6">
                <div>
                  <h2 className="text-gray-500 text-2xl font-semibold">
                    Daftar Pemesanan
                  </h2>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                  <div className="lg:ml-40 ml-10 space-x-8">
                    <Link
                      href="/admin/booking/add"
                      className="flex items-center justify-center bg-primary hover:bg-primarydark px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                    >
                      <FaCartPlus className="mr-2" /> Tambah Pemesanan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContainerDashboard;
