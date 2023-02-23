import { FC } from 'react';
import Link from 'next/link';

const CallToAction: FC = () => {
  return (
    <section className="py-10 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="w-full px-4">
            <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 p-4 md:p-8">
              <div>
                <h2 className="text-primary text-xl md:text-2xl font-bold">
                  Tertarik untuk menginap?
                </h2>
                <p className="text-gray-600">
                  Pesan sekarang untuk mendapatkan fasilitas akomodasi yang
                  berkualitas dan terbaik di kelasnya!
                </p>
              </div>

              <Link href="/search-room" legacyBehavior>
                <a className="inline-block bg-primary hover:bg-primarydark active:bg-primary focus-visible:ring ring-primary text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-5 py-3">
                  Pesan Sekarang
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
