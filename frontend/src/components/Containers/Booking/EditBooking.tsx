import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

import axios from '@/lib/axios';
import { headerConfig } from '@/lib/headerConfig';
import { errorToast, successToast } from '@/lib/toast';
import { formatLocalTime } from '@/lib/formatLocalTime';
import { bindingState } from '@/lib/bindingState';
import { User } from '@/interfaces/user';
import { Customer } from '@/interfaces/customer';
import { Room } from '@/interfaces/room';
import { Booking } from '@/interfaces/booking';
import SidebarAdmin from '@/components/Common/SidebarAdmin';
import SidebarReceptionist from '@/components/Common/SidebarReceptionist';
import SidebarCustomer from '@/components/Common/SidebarCustomer';

const ContainerEditBooking: FC = () => {
  const [user, setUser] = useState<User | Customer>();
  const [data, setData] = useState<Booking[] | any>();
  const [dataRoom, setDataRoom] = useState<Room[]>();
  const [dataUser, setDataUser] = useState<User[]>();
  const [dataUpdate, setDataUpdate] = useState<string | any>({
    status_pemesanan: 'default',
    id_user: 'default',
  });

  const router = useRouter();
  const { id } = router.query;

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

    if (id) {
      const getData = async () => {
        await axios
          .get(`/booking/${id}`, headerConfig())
          .then((res) => {
            res ? setData(res.data.data) : errorToast('Data tidak ditemukan!');
          })
          .catch((err) => {
            errorToast('Data tidak ditemukan!');
            console.log(err);
          });
      };

      const getDataById = async () => {
        await axios
          .get(`/booking/detail/${id}`, headerConfig())
          .then((res) => {
            if (res) {
              setDataRoom(res.data.data);
            } else {
              errorToast('Data tidak ditemukan!');
            }
          })
          .catch((err) => {
            errorToast('Data tidak ditemukan!');
            console.log(err);
          });
      };

      const getDataUser = async () => {
        await axios
          .get('/user', headerConfig())
          .then((res) => {
            if (res) {
              setDataUser(res.data.data);
            } else {
              errorToast('Data tidak ditemukan!');
            }
          })
          .catch((err) => {
            errorToast('Data tidak ditemukan!');
            console.log(err);
          });
      };

      Promise.all([getData(), getDataById(), getDataUser()]);

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
        setData({
          id_pemesanan: 0,
          id_pelanggan: 0,
          id_user: 0,
          id_tipe_kamar: 0,
          nomor_pemesanan: '',
          tgl_pemesanan: '',
          tgl_check_in: '',
          tgl_check_out: '',
          nama_tamu: '',
          jumlah_kamar: 0,
          status_pemesanan: '',
          pelanggan: [],
          tipe_kamar: [],
          user: [],
        });
        setDataRoom([]);
        setDataUser([]);
      };
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendData = { ...dataUpdate };
    const token = localStorage.getItem('access');

    await axios
      .put(`/booking/${id}`, sendData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        if (res) {
          successToast('Berhasil mengubah data pemesanan!');
          setTimeout(() => {
            if (user?.role === 'admin') {
              router.push('/admin/dashboard');
            } else {
              router.push('/receptionist/dashboard');
            }
          }, 1800);
        } else {
          errorToast('Gagal mengubah data pemesanan!');
        }
      })
      .catch((err) => {
        errorToast('Gagal mengubah data pemesanan!');
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Ubah Pemesanan - Wikusama Hotel</title>
      </Head>

      <ToastContainer autoClose={1500} />

      {user?.role === 'admin' && <SidebarAdmin />}

      {user?.role === 'resepsionis' && <SidebarReceptionist />}

      {user?.role === 'pelanggan' && <SidebarCustomer />}

      <main className="bg-white md:ml-64 min-h-screen">
        <section className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-10 pt-10">
              <h2 className="text-2xl font-bold text-primary capitalize">
                Ubah Pemesanan
              </h2>
            </div>

            <div className="w-full p-10">
              <div className="w-full">
                <div className="border-gray-300 bg-white border-solid border-2 rounded-lg px-5">
                  <div className="mt-3">
                    <h1 className="text-xl font-bold text-primary border-b-2 border-solid border-gray-300 pb-3">
                      Rincian Pesanan
                    </h1>

                    <div className="w-full lg:flex justify-between gap-5 py-5">
                      <div className="w-full">
                        <h2 className="mb-2 text-lg font-medium text-gray-500">
                          Nomor Pemesanan
                        </h2>

                        <input
                          disabled
                          className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
                          type="text"
                          value={data?.nomor_pemesanan || 'Tidak Diketahui'}
                        />
                      </div>
                    </div>

                    <div className="w-full flex justify-between gap-5 pb-5">
                      <div className="w-full">
                        <h2 className="mb-2 text-lg font-medium text-gray-500">
                          Nama Tipe Kamar
                        </h2>

                        <input
                          disabled
                          className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
                          type="text"
                          value={
                            data?.tipe_kamar?.nama_tipe_kamar ||
                            'Tidak Diketahui'
                          }
                        />
                      </div>
                    </div>

                    <div className="w-full flex justify-between gap-5 pb-5">
                      <div className="w-full">
                        <h2 className="mb-2 text-lg font-medium text-gray-500">
                          Nama Pemesan
                        </h2>

                        <input
                          disabled
                          className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
                          type="text"
                          value={data?.pelanggan?.nama || 'Tidak Diketahui'}
                        />
                      </div>

                      <div className="w-full">
                        <h2 className="mb-2 text-lg font-medium text-gray-500">
                          Email Pemesan
                        </h2>

                        <input
                          disabled
                          className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
                          type="email"
                          value={data?.pelanggan?.email || 'Tidak Diketahui'}
                        />
                      </div>
                    </div>

                    <div className="w-full flex justify-between gap-5 pb-5">
                      <div className="w-full">
                        <h2 className="mb-2 text-lg font-medium text-gray-500">
                          Status Pemesanan
                        </h2>

                        <input
                          disabled
                          className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
                          type="text"
                          value={
                            data?.status_pemesanan === 'check_in'
                              ? 'Check-in'
                              : 'Check-out' || 'Tidak Diketahui'
                          }
                        />
                      </div>

                      <div className="w-full">
                        <h2 className="mb-2 text-lg font-medium text-gray-500">
                          Petugas Pemesanan
                        </h2>

                        <input
                          disabled
                          className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
                          type="email"
                          value={data?.user?.nama_user || 'Tidak Diketahui'}
                        />
                      </div>
                    </div>

                    <div className="w-full flex justify-between gap-5 pb-5">
                      <div className="w-full">
                        <h2 className="mb-2 text-sm lg:text-lg font-medium text-gray-500">
                          Tgl Pemesanan
                        </h2>

                        <input
                          type="text"
                          disabled
                          className="w-full rounded-lg "
                          value={
                            formatLocalTime(data?.tgl_pemesanan) ||
                            'Tidak Diketahui'
                          }
                        />
                      </div>

                      <div className="w-full">
                        <h2 className="mb-2 text-sm lg:text-lg font-medium text-gray-500">
                          Tgl Check In
                        </h2>

                        <input
                          type="text"
                          disabled
                          className="w-full rounded-lg "
                          value={
                            formatLocalTime(data?.tgl_check_in) ||
                            'Tidak Diketahui'
                          }
                        />
                      </div>

                      <div className="w-full">
                        <h2 className="mb-2 text-sm lg:text-lg font-medium text-gray-500">
                          Tgl Check Out
                        </h2>

                        <input
                          type="text"
                          disabled
                          className="w-full rounded-lg "
                          value={
                            formatLocalTime(data?.tgl_check_out) ||
                            'Tidak Diketahui'
                          }
                        />
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-500 my-5">
                        <thead className="text-xs text-white uppercase bg-primary">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              No Kamar
                            </th>

                            <th scope="col" className="px-6 py-3">
                              Nama Tipe Kamar
                            </th>

                            <th scope="col" className="px-6 py-3">
                              Tgl Check In
                            </th>

                            <th scope="col" className="px-6 py-3">
                              Tgl Check Out
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {!dataRoom?.length ? (
                            <tr>
                              <td className="animate-pulse transition-all ease-in-out duration-300 bg-gray-100 px-5 py-5 border-b border-gray-200 text-sm">
                                <div className="flex items-center select-none">
                                  <div className="bg-gray-200 text-gray-200 whitespace-no-wrap">
                                    this text will not displayed
                                  </div>
                                </div>
                              </td>

                              <td className="animate-pulse transition-all ease-in-out duration-300 bg-gray-100 px-5 py-5 border-b border-gray-200 text-sm">
                                <div className="flex items-center select-none">
                                  <div className="bg-gray-200 text-gray-200 whitespace-no-wrap">
                                    this text will not displayed
                                  </div>
                                </div>
                              </td>

                              <td className="animate-pulse transition-all ease-in-out duration-300 bg-gray-100 px-5 py-5 border-b border-gray-200 text-sm">
                                <div className="flex items-center select-none">
                                  <div className="bg-gray-200 text-gray-200 whitespace-no-wrap">
                                    this text will not displayed
                                  </div>
                                </div>
                              </td>

                              <td className="animate-pulse transition-all ease-in-out duration-300 bg-gray-100 px-5 py-5 border-b border-gray-200 text-sm">
                                <div className="flex items-center select-none">
                                  <div className="bg-gray-200 text-gray-200 whitespace-no-wrap">
                                    this text will not displayed
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            dataRoom?.map((a: any, i: any) => (
                              <tr key={i} className="bg-gray-500">
                                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                                  <div className="flex items-center">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      {a.kamar?.nomor_kamar}
                                    </p>
                                  </div>
                                </td>

                                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                                  <div className="flex items-center">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      {data?.tipe_kamar?.nama_tipe_kamar}
                                    </p>
                                  </div>
                                </td>

                                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                                  <div className="flex items-center">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      {formatLocalTime(data?.tgl_check_in)}
                                    </p>
                                  </div>
                                </td>

                                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                                  <div className="flex items-center">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      {formatLocalTime(data?.tgl_check_out)}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="w-full mt-3 gap-5 pb-5">
                        <h1 className="text-xl font-bold text-primary border-b-2 border-solid border-gray-300 pb-3">
                          Ubah Data Pemesanan
                        </h1>
                      </div>

                      <div className="w-full flex justify-between gap-5 pb-5">
                        <div className="w-full">
                          <h2 className="mb-2 text-lg font-medium text-gray-500">
                            Status Pemesanan
                          </h2>

                          <select
                            name="status_pemesanan"
                            id="status_pemesanan"
                            value={dataUpdate?.status_pemesanan}
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                            required
                            onChange={(e) =>
                              bindingState(e, setDataUpdate, 'status_pemesanan')
                            }
                          >
                            <option value="default" selected disabled>
                              Pilih Status
                            </option>
                            <option value="check_in">Check-in</option>
                            <option value="check_out">Check-out</option>
                          </select>
                        </div>

                        <div className="w-full">
                          <h2 className="mb-2 text-lg font-medium text-gray-500">
                            Petugas Pemesanan
                          </h2>

                          <select
                            name="id_user"
                            id="id_user"
                            value={dataUpdate.id_user}
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                            required
                            onChange={(e) =>
                              bindingState(e, setDataUpdate, 'id_user')
                            }
                          >
                            <option value="default" selected disabled>
                              Pilih Petugas
                            </option>
                            {dataUser?.map((a: any, i: any) => (
                              <option value={a.id_user} key={i}>
                                {`ID-${a.id_user} => ${a.nama_user}`}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-end justify-end gap-5 pb-5">
                        <button
                          type="submit"
                          className="bg-primary hover:bg-primarydark rounded-lg text-white font-segoe font-normal text-base leading-6 px-3 py-2 transition duration-300 ease-in-out"
                        >
                          Simpan
                        </button>
                      </div>
                    </form>
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

export default ContainerEditBooking;
