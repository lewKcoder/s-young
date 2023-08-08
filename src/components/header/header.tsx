import { Authenticator } from '@aws-amplify/ui-react';
import { Image } from '@/components/image';
import { Component } from './types';
import { userStore } from '@/stores/user';
import { useAtom } from 'jotai';
import styles from './styles.module.scss';
import Link from 'next/link';

export const Header: Component = (props) => {
  const { hasBlur } = props;
  const [user, setUser] = useAtom(userStore);

  return (
    <header className={`${styles.container} ${hasBlur && styles.blur}`}>
      <nav className={styles.content}>
        <div className={`${styles.links} ${styles.left_items}`}>
          <Link
            href="/"
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
          >
            ホーム
          </Link>
        </div>

        <Link href="/thread" className={styles.site_title}>
          <span className={styles.image}>
            <Image src="/site-icon.svg" alt="" />
          </span>
          <h1 className={styles.title}>SEN</h1>
        </Link>

        <div className={`${styles.links} ${styles.right_items}`}>
          {user ? (
            <Authenticator>
              {({ signOut }) => (
                <a
                  onClick={() => {
                    signOut?.();

                    setUser(null);
                  }}
                  className={styles.link}
                >
                  ログアウト
                </a>
              )}
            </Authenticator>
          ) : (
            <>
              <Link href="login" className={styles.link}>
                ログイン
              </Link>
              <Link href="signup" className={styles.link}>
                新規登録
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
