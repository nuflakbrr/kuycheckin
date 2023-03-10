import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerEditRooms from '@/components/Containers/Rooms/components/EditRooms';

const EditRooms: FC = () => {
  const router = useRouter();
  blockAccess('admin', router);

  return <ContainerEditRooms />;
};

export default EditRooms;
