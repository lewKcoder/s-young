import styles from './styles.module.scss';
import { Component } from './types';

export const ReferenceLinks: Component = (props) => {
  const { content } = props;

  return (
    <>
      <p className={styles.title}>参考サイト</p>
      <ul className={styles.ul}>
        {content.map(({ label, href }) => (
          <li key={label} className={styles.li}>
            <a
              href={href}
              className={styles.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
