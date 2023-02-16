import { FC } from 'react';

type Props = {
  data: any;
};

const SideMainContent: FC<Props> = ({ data }) => {
  return (
    <div className="col-span-10 lg:col-span-3">
      <div className="bg-gray-100 rounded-lg px-4 py-3">
        <h1 className="text-lg font-semibold border-b text-gray-500 border-gray-500 pb-2">
          Pesan Kamar
        </h1>

        <div className="border-b text-gray-500 border-gray-500 py-2">
          <div className="w-full flex justify-between gap-5">
            <div className="w-full">
              <h2 className="text-sm font-medium text-gray-500 pb-2">
                Tgl Check In
              </h2>

              <input
                type="date"
                name=""
                id=""
                className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm mb-2"
              />
            </div>

            <div className="w-full">
              <h2 className="text-sm font-medium text-gray-500 pb-2">
                Tgl Check Out
              </h2>

              <input
                type="date"
                name=""
                id=""
                className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm mb-2"
              />
            </div>
          </div>

          <div className="py-2">
            <h2 className="text-sm font-medium text-gray-500 pb-2">
              Nama Pemesan
            </h2>

            <input
              type="text"
              name=""
              id=""
              className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm mb-2"
              placeholder="Masukkan Nama Pemesan"
            />
          </div>

          <div className="py-2">
            <h2 className="text-sm font-medium text-gray-500 pb-2">
              Email Pemesan
            </h2>

            <input
              type="email"
              name=""
              id=""
              className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm mb-2"
              placeholder="Masukkan Email Pemesan"
            />
          </div>

          <div className="py-2">
            <h2 className="text-sm font-medium text-gray-500 pb-2">
              Jumlah Kamar
            </h2>

            <input
              type="number"
              name=""
              id=""
              className="block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm mb-2"
              placeholder="Masukkan Jumlah Kamar"
            />
          </div>
        </div>

        <h1 className="text-lg font-semibold text-gray-500 py-2">
          Rincian Pesanan
        </h1>

        <div className="bg-gray-200 text-gray-500 rounded-lg py-2">
          <div className="w-full flex items-center justify-between px-3 pb-1">
            <h2 className="text-sm font-medium">Tipe Kamar</h2>

            <p className="text-sm font-semibold text-black">
              {data.nama_tipe_kamar}
            </p>
          </div>

          <div className="w-full flex items-center justify-between px-3 pb-1">
            <h2 className="text-sm font-medium">Jumlah Kamar</h2>

            <p className="text-sm font-semibold text-black">
              {data.nama_tipe_kamar}
            </p>
          </div>

          <div className="w-full flex items-center justify-between px-3 pb-1">
            <h2 className="text-sm font-medium">Total Hari</h2>

            <p className="text-sm font-semibold text-black">
              {data.nama_tipe_kamar}
            </p>
          </div>

          <div className="w-full flex items-center justify-between px-3 pb-1">
            <h2 className="text-sm font-medium">Total Harga</h2>

            <p className="text-sm font-semibold text-black">
              {data.nama_tipe_kamar}
            </p>
          </div>
        </div>

        {/* change type button */}
        <button
          type="button"
          className="bg-primary hover:bg-primarydark text-white w-full my-2 py-2 rounded-lg text-base font-medium"
        >
          Bayar
        </button>
      </div>
    </div>
  );
};

export default SideMainContent;
