import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer';
import axios from '../../../lib/axios';
import { bindingState } from '../../../lib/bindingState';

const ContainerRegister: FC = () => {
  const [data, setData] = useState({
    nama: '',
    foto: '',
    email: '',
    password: '',
  });
  const [image, setImage] = useState('/assets/img/template-img.png');
  const [notifiedSuccess, setNotifiedSuccess] = useState<number>(0);

  const handleImage = (e: any) => {
    // eslint-disable-next-line prefer-const
    let foto = e.target.files[0];
    setImage(URL.createObjectURL(foto));
    setData({ ...data, foto });
  };

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendData = { ...data };

    try {
      const res = await axios.post('/customer', sendData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.success === 1) {
        setNotifiedSuccess(1);
        setTimeout(() => {
          router.push('/auth/login');
        }, 1800);
      } else {
        setNotifiedSuccess(2);
      }
    } catch (err) {
      setNotifiedSuccess(2);
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Daftar Guest - Wikusama Hotel</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Selamat datang di Wikusama Hotel! Silahkan Masukkan Data Anda!"
        />
        <meta
          property="og:url"
          content="https://wikusamahotel.com/portal/login"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Wikusama Hotel" />
        <meta
          property="og:description"
          content="Selamat datang di Wikusama Hotel! Silahkan Masukkan Data Anda!"
        />
        <meta property="og:title" content="Masuk - Wikusama Hotel" />
        <meta
          property="og:image"
          content="http://wikusamahotel.com/assets/svg/undraw_login.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Masuk - Wikusama Hotel" />
        <meta
          name="twitter:description"
          content="Selamat datang di Wikusama Hotel! Silahkan Masukkan Data Anda!"
        />
        <meta
          name="twitter:image"
          content="http://wikusamahotel.com/assets/svg/undraw_login.svg"
        />
        <link rel="canonical" href="https://wikusamahotel.com/portal/login" />
      </Head>

      <Navbar />

      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-xl mx-auto">
            <div className="container">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full px-4 mx-5">
                  <div className="flex items-center justify-center mb-5">
                    <h1 className="font-primary font-semibold text-2xl lg:text-3xl text-center">
                      Selamat Datang!
                    </h1>
                  </div>

                  <form
                    className="bg-white rounded-lg shadow-lg p-8"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                  >
                    {notifiedSuccess === 1 && (
                      <div className="mb-4 bg-green-500 p-3 rounded">
                        <p className="text-white text-sm font-bold">
                          Daftar Sukses, Selamat datang!
                        </p>
                      </div>
                    )}

                    {notifiedSuccess === 2 && (
                      <div className="mb-4 bg-red-500 p-3 rounded">
                        <p className="text-white text-sm font-bold">
                          Daftar Gagal, silakan coba kembali!
                        </p>
                      </div>
                    )}

                    <div className="mb-3">
                      <img
                        src={image}
                        alt="Image User Update"
                        className="mx-auto w-[200px] h-[200px] object-cover object-center mt-2"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="nama"
                        className="block text-slate-600 mb-2"
                      >
                        Nama
                      </label>
                      <input
                        type="text"
                        name="nama"
                        id="nama"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary/70"
                        placeholder="Masukkan nama"
                        autoFocus={true}
                        required
                        value={data.nama}
                        onChange={(e) => bindingState(e, setData, 'nama')}
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="image"
                        className="block text-slate-600 mb-2"
                      >
                        Foto
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        name="image"
                        id="image"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary/70"
                        placeholder="Masukkan email"
                        required
                        onChange={handleImage}
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="block text-slate-600 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary/70"
                        placeholder="Masukkan email"
                        required
                        value={data.email}
                        onChange={(e) => bindingState(e, setData, 'email')}
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className="block text-slate-600 mb-2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary/70"
                        placeholder="Masukkan password"
                        required
                        value={data.password}
                        onChange={(e) => bindingState(e, setData, 'password')}
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primarydark text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out mt-3"
                      >
                        Daftar
                      </button>
                    </div>
                  </form>

                  <div className="flex items-center justify-center mt-5">
                    <p className="text-slate-600">
                      Sudah punya akun?{' '}
                      <Link href="/auth/login" legacyBehavior>
                        <a className="text-primary font-bold">Masuk</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContainerRegister;
