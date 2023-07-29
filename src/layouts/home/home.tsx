import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import { Introduction } from '@/components/introduction';

export const Home: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Introduction />
    </>
  );
};
