import { FunctionComponent, useEffect } from 'react';
import { Header } from '@/components/header';
import { I18n } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/router';
import { formFields, dict } from './config';

I18n.putVocabularies(dict);
I18n.setLanguage('ja');

const AuthRedirect: FunctionComponent = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/thread');
  });

  return null;
};

export const Auth: FunctionComponent = () => {
  return (
    <>
      <Header />

      <div id="amplify-c">
        <Authenticator formFields={formFields}>
          <AuthRedirect />
        </Authenticator>
      </div>
    </>
  );
};
