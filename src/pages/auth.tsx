import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';

const formFields = {
  signIn: {
    username: {
      placeholder: '名前',
      isRequired: true,
      label: 'ユーザーネーム:',
    },
    password: {
      placeholder: 'jefwa45ythgd2',
      isRequired: true,
      label: 'パスワード:',
    },
  },
  signUp: {
    username: {
      placeholder: '名前',
      isRequired: true,
      label: 'ユーザーネーム:',
      order: 1,
    },
    email: {
      placeholder: 'email@example.com',
      isRequired: true,
      label: 'Eメール:',
      order: 2,
    },
    password: {
      placeholder: 'jefwa45ythgd2',
      isRequired: true,
      label: 'パスワード:',
      order: 3,
    },
    confirm_password: {
      placeholder: 'jefwa45ythgd2',
      isRequired: true,
      label: 'パスワード（確認用）:',
      order: 4,
    },
  },
};

const AuthRedirect: FunctionComponent = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/thread');
  });

  return null;
};

export default function Auth({ signOut, user }: any) {
  return (
    <Authenticator formFields={formFields}>
      <AuthRedirect />
    </Authenticator>
  );
}
