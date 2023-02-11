import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Tab } from '@headlessui/react';
import Head from 'next/head';

import { classNames } from '../../../../lib/classNames';
import Sidebar from '../../../Common/Sidebar';
import AllUserSection from './components/AllUser';
import AddUserSection from './components/AddUser';

const ContainerUser: FC = () => {
  return (
    <>
      <Head>
        <title>Daftar User - Wikusama Hotel</title>
      </Head>

      <ToastContainer autoClose={1500} />

      <Sidebar />

      <main className="bg-white md:ml-64 min-h-screen">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full p-10">
              <h2 className="text-2xl font-bold text-primary mb-5">
                Daftar User
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
                      </Tab.List>
                    </div>
                  </div>

                  <div className="mt-7">
                    <Tab.Panels>
                      <Tab.Panel>
                        <AllUserSection />
                      </Tab.Panel>

                      <Tab.Panel>
                        <AddUserSection />
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

export default ContainerUser;
