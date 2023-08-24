import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listChats } from '@/graphql/queries';
import { Chat } from './types';

export const useFetchChats = (): Chat[] => {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const chatData: any = await API.graphql(graphqlOperation(listChats));
        const fetchedChats: Chat[] = chatData.data.listChats.items || [];

        setChats(
          fetchedChats.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        );
      } catch (err) {
        console.error('Error fetching chat:', err);
      }
    };

    fetchChats();
  }, []);

  return chats;
};
