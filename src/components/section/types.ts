import { FunctionComponent, ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactElement;
  title: string;
};

export type Component = FunctionComponent<Props>;
