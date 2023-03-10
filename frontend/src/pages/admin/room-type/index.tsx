import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerRoomType from '@/components/Containers/RoomType/RoomType';

const RoomType: FC = () => {
  const router = useRouter();
  blockAccess('admin', router);

  return <ContainerRoomType />;
};

export default RoomType;
