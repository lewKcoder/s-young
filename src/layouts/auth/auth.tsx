import { FunctionComponent, useEffect, useState } from 'react';
import { Header } from '@/components/header';
import { I18n } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/router';
import { formFields, dict } from './config';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser as createUserImported } from '@/graphql/mutations';

I18n.putVocabularies(dict);
I18n.setLanguage('ja');

const AuthRedirect: FunctionComponent<any> = (props) => {
  const { user } = props;

  const createUser = async () => {
    const param = {
      input: {
        id: user.attributes.sub,
        userName: user.username,
        iconColor: user.attributes.profile,
      },
    };

    try {
      const a = await API.graphql(graphqlOperation(createUserImported, param));
    } catch (err) {
      console.log('error creating chat:', err);
    }
  };

  const router = useRouter();
  useEffect(() => {
    createUser();
    router.push('/thread');
  });

  return null;
};

export const Auth: FunctionComponent = () => {
  const [color, setColor] = useState('');

  function createGradientCSS() {
    // 0~255のランダムな整数を生成する関数
    function randomColor() {
      return Math.floor(Math.random() * 256);
    }

    // rgb色の文字列を生成する関数
    function rgbString() {
      return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }

    // 3色のrgb色を生成
    const color1 = rgbString();
    const color2 = rgbString();
    const color3 = rgbString();

    // ランダムな角度
    const deg = Math.floor(Math.random() * 180);

    // CSSのlinear-gradient関数の文字列を生成
    const css = `linear-gradient(${deg}deg, ${color1}, ${color2}, ${color3})`;

    setColor(css);
  }

  useEffect(() => {
    createGradientCSS();
  }, []);

  return (
    <>
      <Header />

      <div id="amplify-c">
        <Authenticator
          formFields={formFields}
          components={{
            SignUp: {
              FormFields() {
                return (
                  <>
                    <div className="icon" />
                    <input type="hidden" value={color} name="profile" />

                    <Authenticator.SignUp.FormFields />
                  </>
                );
              },
            },
          }}
        >
          {({ user }) => <AuthRedirect user={user} />}
        </Authenticator>

        <style>{`
        .icon {
          background: ${color};
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: auto;
        }
        `}</style>
      </div>
    </>
  );
};
