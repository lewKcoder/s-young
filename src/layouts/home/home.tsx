import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import { SiteTitle } from '@/components/site-title';
import { Introduction } from '@/components/introduction';

export const Home: FunctionComponent = () => {
  return (
    <>
      <Header />
      <SiteTitle />
      <Introduction />
    </>
  );
};
