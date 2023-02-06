import { FC } from 'react';

const Form: FC = () => {
  return (
    <section className="py-10 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-10 lg:mb-0 w-full px-4 lg:w-2/3">
              <h1 className="font-primary font-semibold text-2xl lg:text-3xl mb-2">
                Kritik dan Saran
              </h1>

              <form className="my-5">
                <div className="flex flex-wrap mb-2">
                  <div className="w-full lg:pr-4 lg:w-1/2">
                    <label
                      htmlFor="fullName"
                      className="text-gray-500 xl:text-lg leading-relaxed"
                    >
                      Nama Lengkap
                    </label>

                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Masukkan Nama Lengkap"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primary/70 my-2"
                      required
                    />
                  </div>

                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="text-gray-500 xl:text-lg leading-relaxed"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Masukkan Email"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primary/70 my-2"
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="tel"
                    className="text-gray-500 xl:text-lg leading-relaxed"
                  >
                    No. Telepon
                  </label>

                  <input
                    type="text"
                    id="tel"
                    name="tel"
                    placeholder="Masukkan No. Telepon"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primary/70 my-2"
                    required
                  />
                </div>

                <div className="mb-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="message"
                      className="text-gray-500 xl:text-lg leading-relaxed"
                    >
                      Kritik dan Saran
                    </label>

                    <textarea
                      name="message"
                      id="message"
                      cols={8}
                      rows={8}
                      placeholder="Masukkan Kritik dan Saran"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primary/70 my-2"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primarydark active:bg-primary focus-visible:ring ring-primary text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-5 py-3"
                  >
                    Kirim
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full px-4 lg:w-1/3">
              <h1 className="font-primary font-semibold text-2xl lg:text-3xl mb-5">
                Jam Operasional Hotel
              </h1>

              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between mb-2">
                  <p className="text-gray-500 xl:text-lg leading-relaxed">
                    Senin - Jumat
                  </p>

                  <p className="text-gray-500 xl:text-lg leading-relaxed">
                    06:00 - 23:00 WIB
                  </p>
                </div>

                <div className="border mb-2" />

                <div className="flex flex-row items-center justify-between mb-5">
                  <p className="text-gray-500 xl:text-lg leading-relaxed">
                    Sabtu - Minggu
                  </p>

                  <p className="text-gray-500 xl:text-lg leading-relaxed">
                    07:00 - 00:00 WIB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
