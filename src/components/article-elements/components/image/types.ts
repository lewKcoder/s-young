import { FunctionComponent } from 'react';

type Props = {
  content: { src: string; alt: string };
};

export type Component = FunctionComponent<Props>;
