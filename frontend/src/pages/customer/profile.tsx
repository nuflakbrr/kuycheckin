import { FC } from 'react';
import { useRouter } from 'next/router';

import { blockAccess } from '@/lib/blockAccess';
import ContainerProfile from '@/components/Containers/Profile/Profile';

const Profile: FC = () => {
  const router = useRouter();
  blockAccess('pelanggan', router);

  return <ContainerProfile />;
};

export default Profile;
