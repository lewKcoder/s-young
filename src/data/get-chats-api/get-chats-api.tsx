import { API, graphqlOperation } from 'aws-amplify';
import { listChats } from '@/graphql/queries';

export const GetChatsAPI = () => {
  const getChats = async () => {
    try {
      const chatData = await API.graphql(graphqlOperation(listChats));

      if ('data' in chatData) {
        return chatData.data.listChats.items;
      }
    } catch (err) {
      console.log('error fetching chat:', err);
    }
  };

  return getChats;
};
