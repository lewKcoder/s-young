import { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import data from './data.json';

export const Header: FunctionComponent = () => {
  const { leftItems, rightItems } = data;

  return (
    <header className={styles.container}>
      <nav className={styles.content}>
        <div className={styles.links}>
          {leftItems.map(({ item }) => (
            <a key={item.label} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </div>
        <div className={styles.links}>
          {leftItems.map(({ item }) => (
            <a key={item.label} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
