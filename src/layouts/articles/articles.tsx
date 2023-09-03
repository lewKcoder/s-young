import { Header } from '@/components/header';
import { ArticleElements } from '@/components/article-elements';
import { Component } from './types';
import styles from './styles.module.scss';

export const Articles: Component = (props) => {
  const { articles } = props;

  return (
    <>
      <Header hasBlur />

      <div className={styles.container}>
        <ArticleElements articles={articles} />
      </div>
    </>
  );
};
