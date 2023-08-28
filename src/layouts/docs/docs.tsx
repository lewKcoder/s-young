import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import { indexData } from './const';
import styles from './styles.module.scss';
import Link from 'next/link';

export const Docs: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ul className={styles.container}>
        {indexData.map(({ indexText, lists }) => (
          <li key={indexText}>
            <p className={styles.aiueo}>{indexText}行</p>
            <ul>
              {lists.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
