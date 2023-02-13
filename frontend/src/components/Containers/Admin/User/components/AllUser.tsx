import { FC, useState, useEffect } from 'react';
import { FaUser, FaEdit, FaTrash, FaLock } from 'react-icons/fa';
import Link from 'next/link';

import axios from '../../../../../lib/axios';
import { headerConfig } from '../../../../../lib/headerConfig';
import { errorToast, infoToast, successToast } from '../../../../../lib/toast';
import { classNames } from '../../../../../lib/classNames';

const AllUserSection: FC = () => {
  const [dataLogin, setDataLogin] = useState<any>({});
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (localStorage.getItem('admin')) {
      setDataLogin(JSON.parse(localStorage.getItem('admin') || '{}'));
      // setIsLogin(true);
    }

    if (localStorage.getItem('receptionist')) {
      setDataLogin(JSON.parse(localStorage.getItem('receptionist') || '{}'));
      // setIsLogin(true);
    }

    const getData = async () => {
      await axios
        .get('/user', headerConfig())
        .then((res) => {
          infoToast('Memuat data 📦...');
          setData(res.data.data);
        })
        .catch((err) => {
          errorToast('Terjadi kesalahan saat memuat data!');
          console.log(err);
        });
    };

    Promise.all([getData()]);
  }, []);

  const badgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return (
          <p className="bg-red-500 px-2 py-0.5 rounded-xl text-white whitespace-no-wrap">
            Admin
          </p>
        );
      default:
        return (
          <p className="bg-yellow-500 px-2 py-0.5 rounded-xl text-white whitespace-no-wrap">
            Resepsionis
          </p>
        );
    }
  };

  const handleDelete = async (id: any) => {
    alert('Apakah anda yakin ingin menghapus data ini?');

    await axios
      .delete(`/user/${id}`, headerConfig())
      .then((res) => {
        res.data.success === 1
          ? successToast('Data berhasil dihapus!')
          : errorToast('Terjadi kesalahan saat menghapus data!');
      })
      .catch((err) => {
        errorToast('Terjadi kesalahan saat menghapus data!');
        console.log(err);
      });
  };

  return (
    <section className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
      <table className="min-w-full leading-normal">
        <thead className="border-gray-200 bg-primary">
          <tr>
            <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              No
            </th>

            <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Nama User
            </th>

            <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Email
            </th>

            <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Password
            </th>

            <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Jabatan
            </th>

            <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Aksi
            </th>
          </tr>
        </thead>

        <tbody>
          {!data.length ? (
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
            data.map((a: any, i: any) => (
              <tr key={i}>
                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                  <div className="flex items-center">
                    <p className="text-gray-900 whitespace-no-wrap">{i + 1}</p>
                  </div>
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                  <div className="flex items-center">
                    <img
                      src={a.foto || '/assets/img/no-image.png'}
                      alt="User Image"
                      loading="lazy"
                      className={classNames(
                        a.foto ? 'w-10' : 'w-10 h-10',
                        'mr-2 rounded-full object-cover object-center'
                      )}
                    />

                    <p className="text-gray-900 whitespace-no-wrap">
                      {a.nama_user}
                    </p>
                  </div>
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                  <div className="flex items-center">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {a.email}
                    </p>
                  </div>
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                  <div className="flex items-center">
                    <p className="text-gray-900 whitespace-no-wrap">********</p>
                  </div>
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                  <div className="flex items-center">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {badgeColor(a.role)}
                    </p>
                  </div>
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
                  {dataLogin.email === a.email ? (
                    <Link
                      href="/admin/profile"
                      className="w-lg flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide"
                    >
                      <FaUser className="mr-2" /> Profil Saya
                    </Link>
                  ) : dataLogin.role !== 'admin' ? (
                    <div className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide mt-2 cursor-not-allowed">
                      <FaLock className="mr-2" /> Perlu Akses
                    </div>
                  ) : (
                    <>
                      <Link
                        href={`/admin/user/edit/${a.id_user}`}
                        className="w-lg flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide"
                      >
                        <FaEdit className="mr-2" /> Ubah
                      </Link>

                      <button
                        type="button"
                        className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer mt-2"
                        onClick={() => handleDelete(a.id_user)}
                      >
                        <FaTrash className="mr-2" /> Hapus
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default AllUserSection;
