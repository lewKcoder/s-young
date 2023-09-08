import styles from './styles.module.scss';
import { Component } from './types';

export const H2: Component = (props) => {
  const { content } = props;
  return <h2 className={styles.h2}>{content}</h2>;
};
