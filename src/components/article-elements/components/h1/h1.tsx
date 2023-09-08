import styles from './styles.module.scss';
import { Component } from './types';

export const H1: Component = (props) => {
  const { content } = props;
  return <h1 className={styles.h1}>{content}</h1>;
};
