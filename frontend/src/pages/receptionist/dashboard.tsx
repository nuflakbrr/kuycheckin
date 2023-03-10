import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerDashboard from '@/components/Containers/Dashboard/Dashboard';

const DashboardAdmin: FC = () => {
  const router = useRouter();
  blockAccess('resepsionis', router);

  return <ContainerDashboard />;
};

export default DashboardAdmin;
