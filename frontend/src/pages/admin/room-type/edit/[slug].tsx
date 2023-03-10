import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerEditRoomType from '@/components/Containers/RoomType/components/EditRoomType';

const EditRoomType: FC = () => {
  const router = useRouter();
  blockAccess('admin', router);

  return <ContainerEditRoomType />;
};

export default EditRoomType;
