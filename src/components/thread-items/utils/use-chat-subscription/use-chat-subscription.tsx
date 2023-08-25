import { useEffect } from 'react';
import { GraphQLSubscription } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';
import { onCreateChat } from '@/graphql/subscriptions';
import { OnCreateChatSubscription } from '@/API';
import { Chat } from './types';

export const useChatSubscription = (onNewChat: (chat: Chat) => void) => {
  useEffect(() => {
    const createChatSubscription = API.graphql<GraphQLSubscription<OnCreateChatSubscription>>(
      graphqlOperation(onCreateChat)
    ).subscribe({
      next: ({ value }) => {
        const newChat: any = value.data?.onCreateChat;
        onNewChat(newChat);
      },
      error: (error) => console.error('Error with chat subscription:', error),
    });

    return () => {
      createChatSubscription.unsubscribe();
    };
  }, [onNewChat]);
};
