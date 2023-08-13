import { FunctionComponent } from 'react';

type Props = {
  id: string;
  iconColor: string;
  userName: string;
  date: string;
  text: string;
  likes: number;
  reportProhibition: (args: any) => void;
  likeChat: (id: string, likes: number) => void;
};

export type Component = FunctionComponent<Props>;
