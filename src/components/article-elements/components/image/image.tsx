import { Image as ImageImported } from '@/components/image';
import styles from './styles.module.scss';
import { Component } from './types';

export const Image: Component = (props) => {
  const { content } = props;

  const widthStyle = content.width ? content.width : '60%';
  const heightStyle = content.height ? content.height : 'auto';

  return (
    <>
      <span className={`${styles.image} image`}>
        <ImageImported src={content.src} alt={content.alt} />
      </span>

      <style jsx>{`
        .image {
          width: ${widthStyle};
          height: ${heightStyle};
        }
      `}</style>
    </>
  );
};
