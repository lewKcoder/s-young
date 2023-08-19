import { FunctionComponent, useEffect, useState } from 'react';
import { Header } from '@/components/header';
import { Image } from '@/components/image';
import { I18n } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import { formFields, dict } from './config';
import { iconColorStore } from '@/stores';
import { useAtom } from 'jotai';
import Link from 'next/link';
import styles from './styles.module.scss';
import '@aws-amplify/ui-react/styles.css';

I18n.putVocabularies(dict);
I18n.setLanguage('ja');

const AuthRedirect: FunctionComponent<any> = (props) => {
  const router = useRouter();
  useEffect(() => {
    router.push('/thread');
  });

  return null;
};

export const SignUp: FunctionComponent = () => {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [selectColor, setSelectColor] = useState('first');
  const [iconColor, setIconColor] = useAtom(iconColorStore);

  function createGradientCSS(twoColor?: boolean) {
    function randomColor() {
      return Math.floor(Math.random() * 256);
    }

    function rgbString() {
      return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }

    const color1 = rgbString();
    const color2 = rgbString();
    const color3 = rgbString();

    const deg = Math.floor(Math.random() * 180);

    if (twoColor) {
      const css = `linear-gradient(${deg}deg, ${color1}, ${color2})`;
      return css;
    }

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
    setColor3(createGradientCSS(true));
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
                    <h2 className={styles.title}>アカウント登録</h2>
                    <p className={styles.text}>
                      アイコン色を選択<span>＊登録後の変更はできません。</span>
                    </p>
                    <div className={styles.icons}>
                      <div
                        className={`${styles.icon} first`}
                        onClick={() => handlerSelectColor(color1, 'first')}
                      >
                        <span className={styles.vote}>
                          <Image src="/vote-white.svg" alt="voteWhite" />
                        </span>
                      </div>
                      <div
                        className={`${styles.icon} second`}
                        onClick={() => handlerSelectColor(color2, 'second')}
                      >
                        <span className={styles.vote}>
                          <Image src="/vote-white.svg" alt="voteWhite" />
                        </span>
                      </div>
                      <div
                        className={`${styles.icon} third`}
                        onClick={() => handlerSelectColor(color3, 'third')}
                      >
                        <span className={styles.vote}>
                          <Image src="/vote-white.svg" alt="voteWhite" />
                        </span>
                      </div>
                    </div>
                    <button onClick={setColors} className={styles.button}>
                      更新
                    </button>
                    <input type="hidden" value={iconColor} name="profile" />

                    <Authenticator.SignUp.FormFields />

                    <div className={styles.link}>
                      <Link href="/login">アカウントをお持ちの方はこちらから</Link>
                    </div>
                  </>
                );
              },
            },
          }}
        >
          {({ user }) => <AuthRedirect user={user} />}
        </Authenticator>

        <style jsx>{`
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
        `}</style>
      </div>
    </>
  );
};
