import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerDetailBooking from '@/components/Containers/Booking/DetailBooking';

const DetailBooking: FC = () => {
  const router = useRouter();
  blockAccess('resepsionis', router);

  return <ContainerDetailBooking />;
};

export default DetailBooking;
