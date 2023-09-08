import styles from './styles.module.scss';
import { Component } from './types';

export const P: Component = (props) => {
  const { content } = props;
  return <p className={styles.p}>{content}</p>;
};
