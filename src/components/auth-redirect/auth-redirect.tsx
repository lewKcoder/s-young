import { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';

export const AuthRedirect: FunctionComponent = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/thread');
  });

  return null;
};
