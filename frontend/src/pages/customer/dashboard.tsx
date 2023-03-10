import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerDashboard from '@/components/Containers/Dashboard/Dashboard';

const DashboardCustomer: FC = () => {
  const router = useRouter();
  blockAccess('pelanggan', router);

  return <ContainerDashboard />;
};

export default DashboardCustomer;
