import { FC, useState, useEffect } from 'react';

import axios from '@/lib/axios';
import { headerConfig } from '@/lib/headerConfig';
import { errorToast } from '@/lib/toast';
import BookingItem from './BookingItem';

type Props = {
  user: any;
  dataBooking: any;
};

const BookingSection: FC<Props> = ({ user, dataBooking }) => {
  const [dataBookByUser, setDataBookByUser] = useState<any>([]);

  useEffect(() => {
    if (user.id_pelanggan > 0) {
      const getBookingByUser = async () => {
        await axios
          .get(`/booking/customer/${user.id_pelanggan}`, headerConfig())
          .then((res) => setDataBookByUser(res.data.data))
          .catch((err) => errorToast(err));
      };

      Promise.all([getBookingByUser()]);
    }
  }, [user.id_pelanggan]);

  return (
    <section>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full rounded-lg overflow-hidden">
          {!dataBooking.length ? (
            <p className="text-black dark:text-white text-center mx-auto">
              Memuat Data📦...
            </p>
          ) : user.role === 'admin' || user.role === 'resepsionis' ? (
            dataBooking.map((a: any, i: any) => (
              <BookingItem
                id_pemesanan={a.id_pemesanan}
                nomor_pemesanan={a.nomor_pemesanan}
                nama_tamu={a.nama_tamu}
                nama_tipe_kamar={a.tipe_kamar.nama_tipe_kamar}
                tgl_check_in={a.tgl_check_in}
                tgl_check_out={a.tgl_check_out}
                tgl_pemesanan={a.tgl_pemesanan}
                jumlah_kamar={a.jumlah_kamar}
                status_pemesanan={a.status_pemesanan}
                key={i}
              />
            ))
          ) : (
            dataBookByUser.map((a: any, i: any) => (
              <BookingItem
                id_pemesanan={a.id_pemesanan}
                nomor_pemesanan={a.nomor_pemesanan}
                nama_tamu={a.nama_tamu}
                nama_tipe_kamar={a.tipe_kamar.nama_tipe_kamar}
                tgl_check_in={a.tgl_check_in}
                tgl_check_out={a.tgl_check_out}
                tgl_pemesanan={a.tgl_pemesanan}
                jumlah_kamar={a.jumlah_kamar}
                status_pemesanan={a.status_pemesanan}
                key={i}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
