import { Component } from './types';
import {
  H1,
  H2,
  H3,
  P,
  Image as ImageImported,
  Ul,
  ReferenceLinks,
} from './components';
import styles from './styles.module.scss';

export const ArticleElements: Component = (props) => {
  const { articles } = props;

  return (
    <div className={styles.container}>
      {articles.map(({ id, content, htmlType }) => {
        if (htmlType === 'h1') {
          return <H1 key={id} content={content} />;
        }

        if (htmlType === 'h2') {
          return <H2 key={id} content={content} />;
        }

        if (htmlType === 'h3') {
          return <H3 key={id} content={content} />;
        }

        if (htmlType === 'p') {
          return <P key={id} content={content} />;
        }

        if (htmlType === 'ul') {
          return <Ul key={id} content={content} />;
        }

        if (htmlType === 'img') {
          return <ImageImported key={id} content={content} />;
        }

        if (htmlType === 'referenceLinks') {
          return <ReferenceLinks key={id} content={content} />;
        }
      })}
    </div>
  );
};
