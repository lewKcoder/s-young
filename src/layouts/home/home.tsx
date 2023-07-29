import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import { Vote } from '@/components/vote';
import { SiteTitle } from '@/components/site-title';
import { Introduction } from '@/components/introduction';

export const Home: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Vote />
      <SiteTitle />
      <Introduction />
    </>
  );
};
