import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import { Comment } from '@/components/comment';
import { ThreadItems } from '@/components/thread-items';
import styles from './styles.module.scss';

export const Thread: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Header hasBlur />
      <div className={styles.content}>
        <Comment />
        <ThreadItems />
      </div>
    </div>
  );
};
