import { FunctionComponent, useRef, useState } from 'react';
import { useAtomValue } from 'jotai';
import { disabledStore, errorStore, commentValueStore } from './store';
import { userStore } from '@/stores/user';
import { useOnChange } from './utils/useOnChange';
import { useCreateChat } from './utils/useCreateChat';
import { Image } from '@/components/image';
import styles from './styles.module.scss';
import Link from 'next/link';

export const Comment: FunctionComponent = () => {
  const [modal, setModal] = useState(false);

  const disabled = useAtomValue(disabledStore);
  const commentValue = useAtomValue(commentValueStore);
  const error = useAtomValue(errorStore);
  const user = useAtomValue(userStore);
  const $textarea = useRef<HTMLTextAreaElement>(null);
  const onChange = useOnChange($textarea);
  const createChat = useCreateChat();

  const textareaProp = user
    ? { rows: 6, onChange: onChange, value: commentValue }
    : {
        rows: 10,
        placeholder: 'コメントの投稿にはログインが必要です。',
        readOnly: true,
        disabled: true,
      };

  return (
    <>
      <div className={styles.chat_button} onClick={() => setModal(true)} />
      <div className={`${styles.container} ${modal && styles.modal}`}>
        <span className={styles.close_button} onClick={() => setModal(false)}>
          <Image src="/close.png" alt="close" />
        </span>
        {user && (
          <div className={`${styles.user} user`}>
            <div className={`${styles.icon} icon`}>
              <span className={styles.vote}>
                <Image src="/site-icon-white.svg" alt="voteWhite" />
              </span>
            </div>
            <div className={`${styles.name} name`}>{user.username}</div>
          </div>
        )}
        <form>
          <h2 className={styles.title}>コメント</h2>

          <textarea
            ref={$textarea}
            cols={30}
            className={styles.textarea}
            {...textareaProp}
          ></textarea>

          {error && <span className={styles.error}>投稿できない内容が含まれています。</span>}

          {user === null ? (
            <Link href="/login" className={styles.login}>
              ログイン
            </Link>
          ) : disabled ? (
            <div className={styles.disabled}>投稿</div>
          ) : (
            <button
              type="submit"
              className={styles.button}
              onClick={(e) => createChat(e, $textarea.current?.value)}
            >
              投稿
            </button>
          )}

          <div className={styles.notice}>
            <p className={styles.text}>
              ※皆様の安全と快適なコミュニケーションを保つため、他のユーザーに対する誹謗中傷や不適切な発言は厳禁とします。（当アプリの利用規約に違反する行為は、アカウントの停止措置を含む適切な対応を取らせていただきます。）
            </p>
            <p className={styles.text}>
              ※個人情報の公開や共有は、自身や他人の安全を確保するため、住所、電話番号、メールアドレスなどの個人情報は絶対に公開しないでください。
            </p>
          </div>
        </form>
      </div>

      <style>{`
        .user {
          display: ${user ? 'flex' : 'none'};
        }
        .icon {
          background: ${user && user.attributes.profile};
      `}</style>
    </>
  );
};
