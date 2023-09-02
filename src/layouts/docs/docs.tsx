import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import { indexData } from '@/const';
import styles from './styles.module.scss';
import Link from 'next/link';

export const Docs: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ul className={styles.container}>
        {indexData.map(({ indexText, lists }) => (
          <li key={indexText} className={styles.content}>
            <p className={styles.index_title}>{indexText}行</p>
            <ul className={styles.lists}>
              {lists.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href} className={styles.link}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
