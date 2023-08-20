import { FunctionComponent, useEffect } from 'react';
import { Header } from '@/components/header';
import { I18n } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import { dict } from './config';
import styles from './styles.module.scss';
import '@aws-amplify/ui-react/styles.css';

I18n.putVocabularies(dict);
I18n.setLanguage('ja');

const AuthRedirect: FunctionComponent = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/thread');
  });

  return null;
};

export const Login: FunctionComponent = () => {
  return (
    <>
      <Header />

      <div id="amplify-c">
        <h2 className={styles.title}>ログイン</h2>
        <Authenticator>{() => <AuthRedirect />}</Authenticator>
      </div>
    </>
  );
};
