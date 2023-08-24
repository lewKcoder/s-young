import { API, graphqlOperation } from 'aws-amplify';
import { listChats } from '@/graphql/queries';
import { Chat } from './types';

export const GetChatsAPI = () => {
  const getChats = async () => {
    try {
      const chatData = await API.graphql(graphqlOperation(listChats));

      if ('data' in chatData) {
        const chats = chatData.data.listChats.items;

        chats.sort((a: Chat, b: Chat) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA.getTime() - dateB.getTime();
        });

        if (chats.length === 0) {
          return [];
        }

        return chats;
      }
    } catch (err) {
      console.log('error fetching chat:', err);
    }
  };

  return getChats;
};
