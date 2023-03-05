import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

import axios from '@/lib/axios';
import { headerConfig } from '@/lib/headerConfig';
import SidebarAdmin from '@/components/Common/SidebarAdmin';
import SidebarReceptionist from '@/components/Common/SidebarReceptionist';
import SidebarCustomer from '@/components/Common/SidebarCustomer';
import { errorToast } from '@/lib/toast';
import Link from 'next/link';
import { formatLocalTime } from '@/lib/formatLocalTime';

const ContainerDetailBooking: FC = () => {
  const [user, setUser] = useState<any>('');
  const [data, setData] = useState<any>([]);
  const [dataRoom, setDataRoom] = useState<any>([]);

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

      Promise.all([getData(), getDataById()]);
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Detail Pemesanan - Wikusama Hotel</title>
      </Head>

      <ToastContainer autoClose={1500} />

      {user.role === 'admin' && <SidebarAdmin />}

      {user.role === 'resepsionis' && <SidebarReceptionist />}

      {user.role === 'pelanggan' && <SidebarCustomer />}

      <main className="bg-white md:ml-64 min-h-screen">
        <section className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-10 pt-10">
              <h2 className="text-2xl font-bold text-primary capitalize">
                Detail Pemesanan
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
                          value={data.nomor_pemesanan || 'Tidak Diketahui'}
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
                            data.tipe_kamar?.nama_tipe_kamar ||
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
                          value={data.pelanggan?.nama || 'Tidak Diketahui'}
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
                          value={data.pelanggan?.email || 'Tidak Diketahui'}
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
                            formatLocalTime(data.tgl_pemesanan) ||
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
                            formatLocalTime(data.tgl_check_in) ||
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
                            formatLocalTime(data.tgl_check_out) ||
                            'Tidak Diketahui'
                          }
                        />
                      </div>
                    </div>

                    <div className="mt-4 w-full flex justify-between items-center">
                      <h1 className="text-xl font-medium">Cetak Invoice</h1>

                      {user.role === 'admin' || user.role === 'resepsionis' ? (
                        <Link
                          href={
                            user.role === 'admin'
                              ? `/admin/booking/detail/${id}/invoice`
                              : `/receptionist/booking/detail/${id}/invoice`
                          }
                          legacyBehavior
                        >
                          <a className="bg-primary text-white font-medium px-3 py-2 rounded-lg">
                            Cetak Invoice
                          </a>
                        </Link>
                      ) : (
                        <Link
                          href={`/customer/booking/detail/${id}/invoice`}
                          legacyBehavior
                        >
                          <a className="bg-primary text-white font-medium px-3 py-2 rounded-lg">
                            Cetak Invoice
                          </a>
                        </Link>
                      )}
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
                          {!dataRoom.length ? (
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
                            dataRoom.map((a: any, i: any) => (
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
                                      {data.tipe_kamar?.nama_tipe_kamar}
                                    </p>
                                  </div>
                                </td>

                                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                                  <div className="flex items-center">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      {formatLocalTime(data.tgl_check_in)}
                                    </p>
                                  </div>
                                </td>

                                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                                  <div className="flex items-center">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      {formatLocalTime(data.tgl_check_out)}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
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

export default ContainerDetailBooking;
