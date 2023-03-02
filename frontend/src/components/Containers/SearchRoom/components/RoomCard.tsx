import { FC } from 'react';
import Link from 'next/link';

import { formatCurrency } from '@/lib/formatCurrency';

type Props = {
  dataRoom: string | any;
};

const RoomCardSection: FC<Props> = ({ dataRoom }) => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="w-full px-4">
            <div className="grid grid-cols-12 gap-5">
              {dataRoom.map((a: any, i: any) => (
                <div className="col-span-12 lg:col-span-3" key={i}>
                  <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-all ease-in-out duration-300">
                    <Link
                      href={`/search-room/details/${a.slug}`}
                      legacyBehavior
                    >
                      <a>
                        <img
                          className="w-full h-[200px] object-cover object-center"
                          src={a.foto || '/assets/img/template-img-room.png'}
                          loading="lazy"
                          alt={a.nama_tipe_kamar}
                        />
                      </a>
                    </Link>

                    <div className="px-6 py-4">
                      <Link
                        href={`/search-room/details/${a.slug}`}
                        legacyBehavior
                      >
                        <a className="font-bold text-xl text-primary">
                          {a.nama_tipe_kamar}
                        </a>
                      </Link>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: a.deskripsi.substring(0, 25) + '...',
                        }}
                        className="font-normal text-base text-gray-500 whitespace-no-wrap mt-2"
                      />
                    </div>

                    <div className="flex items-center justify-between px-6 pb-4">
                      <p className="font-semibold text-lg text-gray-500">
                        {formatCurrency(a.harga)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomCardSection;
