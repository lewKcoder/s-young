import { FunctionComponent } from 'react';

type Props = {
  content: { src: string; alt: string; width?: string; height?: string };
};

export type Component = FunctionComponent<Props>;
