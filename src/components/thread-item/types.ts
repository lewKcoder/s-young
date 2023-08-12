export type Chat = {
  id: string;
  userId: string;
  chatId: string;
  userName: string;
  iconColor: string;
  text: string;
  date: string;
  likes: number;
  prohibition: boolean;
}[];

export type Report = {
  iconColor: string;
  userName: string;
  date: string;
  text: string;
};
