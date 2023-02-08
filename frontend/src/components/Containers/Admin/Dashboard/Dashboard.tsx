import { FC } from 'react';
import Head from 'next/head';

import Sidebar from '../../../Common/Sidebar';

const ContainerDashboard: FC = () => {
  return (
    <>
      <Head>
        <title>Dasbor - Wikusama Hotel</title>
      </Head>

      <Sidebar />

      <main className="bg-white md:ml-64 min-h-screen">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full p-10">
              <h1>awdawdawd</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContainerDashboard;
