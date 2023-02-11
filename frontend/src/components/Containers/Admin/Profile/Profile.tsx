import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Tab } from '@headlessui/react';
import Head from 'next/head';

import { classNames } from '../../../../lib/classNames';
import Sidebar from '../../../Common/Sidebar';
import PreviewProfile from './components/PreviewProfile';
import EditProfile from './components/EditProfile';

const ContainerProfile: FC = () => {
  return (
    <>
      <Head>
        <title>Profil Saya - Wikusama Hotel</title>
      </Head>

      <ToastContainer />

      <Sidebar />

      <main className="bg-white md:ml-64 min-h-screen">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full p-10">
              <h2 className="text-2xl font-bold text-primary mb-5">
                Pengaturan Profil
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
                              Profil Saya
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
                              Ubah Profil
                            </button>
                          )}
                        </Tab>
                      </Tab.List>
                    </div>
                  </div>

                  <div className="mt-7">
                    <Tab.Panels>
                      <Tab.Panel>
                        <PreviewProfile />
                      </Tab.Panel>

                      <Tab.Panel>
                        <EditProfile />
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

export default ContainerProfile;
