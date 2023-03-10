import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerCustomers from '@/components/Containers/Customers/Customers';

const Customers: FC = () => {
  const router = useRouter();
  blockAccess('resepsionis', router);

  return <ContainerCustomers />;
};

export default Customers;
