import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerEditUser from '@/components/Containers/User/components/EditUser';

const EditUser: FC = () => {
  const router = useRouter();
  blockAccess('admin', router);

  return <ContainerEditUser />;
};

export default EditUser;
