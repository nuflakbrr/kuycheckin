import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerEditBooking from '@/components/Containers/Booking/EditBooking';

const EditBooking: FC = () => {
  const router = useRouter();
  blockAccess('admin', router);

  return <ContainerEditBooking />;
};

export default EditBooking;
