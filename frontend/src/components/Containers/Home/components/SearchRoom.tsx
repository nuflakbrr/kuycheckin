import Link from 'next/link';
import { FC } from 'react';
import { FaHotel, FaAngleRight, FaSearch } from 'react-icons/fa';

const SearchRoomSection: FC = () => {
  return (
    <section className="py-10 lg:pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="w-full px-4">
            <div className="bg-gray-100 rounded-lg">
              <div className="py-5 md:flex md:justify-between px-4">
                <div className="flex items-center">
                  <FaHotel className="text-primary text-2xl mr-2" />

                  <h2 className="text-xl font-semibold lg:text-2xl">
                    Temukan Kamar Disini
                  </h2>
                </div>

                <Link href="/search-room" legacyBehavior>
                  <a className="flex items-center text-gray-500 hover:text-primary">
                    <h2 className="text-md mb-1">Cari Lebih Lengkap</h2>

                    <FaAngleRight className="ml-2 text-md" />
                  </a>
                </Link>
              </div>

              <div className="w-full mb-5 gap-5 flex flex-col lg:flex-row items-center justify-between py-5 px-4">
                <div className="w-full">
                  <label
                    htmlFor="checkIn"
                    className="block text-lg font-medium text-gray-500 mb-2"
                  >
                    Tanggal Check In
                  </label>

                  <input
                    type="date"
                    name="checkIn"
                    id="checkIn"
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="checkOn"
                    className="block text-lg font-medium text-gray-500 mb-2"
                  >
                    Tanggal Check Out
                  </label>

                  <input
                    type="date"
                    name="checkIn"
                    id="checkIn"
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between py-5 px-4 border-t-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-orange-500">
                    <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  </div>

                  <p className="w-60 lg:w-full">
                    Hubungi Layanan Pelanggan Untuk Keperluan Bantuan
                  </p>
                </div>

                <div>
                  <button className="inline-flex items-center bg-primary hover:bg-primarydark active:bg-primary focus-visible:ring ring-primary text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-5 py-3">
                    <FaSearch className="mr-2 mt-1 text-sm" />
                    Cari Kamar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchRoomSection;
