import styles from './styles.module.scss';
import { Component } from './types';

export const H3: Component = (props) => {
  const { content } = props;
  return <h3 className={styles.h3}>{content}</h3>;
};
