import styles from './styles.module.scss';
import data from './data.json';
import { Component } from './types';
import Link from 'next/link';

export const Header: Component = (props) => {
  const { hasBlur } = props;
  const { leftItems, rightItems } = data;

  return (
    <header className={`${styles.container} ${hasBlur && styles.blur}`}>
      <nav className={styles.content}>
        <div className={`${styles.links} ${styles.left_items}`}>
          {leftItems.map(({ item }) => (
            <a key={item.label} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </div>

        <Link href="/thread" className={styles.site_title}>
          <img src="/site-icon.svg" alt="" className={styles.image} />
          <h1 className={styles.title}>SEN</h1>
        </Link>

        <div className={`${styles.links} ${styles.right_items}`}>
          {rightItems.map(({ item }) => (
            <a key={item.label} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
