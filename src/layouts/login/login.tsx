import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import { AuthRedirect } from '@/components/auth-redirect';
import { I18n } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { dict } from '@/const';
import styles from './styles.module.scss';
import '@aws-amplify/ui-react/styles.css';

export const Login: FunctionComponent = () => {
  I18n.putVocabularies(dict);
  I18n.setLanguage('ja');

  return (
    <>
      <Header hasBlur />

      <div id="amplify-c">
        <h2 className={styles.title}>ログイン</h2>
        <Authenticator>{() => <AuthRedirect />}</Authenticator>
      </div>
    </>
  );
};
