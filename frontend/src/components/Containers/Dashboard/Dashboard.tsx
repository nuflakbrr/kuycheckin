import { FC, useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

import axios from '@/lib/axios';
import { headerConfig } from '@/lib/headerConfig';
import { errorToast } from '@/lib/toast';
import { User } from '@/interfaces/user';
import { Customer } from '@/interfaces/customer';
import { TypeRoom } from '@/interfaces/typeroom';
import { Room } from '@/interfaces/room';
import { Booking } from '@/interfaces/booking';
import SidebarAdmin from '@/components/Common/SidebarAdmin';
import SidebarReceptionist from '@/components/Common/SidebarReceptionist';
import SidebarCustomer from '@/components/Common/SidebarCustomer';
import StatsSection from './components/Stats';
import BookingSection from './components/Booking';

const ContainerDashboard: FC = () => {
  const [user, setUser] = useState<User | Customer>();
  const [dataTypeRoom, setDataTypeRoom] = useState<TypeRoom[]>();
  const [dataRoom, setDataRoom] = useState<Room[]>();
  const [dataBooking, setDataBooking] = useState<Booking[]>();
  const [dataUser, setDataUser] = useState<User[]>();
  const [selectVal, setSelectVal] = useState('');

  useEffect(() => {
    if (localStorage.getItem('admin')) {
      setUser(JSON.parse(localStorage.getItem('admin') || '{}'));
    }

    if (localStorage.getItem('resepsionis')) {
      setUser(JSON.parse(localStorage.getItem('resepsionis') || '{}'));
    }

    if (localStorage.getItem('pelanggan')) {
      setUser(JSON.parse(localStorage.getItem('pelanggan') || '{}'));
    }

    const getUser = async () => {
      await axios
        .get('/user', headerConfig())
        .then((res) => setDataUser(res.data.data))
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
        .get(`/booking?status=${selectVal}`, headerConfig())
        .then((res) => setDataBooking(res.data.data))
        .catch((err) => errorToast(err));
    };

    Promise.all([getUser(), getTypeRoom(), getRoom(), getBooking()]);

    return () => {
      setUser({
        id_user: 0,
        id_pelanggan: 0,
        nama_user: '',
        nama: '',
        foto: '',
        slug: '',
        email: '',
        password: '',
        role: '',
        map(arg0) {
          throw new Error('Function not implemented.');
        },
        length: 0,
      });
      setDataTypeRoom([]);
      setDataRoom([]);
      setDataBooking([]);
      setDataUser([]);
    };
  }, [selectVal]);

  return (
    <>
      <Head>
        <title>Dasbor - Wikusama Hotel</title>
      </Head>

      <ToastContainer autoClose={1500} />

      {user?.role === 'admin' && <SidebarAdmin />}

      {user?.role === 'resepsionis' && <SidebarReceptionist />}

      {user?.role === 'pelanggan' && <SidebarCustomer />}

      <main className="bg-white md:ml-64 min-h-screen">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full p-10">
              <h2 className="text-2xl font-bold text-primary capitalize">
                Dashboard {user?.role}
              </h2>

              <StatsSection
                user={user}
                dataUser={dataUser}
                dataTypeRoom={dataTypeRoom}
                dataRoom={dataRoom}
                dataBooking={dataBooking}
              />
            </div>

            <div className="w-full p-10">
              <div className="pb-6">
                <div className="flex flex-wrap items-center justify-between pb-6">
                  <h2 className="text-gray-500 text-2xl font-semibold mb-3 lg:mb-0">
                    Daftar Pemesanan
                  </h2>

                  {user?.role === 'admin' || user?.role === 'resepsionis' ? (
                    <div className="flex items-center justify-center">
                      <div className="flex items-center justify-center">
                        <p className="block text-sm font-medium text-gray-500">
                          Sortir berdasarkan:{' '}
                        </p>

                        <div className="ml-3">
                          <select
                            name="status"
                            id="status"
                            onChange={(e) => setSelectVal(e.target.value)}
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
                          >
                            <option value="">Semua</option>
                            <option value="baru">Baru</option>
                            <option value="check_in">Check-in</option>
                            <option value="check_out">Check-out</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className=""></div>
                  )}
                </div>

                <BookingSection user={user} dataBooking={dataBooking} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContainerDashboard;
