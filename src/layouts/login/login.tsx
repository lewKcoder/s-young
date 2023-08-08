import { FunctionComponent, useEffect } from 'react';
import { Header } from '@/components/header';
import { I18n } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/router';
import { dict } from './config';

I18n.putVocabularies(dict);
I18n.setLanguage('ja');

const AuthRedirect: FunctionComponent<any> = (props) => {
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
        <h2 className="title">ログイン</h2>
        <Authenticator>{({ user }) => <AuthRedirect user={user} />}</Authenticator>
      </div>

      <style jsx>{`
        .title {
          text-align: center;
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 16px;
        }
      `}</style>
    </>
  );
};
