import { FC } from 'react';
import Head from 'next/head';

const ContainerLogin: FC = () => {
  return (
    <>
      <Head>
        <title>Masuk - Wikusama Hotel</title>
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

      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-6xl mx-auto">
            <div className="container">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-10 lg:mb-0 w-full px-4 mx-5 lg:w-1/2">
                  <img
                    src="/assets/svg/undraw_login.svg"
                    loading="lazy"
                    alt="Hero Illustration"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="w-full px-4 mx-5 lg:w-1/2">
                  <div className="flex items-center justify-center mb-5">
                    <h1 className="font-primary font-semibold text-2xl lg:text-3xl text-center">
                      Selamat Datang!
                    </h1>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="block text-slate-600 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary/70"
                        placeholder="Masukkan email"
                        autoFocus={true}
                        required
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
                        id="password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary/70"
                        placeholder="Masukkan password"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="role"
                        className="block text-slate-600 mb-2"
                      >
                        Jabatan
                      </label>
                      <select
                        name="role"
                        id="role"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary/70"
                      >
                        <option selected disabled>
                          Pilih Jabatan
                        </option>
                        <option value="admin">Admin</option>
                        <option value="resepsionis">Resepsionis</option>
                      </select>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primarydark text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out mt-3"
                      >
                        Masuk
                      </button>
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

export default ContainerLogin;
