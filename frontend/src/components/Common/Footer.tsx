import { FC } from 'react';
import Link from 'next/link';

// const Logo = '/img/hadir-in.jpeg';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  const primaryLink = [
    { title: 'Hadirin Untuk Bisnis', url: '/' },
    { title: 'Menjadi Pengajar Hadirin', url: '/' },
    { title: 'Aplikasi Smartphone', url: '/' },
    { title: 'Tentang Kami', url: '/' },
  ];

  const secondaryLink = [
    { title: 'Berkarir di Hadirin', url: '/' },
    { title: 'Blog', url: '/' },
    { title: 'Bantuan', url: '/' },
    { title: 'Afiliasis', url: '/' },
  ];

  const tertiaryLink = [
    { title: 'Ketentuan Penggunaan', url: '/' },
    { title: 'Sitemap', url: '/' },
    { title: 'Kelas Berbayar', url: '/' },
    { title: 'Lisensi', url: '/' },
  ];

  const socialLink = [
    { title: 'Facebook', url: '/' },
    { title: 'Twitter', url: '/' },
    { title: 'Instagram', url: '/' },
  ];

  return (
    <main>
      <div className="bg-white">
        <footer className="pt-24 pb-12 max-w-7xl mx-auto">
          <div className="container">
            <div className="flex flex-wrap">
              {/* Primary Link */}
              <div className="w-full px-4 mb-12 md:w-1/4">
                <ul>
                  {primaryLink.map((a, i) => (
                    <li key={i}>
                      <Link href={a.url} legacyBehavior>
                        <a className="inline-block text-base text-[#01a3a4] hover:text-[#017d7e] hover:underline">
                          {a.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Primary Link End */}

              {/* Secondary Link */}
              <div className="w-full px-4 mb-12 md:w-1/4">
                <ul>
                  {secondaryLink.map((a, i) => (
                    <li key={i}>
                      <Link href={a.url} legacyBehavior>
                        <a className="inline-block text-base text-[#01a3a4] hover:text-[#017d7e] hover:underline">
                          {a.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Secondary Link End */}

              {/* Tertiary Link */}
              <div className="w-full px-4 mb-12 md:w-1/4">
                <ul>
                  {tertiaryLink.map((a, i) => (
                    <li key={i}>
                      <Link href={a.url} legacyBehavior>
                        <a className="inline-block text-base text-[#01a3a4] hover:text-[#017d7e] hover:underline">
                          {a.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Tertiary Link End */}

              {/* Social Link */}
              <div className="w-full px-4 mb-12 md:w-1/4">
                <ul>
                  {socialLink.map((a, i) => (
                    <li key={i}>
                      <Link href={a.url} legacyBehavior>
                        <a className="inline-block text-base text-[#01a3a4] hover:text-[#017d7e] hover:underline">
                          {a.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Social Link End */}
            </div>
            <div className="w-full pt-5 text-sm">
              <div className="text-center flex flex-wrap justify-between items-end">
                <div className="px-4">
                  Wikusama Hotel
                  {/* <img src={Logo} width={200} height={40} alt="Logo Brand" /> */}
                </div>
                <div className="px-4 pt-2 md:pt-0">
                  <span className="text-slate-600">
                    &copy; {year} PT Hadirin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Footer;
