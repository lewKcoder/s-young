import { FunctionComponent } from 'react';

export type Props = {
  articles: {
    htmlType: string;
    content: string;
  }[];
};

export type Component = FunctionComponent<Props>;
