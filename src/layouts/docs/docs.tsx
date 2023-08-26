import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import styles from './styles.module.scss';

export const Docs: FunctionComponent = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>docs</div>
    </>
  );
};
