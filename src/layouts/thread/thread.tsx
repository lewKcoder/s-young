import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import { Comment } from '@/components/comment';
import { ThreadItem } from '@/components/thread-item';
import styles from './styles.module.scss';

export const Thread: FunctionComponent = () => {
  return (
    <>
      <Header hasBlur />
      <div className={styles.container}>
        <Comment />
        <ThreadItem />
      </div>
    </>
  );
};
