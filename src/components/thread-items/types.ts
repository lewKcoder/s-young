import { FunctionComponent } from 'react';

export type Chats = {
  id: string;
  userId?: string;
  chatId: string;
  userName: string;
  iconColor: string;
  text: string;
  date: string;
  likes: number;
  prohibition: boolean;
}[];

export type Report = {
  id: string;
  iconColor: string;
  userName: string;
  date: string;
  text: string;
};

export type Component = FunctionComponent;
