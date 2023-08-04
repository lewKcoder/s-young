import { FunctionComponent, useRef, useState } from 'react';
import { useAtomValue } from 'jotai';
import { disabledStore, errorStore } from './store';
import { useOnChange } from './utils/useOnChange';
import styles from './styles.module.scss';
import { Image } from '@/components/image';
import { API, graphqlOperation } from 'aws-amplify';
import { createChat } from '@/graphql/mutations';

export const Comment: FunctionComponent = () => {
  const [modal, setModal] = useState(false);
  const error = useAtomValue(errorStore);
  const disabled = useAtomValue(disabledStore);
  const $textarea = useRef<HTMLTextAreaElement>(null);

  const onChange = useOnChange($textarea);

  // TODO: utilsに切り分ける
  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const c = async () => {
    const param = {
      input: {
        id: Math.floor(Math.random() * 100),
        chatId: Math.floor(Math.random() * 100),
        icon: '/sample-icon.png',
        userName: '山田たろう',
        text: $textarea.current?.value,
        date: new Date().toISOString(),
        likes: 0,
        prohibition: 0,
      },
    };
    try {
      const chat = await API.graphql(graphqlOperation(createChat, param));
      console.log(chat);
    } catch (err) {
      console.log('error creating todo:', err);
    }
  };

  const handleCreateChat = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    c();
  };

  return (
    <>
      <div className={styles.chat_button} onClick={handleModalOpen} />
      <form className={`${styles.container} ${modal && styles.modal}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>コメント</h2>
          <span className={styles.close_button} onClick={handleModalClose}>
            <Image src="/close.png" alt="close" />
          </span>
        </div>

        <textarea
          ref={$textarea}
          cols={30}
          rows={10}
          className={styles.textarea}
          onChange={onChange}
        ></textarea>

        {error && <span className={styles.error}>投稿できない内容が含まれています。</span>}

        <button
          type="submit"
          className={`${styles.button} ${disabled && styles.disabled}`}
          onClick={(e) => handleCreateChat(e)}
        >
          投稿
        </button>

        <div className={styles.notice}>
          <p className={styles.text}>※匿名でコメントすることができます。</p>
          <p className={styles.text}>
            ※皆様の安全と快適なコミュニケーションを保つため、他のユーザーに対する誹謗中傷や不適切な発言は厳禁とします。（当アプリの利用規約に違反する行為は、アカウントの停止措置を含む適切な対応を取らせていただきます。）
          </p>
          <p className={styles.text}>
            ※個人情報の公開や共有は、自身や他人の安全を確保するため、住所、電話番号、メールアドレスなどの個人情報は絶対に公開しないでください。
          </p>
        </div>
      </form>
    </>
  );
};
