import { FC, useState, useEffect } from 'react';

import axios from '../../../../lib/axios';
import { bindingState } from '../../../../lib/bindingState';
import { formatCurrency } from '../../../../lib/formatCurrency';
import { headerConfig } from '../../../../lib/headerConfig';
import { errorToast, successToast } from '../../../../lib/toast';

const AddRoomsSection: FC = () => {
  const [dataTypeRoom, setDataTypeRoom] = useState<any>([]);
  const [token, setToken] = useState<string | any>('');
  const [data, setData] = useState({
    nomor_kamar: '',
    id_tipe_kamar: 'default',
  });

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

    return () => {
      setDataTypeRoom([]);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendData = { ...data };

    axios
      .post('/room', sendData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        res.data.success === 1
          ? successToast('Selamat! Anda berhasil menambahkan kamar baru')
          : errorToast('Gagal menambahkan kamar baru! Silahkan coba lagi');
      })
      .catch((err) => {
        errorToast('Gagal menambahkan kamar baru! Silahkan coba lagi');
        console.log(err);
      });
  };

  return (
    <section>
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
              name="nomor_kamar"
              id="nomor_kamar"
              value={data.nomor_kamar}
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-primary/50 sm:text-sm"
              placeholder="No Kamar"
              required
              onChange={(e) => bindingState(e, setData, 'nomor_kamar')}
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
            <select
              name="id_tipe_kamar"
              id="id_tipe_kamar"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
              required
              onChange={(e) => bindingState(e, setData, 'id_tipe_kamar')}
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
            Tambah Data
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddRoomsSection;
