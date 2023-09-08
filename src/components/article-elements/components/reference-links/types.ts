import { FunctionComponent } from 'react';

type Props = {
  content: { label: string; href: string }[];
};

export type Component = FunctionComponent<Props>;
