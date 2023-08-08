import { FunctionComponent, useEffect, useState } from 'react';
import { Header } from '@/components/header';
import { Image } from '@/components/image';
import { I18n } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/router';
import { formFields, dict } from './config';
import { iconColorStore } from '@/stores';
import { useAtom } from 'jotai';

I18n.putVocabularies(dict);
I18n.setLanguage('ja');

const AuthRedirect: FunctionComponent<any> = (props) => {
  const router = useRouter();
  useEffect(() => {
    router.push('/thread');
  });

  return null;
};

export const Signin: FunctionComponent = () => {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [selectColor, setSelectColor] = useState('first');
  const [iconColor, setIconColor] = useAtom(iconColorStore);

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

    return css;
  }

  const handlerSelectColor = (color: string, choice: string) => {
    setIconColor(color);
    setSelectColor(choice);
  };

  const setColors = () => {
    setColor1(createGradientCSS());
    setColor2(createGradientCSS());
    setColor3(createGradientCSS());
  };

  useEffect(() => {
    setColors();
    setIconColor(color1);
  }, []);

  return (
    <>
      <Header />

      <div id="amplify-c">
        <Authenticator
          formFields={formFields}
          initialState="signUp"
          components={{
            SignUp: {
              FormFields() {
                return (
                  <>
                    <p className="text">
                      アイコン色を選択:<span>＊登録後の変更はできません。</span>
                    </p>
                    <div className="icons">
                      <div
                        className={'icon first'}
                        onClick={() => handlerSelectColor(color1, 'first')}
                      >
                        <span className="vote">
                          <Image src="/vote-white.svg" alt="voteWhite" />
                        </span>
                      </div>
                      <div
                        className="icon second"
                        onClick={() => handlerSelectColor(color2, 'second')}
                      >
                        <span className="vote">
                          <Image src="/vote-white.svg" alt="voteWhite" />
                        </span>
                      </div>
                      <div
                        className="icon third"
                        onClick={() => handlerSelectColor(color3, 'third')}
                      >
                        <span className="vote">
                          <Image src="/vote-white.svg" alt="voteWhite" />
                        </span>
                      </div>
                    </div>
                    <button onClick={setColors} className="button">
                      更新
                    </button>
                    <input type="hidden" value={iconColor} name="profile" />

                    <Authenticator.SignUp.FormFields />
                  </>
                );
              },
            },
          }}
        >
          {({ user }) => <AuthRedirect user={user} />}
        </Authenticator>

        <style jsx>{`
          .icons {
            display: flex;
            gap: 16px;
            justify-content: center;
          }
          .icon {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .vote {
            width: 50%;
            height: 50%;
          }
          .first {
            background: ${color1};
            opacity: ${selectColor !== 'first' ? 0.2 : 1};
          }
          .second {
            background: ${color2};
            opacity: ${selectColor !== 'second' ? 0.2 : 1};
          }
          .third {
            background: ${color3};
            opacity: ${selectColor !== 'third' ? 0.2 : 1};
          }
          .text span {
            font-size: 12px;
            padding-left: 4px;
          }
          .button {
            width: 60%;
            margin: 0 auto 32px;
            border-radius: 4px;
            border: none;
            height: 40px;
            background: silver;
            cursor: pointer;

            &:hover {
              opacity: 0.5;
            }
          }
        `}</style>
      </div>
    </>
  );
};
