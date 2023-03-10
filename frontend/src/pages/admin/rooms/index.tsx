import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerRooms from '@/components/Containers/Rooms/Rooms';

const Rooms: FC = () => {
  const router = useRouter();
  blockAccess('admin', router);

  return <ContainerRooms />;
};

export default Rooms;
