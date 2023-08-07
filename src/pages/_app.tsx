import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { userStore } from '@/stores';
import { useSetAtom } from 'jotai';
import { Auth } from 'aws-amplify';
Amplify.configure(awsExports);

export default function App({ Component, pageProps }: AppProps) {
  const setUser = useSetAtom(userStore);

  Auth.currentAuthenticatedUser()
    .then((user) => {
      setUser(user);
    })
    .catch((err) => console.log(err));

  return <Component {...pageProps} />;
}
