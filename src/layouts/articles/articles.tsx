import { Header } from '@/components/header';
import { Component } from './types';
import styles from './styles.module.scss';

export const Articles: Component = (props) => {
  const { articles } = props;

  return (
    <>
      <Header hasBlur />

      <div className={styles.container}>{articles[0].content}</div>
    </>
  );
};
