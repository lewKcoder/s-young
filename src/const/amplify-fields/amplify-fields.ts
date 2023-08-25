export const signUpFormFields = {
  signUp: {
    username: {
      placeholder: '好きなユーザーネームを入力',
      isRequired: true,
      label: 'ユーザー名',
      order: 1,
    },
    email: {
      placeholder: 'email@example.com',
      isRequired: true,
      label: 'Eメール',
      order: 2,
    },
    password: {
      placeholder: '8文字以上のパスワード',
      isRequired: true,
      label: 'パスワード',
      order: 3,
    },
    confirm_password: {
      placeholder: '8文字以上のパスワード',
      isRequired: true,
      label: 'パスワード（確認用）',
      order: 4,
    },
  },
  confirmSignUp: {
    confirmation_code: {
      placeholder: '確認コードを入力',
      label: '',
    },
  },
};

export const signInFormFields = {
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
};
