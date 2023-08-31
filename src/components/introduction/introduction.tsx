import { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import data from './data.json';
import Link from 'next/link';

export const Introduction: FunctionComponent = () => {
  const { texts } = data;

  return (
    <div className={styles.container}>
      <div>
        {texts.map((text, i) => (
          <p key={i} className={styles.text}>
            {text}
          </p>
        ))}
      </div>

      <Link href="/thread" className={styles.link}>
        交流する
      </Link>
    </div>
  );
};
