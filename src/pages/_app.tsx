import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { userNameStore } from '@/stores/user-name';
import { useSetAtom } from 'jotai';
import { Auth } from 'aws-amplify';
Amplify.configure(awsExports);

export default function App({ Component, pageProps }: AppProps) {
  const setUserName = useSetAtom(userNameStore);

  Auth.currentAuthenticatedUser()
    .then((user) => {
      setUserName(user.username);
    })
    .catch((err) => console.log(err));

  return <Component {...pageProps} />;
}
