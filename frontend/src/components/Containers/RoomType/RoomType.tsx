import { FC, useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Tab } from '@headlessui/react';
import Head from 'next/head';

import { classNames } from '../../../lib/classNames';
import SidebarAdmin from '../../Common/SidebarAdmin';
import AllRoomTypeSection from './components/AllRoomType';
import AddRoomTypeSection from './components/AddRoomType';

const ContainerRoomType: FC = () => {
  const [dataLogin, setDataLogin] = useState<any>({});

  useEffect(() => {
    if (localStorage.getItem('admin')) {
      setDataLogin(JSON.parse(localStorage.getItem('admin') || '{}'));
    }

    if (localStorage.getItem('resepsionis')) {
      setDataLogin(JSON.parse(localStorage.getItem('resepsionis') || '{}'));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Daftar Tipe Kamar</title>
      </Head>

      <ToastContainer autoClose={1500} />

      <SidebarAdmin />

      <main className="bg-white md:ml-64 min-h-screen">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full p-10">
              <h2 className="text-2xl font-bold text-primary mb-5">
                Daftar Tipe Kamar
              </h2>

              <Tab.Group>
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="border-b">
                    <div className="w-full mb-5">
                      <Tab.List className="flex items-center overflow-x-auto">
                        <Tab>
                          {({ selected }) => (
                            <button
                              className={classNames(
                                selected
                                  ? 'font-extrabold text-primary'
                                  : 'font-medium text-secondarydark hover:font-extrabold hover:text-primary',
                                'font-segoe text-base leading-6 mr-8'
                              )}
                            >
                              Semua Data
                            </button>
                          )}
                        </Tab>

                        {dataLogin.role === 'admin' && (
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={classNames(
                                  selected
                                    ? 'font-extrabold text-primary'
                                    : 'font-medium text-secondarydark hover:font-extrabold hover:text-primary',
                                  'font-segoe text-base leading-6 mr-8'
                                )}
                              >
                                Tambah Data
                              </button>
                            )}
                          </Tab>
                        )}
                      </Tab.List>
                    </div>
                  </div>

                  <div className="mt-7">
                    <Tab.Panels>
                      <Tab.Panel>
                        <AllRoomTypeSection />
                      </Tab.Panel>

                      <Tab.Panel>
                        <AddRoomTypeSection />
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

export default ContainerRoomType;
