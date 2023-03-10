import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerUser from '@/components/Containers/User/User';

const User: FC = () => {
  const router = useRouter();
  blockAccess('admin', router);

  return <ContainerUser />;
};

export default User;
