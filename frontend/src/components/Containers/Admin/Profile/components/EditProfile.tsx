import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import axios from '../../../../../lib/axios';
import { bindingState } from '../../../../../lib/bindingState';
import { errorToast, successToast } from '../../../../../lib/toast';
import { headerConfig } from '../../../../../lib/headerConfig';
import { logout } from '../../../../../lib/logout';

const EditProfile: FC = () => {
  const [oldData, setOldData] = useState<any>({});
  const [data, setData] = useState({
    nama_user: '',
    email: '',
    password: '',
    role: '',
    foto: '',
  });
  const [image, setImage] = useState('https://fakeimg.pl/200x200');

  const router = useRouter();

  const handleImage = (e: any) => {
    // eslint-disable-next-line prefer-const
    let foto = e.target.files[0];
    setImage(URL.createObjectURL(foto));
    setData({ ...data, foto });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendData = {
      id_user: oldData.id_user,
      nama_user: data.nama_user,
      email: data.email,
      password: data.password,
      role: data.role,
      foto: data.foto,
    };

    axios
      .put('/user', sendData, headerConfig())
      .then((res) => {
        console.log(res);

        if (res.data.success === 1) {
          successToast('Berhasil mengubah data profil! Silahkan login kembali');
          logout('admin' || 'receptionist', router);
        }
      })
      .catch((err) => {
        errorToast('Gagal mengubah data profil! Silahkan coba lagi');
        console.log(err);
      });
  };

  useEffect(() => {
    const user =
      JSON.parse(localStorage.getItem('admin') || '{}') ||
      JSON.parse(localStorage.getItem('receptionist') || '{}');

    setOldData(user);
  }, []);

  return (
    <section>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-5 flex flex-wrap items-center justify-between">
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-500"
            >
              Foto User
            </label>

            <img
              src={image}
              alt="Image User Update"
              className="w-[200px] h-[200px] object-cover object-center mt-2"
            />
          </div>

          <div className="max-w-2xl w-full mt-3 lg:mt-0">
            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
              required
              onChange={handleImage}
            />
          </div>
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-500"
          >
            Nama User
          </label>

          <div className="max-w-2xl w-full mt-3 lg:mt-0">
            <input
              type="text"
              value={oldData.nama_user}
              className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm mb-2"
              disabled
            />

            <input
              type="text"
              name="nama_user"
              id="nama_user"
              value={data.nama_user}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
              placeholder="Nama User"
              required
              onChange={(e) => bindingState(e, setData, 'nama_user')}
            />
          </div>
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-500"
          >
            Email User
          </label>

          <div className="max-w-2xl w-full mt-3 lg:mt-0">
            <input
              type="text"
              value={oldData.email}
              className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm mb-2"
              disabled
            />

            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
              placeholder="Email User"
              required
              onChange={(e) => bindingState(e, setData, 'email')}
            />
          </div>
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-500"
          >
            Password Baru
          </label>

          <div className="max-w-2xl w-full mt-3 lg:mt-0">
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
              placeholder="Password Baru"
              required
              onChange={(e) => bindingState(e, setData, 'password')}
            />
          </div>
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-500"
          >
            Jabatan User
          </label>

          <div className="max-w-2xl w-full mt-3 lg:mt-0">
            <input
              type="text"
              value={oldData.role}
              className="capitalize block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm mb-2"
              disabled
            />

            <select
              name="role"
              id="role"
              value={data.role}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
              required
              onChange={(e) => bindingState(e, setData, 'role')}
            >
              <option selected disabled>
                Pilih Jabatan
              </option>
              <option value="admin">Admin</option>
              <option value="resepsionis">Resepsionis</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-end">
          <button
            type="submit"
            className="bg-primary hover:bg-primarydark rounded-lg text-white font-segoe font-normal text-base leading-6 px-3 py-2 transition duration-300 ease-in-out"
          >
            Simpan
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProfile;
