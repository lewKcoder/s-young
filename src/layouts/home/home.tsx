import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import { Vote } from '@/components/vote';
import { SiteTitle } from '@/components/site-title';
import { Introduction } from '@/components/introduction';
import styles from './styles.module.scss';

export const Home: FunctionComponent = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Vote />
        <SiteTitle />
        <Introduction />
      </div>
    </>
  );
};
