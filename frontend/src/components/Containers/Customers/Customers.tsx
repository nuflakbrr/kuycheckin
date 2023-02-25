import { FC, useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Tab } from '@headlessui/react';
import Head from 'next/head';

import { classNames } from '../../../lib/classNames';
import SidebarAdmin from '../../Common/SidebarAdmin';
import SidebarReceptionist from '../../Common/SidebarReceptionist';
import AllCustomersSection from './components/AllCustomers';

const ContainerCustomers: FC = () => {
  const [dataLogin, setDataLogin] = useState<any>({});

  useEffect(() => {
    if (localStorage.getItem('admin')) {
      setDataLogin(JSON.parse(localStorage.getItem('admin') || '{}'));
    }

    if (localStorage.getItem('resepsionis')) {
      setDataLogin(JSON.parse(localStorage.getItem('resepsionis') || '{}'));
    }

    return () => {
      setDataLogin({});
    };
  }, []);

  return (
    <>
      <Head>
        <title>Daftar Pelanggan - Wikusama Hotel</title>
      </Head>

      <ToastContainer autoClose={1500} />

      {dataLogin.role === 'admin' && <SidebarAdmin />}

      {dataLogin.role === 'resepsionis' && <SidebarReceptionist />}

      <main className="bg-white md:ml-64 min-h-screen">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full p-10">
              <h2 className="text-2xl font-bold text-primary mb-5">
                Daftar Pelanggan
              </h2>

              <Tab.Group as="div">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="border-b">
                    <div className="w-full mb-5">
                      <Tab.List className="flex items-center overflow-x-auto">
                        <Tab as="button">
                          {({ selected }) => (
                            <div
                              className={classNames(
                                selected
                                  ? 'font-extrabold text-primary'
                                  : 'font-medium text-secondarydark hover:font-extrabold hover:text-primary',
                                'font-segoe text-base leading-6 mr-8'
                              )}
                            >
                              Semua Data
                            </div>
                          )}
                        </Tab>
                      </Tab.List>
                    </div>
                  </div>

                  <div className="mt-7">
                    <Tab.Panels as="div">
                      <Tab.Panel as="div">
                        <AllCustomersSection />
                      </Tab.Panel>
                    </Tab.Panels>
                  </div>
                </div>
              </Tab.Group>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContainerCustomers;
