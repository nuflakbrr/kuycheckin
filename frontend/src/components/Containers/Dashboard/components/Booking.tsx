import { FC } from 'react';

import BookingItem from './BookingItem';

type Props = {
  dataBooking: any;
};

const BookingSection: FC<Props> = ({ dataBooking }) => {
  return (
    <section>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full rounded-lg overflow-hidden">
          {!dataBooking.length ? (
            <p className="text-black dark:text-white text-center mx-auto">
              Memuat Data📦...
            </p>
          ) : (
            dataBooking.map((item: any) => (
              <BookingItem
                memberName={item.member.nama_member}
                outletName={item.outlet.nama_outlet}
                dateTransaction={item.tgl_transaksi}
                statusTransaction={item.status_pengerjaan}
                statusPayment={item.status_pembayaran}
                id={item.id_transaksi}
                key={item.id_transaksi}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
