import { FunctionComponent, useRef } from 'react';
import { useAtomValue } from 'jotai';
import { disabledStore, errorStore } from './store';
import { useOnChange } from './utils/useOnChange';
import styles from './styles.module.scss';

export const Comment: FunctionComponent = () => {
  const error = useAtomValue(errorStore);
  const disabled = useAtomValue(disabledStore);
  const $textarea = useRef<HTMLTextAreaElement>(null);

  const onChange = useOnChange($textarea);

  return (
    <form className={styles.container}>
      <h2 className={styles.title}>コメント</h2>

      <textarea
        ref={$textarea}
        cols={30}
        rows={10}
        className={styles.textarea}
        onChange={onChange}
      ></textarea>

      {error && <span className={styles.error}>投稿できない内容が含まれています。</span>}

      <button type="submit" className={`${styles.button} ${disabled && styles.disabled}`}>
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
  );
};
