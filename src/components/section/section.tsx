import { Component } from './types';
import styles from './styles.module.scss';

export const Section: Component = (props) => {
  const { children, title } = props;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
