import { Component } from './types';
import styles from './styles.module.scss';

export const ArticleElements: Component = (props) => {
  const { articles } = props;

  return (
    <div className={styles.container}>
      {articles.map(({ id, content, htmlType }) => {
        if (htmlType === 'h1') {
          return (
            <h1 key={id} className={styles.h1}>
              {content}
            </h1>
          );
        }

        if (htmlType === 'p') {
          return (
            <p key={id} className={styles.p}>
              {content}
            </p>
          );
        }

        if (htmlType === 'h2') {
          return (
            <h2 key={id} className={styles.h2}>
              {content}
            </h2>
          );
        }

        if (htmlType === 'h3') {
          return (
            <h3 key={id} className={styles.h3}>
              {content}
            </h3>
          );
        }

        if (htmlType === 'ul') {
          return (
            <ul key={id} className={styles.ul}>
              {Array.isArray(content) &&
                content.map((item: string) => (
                  <li key={item} className={styles.li}>
                    {item}
                  </li>
                ))}
            </ul>
          );
        }
      })}
    </div>
  );
};
