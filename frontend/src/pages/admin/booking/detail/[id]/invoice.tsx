import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerInvoice from '@/components/Containers/Booking/Invoice';

const Invoice: FC = () => {
  const router = useRouter();
  blockAccess('admin', router);

  return <ContainerInvoice />;
};

export default Invoice;
