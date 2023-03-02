import { FC, useState } from 'react';

import axios from '@/lib/axios';
import { bindingState } from '@/lib/bindingState';
import { errorToast, successToast } from '@/lib/toast';

const AddUserSection: FC = () => {
  const [data, setData] = useState({
    nama_user: '',
    email: '',
    password: '',
    role: 'default',
    foto: '',
  });
  const [image, setImage] = useState('/assets/img/template-img.png');

  const handleImage = (e: any) => {
    // eslint-disable-next-line prefer-const
    let foto = e.target.files[0];
    setImage(URL.createObjectURL(foto));
    setData({ ...data, foto });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendData = { ...data };

    axios
      .post('/user', sendData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        res.data.success === 1
          ? successToast('Selamat! Anda berhasil menambahkan user baru')
          : errorToast('Gagal menambahkan user baru! Silahkan coba lagi');
      })
      .catch((err) => {
        errorToast('Gagal menambahkan user baru! Silahkan coba lagi');
        console.log(err);
      });
  };

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
            Email
          </label>

          <div className="max-w-2xl w-full mt-3 lg:mt-0">
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
              placeholder="Email"
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
            Password
          </label>

          <div className="max-w-2xl w-full mt-3 lg:mt-0">
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm mb-2"
              placeholder="Password"
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
            Jabatan
          </label>

          <div className="max-w-2xl w-full mt-3 lg:mt-0">
            <select
              name="role"
              id="role"
              value={data.role}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
              required
              onChange={(e) => bindingState(e, setData, 'role')}
            >
              <option value="default" selected disabled>
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
            Tambah Data
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddUserSection;
