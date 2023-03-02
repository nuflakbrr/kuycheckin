import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { successToast } from '@/lib/toast';

type Props = {
  paymentMethodName: any;
};

const DetailTransactionSection: FC<Props> = ({ paymentMethodName }) => {
  const [data, setData] = useState<string | any>({
    tgl_check_in: '',
    tgl_check_out: '',
    tipe_kamar: '',
    jumlah_kamar: '',
    total_hari: '',
    total_harga: '',
  });

  useEffect(() => {
    const checkIn = JSON.parse(localStorage.getItem('tgl_check_in') || '{}');
    const checkOut = JSON.parse(localStorage.getItem('tgl_check_out') || '{}');
    const typeRoom = JSON.parse(localStorage.getItem('tipe_kamar') || '{}');
    const totalRoom = JSON.parse(localStorage.getItem('jumlah_kamar') || '{}');
    const totalDays = JSON.parse(localStorage.getItem('total_hari') || '{}');
    const totalPrice = JSON.parse(localStorage.getItem('total_harga') || '{}');

    setData({
      tgl_check_in: checkIn,
      tgl_check_out: checkOut,
      tipe_kamar: typeRoom,
      jumlah_kamar: totalRoom,
      total_hari: totalDays,
      total_harga: totalPrice,
    });
  }, []);

  const router = useRouter();

  const handleButton = () => {
    localStorage.removeItem('tgl_check_in');
    localStorage.removeItem('tgl_check_out');
    localStorage.removeItem('tipe_kamar');
    localStorage.removeItem('jumlah_kamar');
    localStorage.removeItem('total_hari');
    localStorage.removeItem('total_harga');

    setData({
      tgl_check_in: '',
      tgl_check_out: '',
      tipe_kamar: '',
      jumlah_kamar: '',
      total_hari: '',
      total_harga: '',
    });

    successToast('Pembayaran berhasil!');

    setTimeout(() => {
      router.push('/customer/dashboard');
    }, 1800);
  };

  return (
    <section className="col-span-8 lg:col-span-3">
      <div className="w-full px-4">
        <div className="border border-primary bg-primary text-white p-5 rounded-t-lg">
          <h1>Detail Pemesanan</h1>
        </div>

        <div className="border">
          <div className="flex flex-wrap items-center justify-between px-5 pt-5">
            <h3>Tanggal Check-in</h3>

            <p>{data.tgl_check_in}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between px-5 pt-3">
            <h3>Tanggal Check-out</h3>

            <p>{data.tgl_check_out}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between px-5 pt-3">
            <h3>Tipe Kamar</h3>

            <p>{data.tipe_kamar}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between px-5 pt-3">
            <h3>Jumlah Kamar</h3>

            <p>{data.jumlah_kamar}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between px-5 py-3">
            <h3>Total Hari</h3>

            <p>{data.total_hari}</p>
          </div>

          <hr className="my-2" />

          <div className="flex flex-wrap items-center justify-between px-5 pt-3">
            <h3>Total Harga</h3>

            <p>{data.total_harga}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between px-5 pt-3 pb-5">
            <h3>Bayar Menggunakan</h3>

            <p>{paymentMethodName}</p>
          </div>
        </div>

        <div className="my-4">
          <button
            type="button"
            onClick={handleButton}
            className="bg-primary hover:bg-primarydark text-white w-full py-2 rounded-lg text-base font-medium"
          >
            Bayar
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailTransactionSection;
