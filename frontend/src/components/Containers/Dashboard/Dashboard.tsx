import { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import axios from '@/lib/axios';
import { headerConfig } from '@/lib/headerConfig';
import { errorToast, infoToast } from '@/lib/toast';
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
  const [user, setUser] = useState<User | Customer | any>();
  const [dataTypeRoom, setDataTypeRoom] = useState<TypeRoom>();
  const [dataRoom, setDataRoom] = useState<Room>();
  const [dataBooking, setDataBooking] = useState<Booking | any>();
  const [dataUser, setDataUser] = useState<User>();

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
      });
      setDataTypeRoom({
        id_tipe_kamar: 0,
        nama_tipe_kamar: '',
        slug: '',
        harga: 0,
        deskripsi: '',
        foto: '',
      });
      setDataRoom({
        id_kamar: 0,
        id_tipe_kamar: 0,
        nomor_kamar: '',
        tipe_kamar: {
          id_tipe_kamar: 0,
          nama_tipe_kamar: '',
          slug: '',
          harga: 0,
          deskripsi: '',
          foto: '',
        },
      });
      setDataBooking({
        id_pemesanan: 0,
        id_pelanggan: 0,
        id_user: 0,
        id_tipe_kamar: 0,
        nomor_pemesanan: '',
        tgl_pemesanan: '',
        tgl_check_in: '',
        tgl_check_out: '',
        nama_tamu: '',
        status_pemesanan: '',
        jumlah_kamar: 0,
        pelanggan: {
          id_pelanggan: 0,
          nama: '',
          foto: '',
          slug: '',
          email: '',
          password: '',
          role: '',
        },
        tipe_kamar: {
          id_tipe_kamar: 0,
          nama_tipe_kamar: '',
          slug: '',
          harga: 0,
          deskripsi: '',
          foto: '',
        },
        user: {
          id_user: 0,
          nama_user: '',
          foto: '',
          slug: '',
          email: '',
          password: '',
          role: '',
        },
      });
      setDataUser({
        id_user: 0,
        nama_user: '',
        foto: '',
        slug: '',
        email: '',
        password: '',
        role: '',
      });
    };
  }, []);

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
                <h2 className="text-gray-500 text-2xl font-semibold">
                  Daftar Pemesanan
                </h2>

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
