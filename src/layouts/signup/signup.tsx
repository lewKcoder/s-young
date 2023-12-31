import { FunctionComponent, useEffect, useState } from 'react';
import { Header } from '@/components/header';
import { Image } from '@/components/image';
import { AuthRedirect } from '@/components/auth-redirect';
import { I18n } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { signUpFormFields, dict } from '@/const';
import { iconColorStore } from '@/stores';
import { useAtom } from 'jotai';
import { createGradientCSS } from './utils';
import Link from 'next/link';
import styles from './styles.module.scss';
import '@aws-amplify/ui-react/styles.css';

export const SignUp: FunctionComponent = () => {
  I18n.putVocabularies(dict);
  I18n.setLanguage('ja');

  const [iconColor, setIconColor] = useAtom(iconColorStore);
  const [colorData, setColorData] = useState<{ [key: string]: string }>({
    selectColor: 'color1',
    color1: '',
    color2: '',
    color3: '',
  });

  const selectColor = (color: string, choice: string) => {
    setIconColor(color);
    setColorData((prevColor) => ({ ...prevColor, selectColor: choice }));
  };

  const setColors = () => {
    setColorData((prevColor) => ({
      ...prevColor,
      color1: createGradientCSS(),
      color2: createGradientCSS(),
      color3: createGradientCSS(true),
    }));
  };

  useEffect(() => {
    setColors();
    setIconColor(colorData.color1);
  }, []);

  return (
    <>
      <Header hasBlur />

      <div id="amplify-c">
        <Authenticator
          formFields={signUpFormFields}
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
                      {['color1', 'color2', 'color3'].map((color) => (
                        <button
                          key={color}
                          className={`${styles.icon} ${color}`}
                          onClick={() => selectColor(colorData[color], color)}
                        >
                          <span className={styles.vote}>
                            <Image src="/site-icon-white.svg" alt="voteWhite" />
                          </span>
                        </button>
                      ))}
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
          {() => <AuthRedirect />}
        </Authenticator>

        <style jsx>{`
          .color1 {
            background: ${colorData.color1};
            opacity: ${colorData.selectColor !== 'color1' ? 0.2 : 1};
          }
          .color2 {
            background: ${colorData.color2};
            opacity: ${colorData.selectColor !== 'color2' ? 0.2 : 1};
          }
          .color3 {
            background: ${colorData.color3};
            opacity: ${colorData.selectColor !== 'color3' ? 0.2 : 1};
          }
        `}</style>
      </div>
    </>
  );
};
