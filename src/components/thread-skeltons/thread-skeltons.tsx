import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

export const ThreadSkeltons: FunctionComponent = () => {
  return (
    <div className={styles.loading}>
      {[...Array(10)].map((_, index) => (
        <div key={index} className={styles.skeleton}>
          <div className={styles.skeleton_image} />
          <div>
            <div className={styles.skeleton_title} />
            <div className={styles.skeleton_text} />
          </div>
        </div>
      ))}
    </div>
  );
};
