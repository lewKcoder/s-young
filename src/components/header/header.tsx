import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { Authenticator } from '@aws-amplify/ui-react';
import { Image } from '@/components/image';
import { Component } from './types';
import { userStore } from '@/stores/user';
import { useGetListUsers } from './utils';
import styles from './styles.module.scss';

export const Header: Component = (props) => {
  const { hasBlur } = props;
  const [user, setUser] = useAtom(userStore);
  const getListUsers = useGetListUsers();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className={`${styles.container} ${hasBlur && styles.blur}`}>
      <nav className={styles.content}>
        <Link href="/" className={styles.site_title}>
          <span className={styles.image}>
            <Image src="/site-icon-black.svg" alt="" />
          </span>
          <h1 className={styles.title}>SEN</h1>
        </Link>

        <div className={styles.links}>
          <p className={styles.users_title}>
            参加人数<span className={styles.users}>{getListUsers.length}</span>人
          </p>
          <Link href="/thread" className={styles.link}>
            スレッド
          </Link>
          <Link href="/docs" className={styles.link}>
            ドキュメント
          </Link>
          {user && isClient ? (
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
