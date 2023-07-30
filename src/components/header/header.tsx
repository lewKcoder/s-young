import { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import data from './data.json';
import { Component } from './types';

export const Header: Component = (props) => {
  const { hasBlur } = props;
  const { leftItems, rightItems } = data;

  return (
    <header className={`${styles.container} ${hasBlur && styles.blur}`}>
      <nav className={styles.content}>
        <div className={styles.links}>
          {leftItems.map(({ item }) => (
            <a key={item.label} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </div>
        <div className={styles.links}>
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
