import { useRef, useState } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { disabledStore, commentValueStore } from '../../store';
import { API, graphqlOperation } from 'aws-amplify';
import { createChat as createChatImported } from '@/graphql/mutations';
import { userNameStore } from '@/stores/user-name';

export const useCreateChat = () => {
  const [errorMessage, setErrorMessage] = useState('投稿できない内容が含まれています。');

  const setDisabled = useSetAtom(disabledStore);
  const setCommentValue = useSetAtom(commentValueStore);
  const userName = useAtomValue(userNameStore);

  const createChat = async (
    e: React.MouseEvent<HTMLButtonElement>,
    refElement: string | undefined
  ) => {
    e.preventDefault();

    const getFullDate = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate() + 1;
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      return `${year}/${month}/${day} ${hours}:${minutes}`;
    };

    const param = {
      input: {
        id: Math.floor(Math.random() * 100),
        chatId: Math.floor(Math.random() * 100),
        userName: userName,
        text: refElement,
        date: getFullDate(),
        likes: 0,
        prohibition: 0,
      },
    };
    console.log(param);

    try {
      await API.graphql(graphqlOperation(createChatImported, param));

      setCommentValue('');
      setDisabled(true);
    } catch (err) {
      console.log('error creating chat:', err);
      setErrorMessage(
        'エラーによりチャットを投稿できませんでした。しばらく時間をおいて再度お試しください。'
      );
    }
  };

  return createChat;
};
