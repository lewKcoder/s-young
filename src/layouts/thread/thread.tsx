import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import { Tips } from '@/components/tips';
import { ThreadItem } from '@/components/thread-item';
import styles from './styles.module.scss';

export const Thread: FunctionComponent = () => {
  return (
    <>
      <Header hasBlur />
      <div className={styles.container}>
        <Tips />
        <ThreadItem />
      </div>
    </>
  );
};
