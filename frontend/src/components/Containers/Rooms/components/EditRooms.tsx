import { FC, useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import Head from 'next/head';

import axios from '@/lib/axios';
import { bindingState } from '@/lib/bindingState';
import { headerConfig } from '@/lib/headerConfig';
import { formatCurrency } from '@/lib/formatCurrency';
import { errorToast, successToast } from '@/lib/toast';
import SidebarAdmin from '@/components/Common/SidebarAdmin';

const ContainerEditRooms: FC = () => {
  const [dataTypeRoom, setDataTypeRoom] = useState<any>([]);
  const [oldData, setOldData] = useState<any>({});
  const [token, setToken] = useState<string | any>('');
  const [data, setData] = useState({
    nomor_kamar: '',
    id_tipe_kamar: 'default',
  });

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access');
      setToken(token);
    }

    const fetchData = async () => {
      await axios
        .get('/room-type', headerConfig())
        .then((res) => setDataTypeRoom(res.data.data))
        .catch((err) => errorToast(err));
    };

    Promise.all([fetchData()]);

    if (id) {
      axios
        .get(`/room/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setOldData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      errorToast('Data tidak ditemukan!');
      setTimeout(() => {
        router.push('/admin/user');
      }, 1500);
    }

    return () => {
      setDataTypeRoom([]);
    };
  }, [id, router, token]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendData = { id_kamar: oldData.id_kamar, ...data };

    axios
      .put('/room', sendData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.success === 1) {
          successToast('Berhasil mengubah data!');
          setTimeout(() => {
            router.push('/admin/rooms');
          }, 1500);
        } else {
          errorToast('Gagal mengubah data! Silahkan coba lagi');
        }
      })
      .catch((err) => {
        errorToast('Gagal mengubah data! Silahkan coba lagi');
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Ubah Data Kamar - Wikusama Hotel</title>
      </Head>

      <ToastContainer autoClose={1500} />

      <SidebarAdmin />

      <main className="bg-white md:ml-64 min-h-screen">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full p-10">
              <h2 className="text-2xl font-bold text-primary mb-5">
                Ubah Data Kamar
              </h2>

              <section className="bg-white p-5 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5 flex flex-wrap items-center justify-between">
                    <label
                      htmlFor="nomor_kamar"
                      className="block text-sm font-medium text-gray-500"
                    >
                      No Kamar
                    </label>

                    <div className="max-w-2xl w-full mt-3 lg:mt-0">
                      <input
                        type="text"
                        value={oldData.nomor_kamar}
                        className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm mb-2"
                        disabled
                      />

                      <input
                        type="text"
                        name="nomor_kamar"
                        id="nomor_kamar"
                        value={data.nomor_kamar}
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
                        placeholder="No Kamar"
                        required
                        onChange={(e) =>
                          bindingState(e, setData, 'nomor_kamar')
                        }
                      />
                    </div>
                  </div>

                  <div className="mb-5 flex flex-wrap items-center justify-between">
                    <label
                      htmlFor="id_tipe_kamar"
                      className="block text-sm font-medium text-gray-500"
                    >
                      Tipe Kamar
                    </label>

                    <div className="max-w-2xl w-full mt-3 lg:mt-0">
                      <input
                        type="text"
                        value={oldData.id_tipe_kamar}
                        className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm mb-2"
                        disabled
                      />

                      <select
                        name="id_tipe_kamar"
                        id="id_tipe_kamar"
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                        required
                        onChange={(e) =>
                          bindingState(e, setData, 'id_tipe_kamar')
                        }
                      >
                        <option value="default" selected disabled>
                          Pilih Tipe Kamar
                        </option>
                        {dataTypeRoom.map((a: any, i: any) => (
                          <option value={a.id_tipe_kamar} key={i}>
                            ID {a.id_tipe_kamar}: {a.nama_tipe_kamar}
                            {' => '}
                            {formatCurrency(a.harga)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-end justify-end">
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primarydark rounded-lg text-white font-segoe font-normal text-base leading-6 px-3 py-2 transition duration-300 ease-in-out"
                    >
                      Ubah Data
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContainerEditRooms;
