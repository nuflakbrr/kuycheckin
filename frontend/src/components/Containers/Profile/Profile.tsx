import { FC, useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Tab } from '@headlessui/react';
import Head from 'next/head';

import { classNames } from '@/lib/classNames';
import { User } from '@/interfaces/user';
import { Customer } from '@/interfaces/customer';
import SidebarAdmin from '@/components/Common/SidebarAdmin';
import SidebarReceptionist from '@/components/Common/SidebarReceptionist';
import SidebarCustomer from '@/components/Common/SidebarCustomer';
import PreviewProfile from './components/PreviewProfile';
import EditProfile from './components/EditProfile';

const ContainerProfile: FC = () => {
  const [dataLogin, setDataLogin] = useState<User | Customer>();

  useEffect(() => {
    if (localStorage.getItem('admin')) {
      setDataLogin(JSON.parse(localStorage.getItem('admin') || '{}'));
    }

    if (localStorage.getItem('resepsionis')) {
      setDataLogin(JSON.parse(localStorage.getItem('resepsionis') || '{}'));
    }

    if (localStorage.getItem('pelanggan')) {
      setDataLogin(JSON.parse(localStorage.getItem('pelanggan') || '{}'));
    }

    return () => {
      setDataLogin({
        id_user: 0,
        id_pelanggan: 0,
        nama_user: '',
        nama: '',
        foto: '',
        slug: '',
        email: '',
        password: '',
        role: '',
      });
    };
  }, []);
  return (
    <>
      <Head>
        <title>Profil Saya - Wikusama Hotel</title>
      </Head>

      <ToastContainer autoClose={1500} />

      {dataLogin?.role === 'admin' && <SidebarAdmin />}

      {dataLogin?.role === 'resepsionis' && <SidebarReceptionist />}

      {dataLogin?.role === 'pelanggan' && <SidebarCustomer />}

      <main className="bg-white md:ml-64 min-h-screen">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full p-10">
              <h2 className="text-2xl font-bold text-primary mb-5">
                Pengaturan Profil
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
                              Profil Saya
                            </div>
                          )}
                        </Tab>

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
                              Ubah Profil
                            </div>
                          )}
                        </Tab>
                      </Tab.List>
                    </div>
                  </div>

                  <div className="mt-7">
                    <Tab.Panels as="div">
                      <Tab.Panel as="div">
                        <PreviewProfile />
                      </Tab.Panel>

                      <Tab.Panel as="div">
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
