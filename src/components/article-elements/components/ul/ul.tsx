import styles from './styles.module.scss';
import { Component } from './types';

export const Ul: Component = (props) => {
  const { content } = props;
  return (
    <ul className={styles.ul}>
      {content.map((item: string) => (
        <li key={item} className={styles.li}>
          {item}
        </li>
      ))}
    </ul>
  );
};
