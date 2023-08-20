import { API, graphqlOperation } from 'aws-amplify';
import { updateChat } from '@/graphql/mutations';

export const LikeChatAPI = () => {
  const likeChat = async (id: string, likes: number) => {
    const param = {
      input: {
        id: id,
        likes: likes + 1,
      },
    };
    try {
      await API.graphql(graphqlOperation(updateChat, param));
    } catch (err) {
      console.log('error updateChat:', err);
    }
  };

  return likeChat;
};
