import { Image as ImageImported } from '@/components/image';
import styles from './styles.module.scss';
import { Component } from './types';

export const Image: Component = (props) => {
  const { content } = props;
  return (
    <span className={styles.image}>
      <ImageImported src={content.src} alt={content.alt} />
    </span>
  );
};
