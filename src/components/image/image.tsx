import { Component } from './types';
import styles from './styles.module.scss';

export const Image: Component = (props) => {
  const { src, alt } = props;

  return <img src={src} alt={alt} className={styles.container} />;
};
