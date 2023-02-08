import { FC, useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { FaHome, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

import styles from './Navbar.module.css';
import { headerNavLinks } from '../../../data/headerNavLinks';
import { classNames } from '../../../lib/classNames';
import { logout } from '../../../lib/logout';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState({ foto: '', role: '' });

  const router = useRouter();
  const { pathname } = router;

  // Navbar fixed position if scrolling
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      const fixNav = header?.offsetTop ?? 0;

      if (window.pageYOffset > fixNav) {
        header?.classList.add(styles.navbarFixed);
      } else {
        header?.classList.remove(styles.navbarFixed);
      }
    };

    if (localStorage.getItem('admin') || localStorage.getItem('receptionist')) {
      setData(
        JSON.parse(localStorage.getItem('admin') || '') ||
          JSON.parse(localStorage.getItem('receptionist') || '')
      );
      setIsLogged(true);
    }
  }, []);

  // Hamburger menu handler
  const hamburgerHandler = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navMenu');

    hamburger?.addEventListener('click', () => {
      setIsOpen(!isOpen);

      if (isOpen) {
        hamburger?.classList.remove(styles.hamburgerActive);
        navMenu?.classList.add('hidden');
      } else {
        hamburger?.classList.add(styles.hamburgerActive);
        navMenu?.classList.remove('hidden');
      }
    });
  };

  // isMenuActive handler
  const isMenuActive = (path: string) => {
    const isHomePage = pathname === '/' && path === '/';

    if (isHomePage) {
      return true;
    }

    return pathname !== '/' && path !== '/' && pathname.includes(path);
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link href="/" legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 font-primary font-bold text-xl lg:text-2xl py-6"
                  aria-label="logo"
                >
                  <img
                    src="/apple-touch-icon.png"
                    alt="Brand Logo"
                    className="w-8 h-8 object-cover object-center"
                  />
                  Wikusama Hotel
                </a>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className={classNames(
                  isLogged ? 'right-4' : 'right-4',
                  'block absolute lg:hidden'
                )}
                onClick={hamburgerHandler}
              >
                <span
                  className={`${styles.hamburgerLine} origin-top-left transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`${styles.hamburgerLine} transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`${styles.hamburgerLine} origin-bottom-left transition duration-300 ease-in-out`}
                ></span>
              </button>

              <nav
                id="navMenu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  {headerNavLinks.map((a, i) => (
                    <li className="group" key={i}>
                      <Link href={a.path} legacyBehavior>
                        <a
                          className={classNames(
                            isMenuActive(a.path)
                              ? 'text-primary'
                              : 'text-black',
                            'font-secondary font-semibold text-base py-2 mx-8 lg:mx-2 flex group-hover:text-primary transition duration-300 ease-in-out'
                          )}
                        >
                          {a.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {isLogged ? (
                // default is ml-3
                <Menu as="div" className="relative mr-11">
                  <Menu.Button className="flex text-sm">
                    <img
                      src={data.foto}
                      alt="User Image"
                      loading="lazy"
                      className="w-10 rounded-full"
                    />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={`${
                              data.role === 'admin' ? '/admin' : '/receptionist'
                            }/dashboard`}
                            legacyBehavior
                          >
                            <a
                              className={classNames(
                                active ? '' : 'hover:bg-gray-100',
                                'flex items-center px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              <FaHome className="mr-2 mt-1" />
                              Dasbor
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={`${
                              data.role === 'admin' ? '/admin' : '/receptionist'
                            }/settings`}
                            legacyBehavior
                          >
                            <a
                              className={classNames(
                                active ? '' : 'hover:bg-gray-100',
                                'flex items-center px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              <FaCog className="mr-2 mt-1" />
                              Pengaturan
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        <button
                          onClick={() =>
                            logout('admin' || 'receptionist', router)
                          }
                          className="min-w-full flex items-center px-4 py-2 text-sm text-gray-700"
                        >
                          <FaSignOutAlt className="mr-2 mt-1" />
                          Keluar
                        </button>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
