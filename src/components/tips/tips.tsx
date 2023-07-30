import { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import data from './data.json';

export const Tips: FunctionComponent = () => {
  const { links } = data;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>もっと楽しく</h2>

      <ul className={styles.lists}>
        {links.map(({ link }) => (
          <li key={link.label} className={styles.list}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
