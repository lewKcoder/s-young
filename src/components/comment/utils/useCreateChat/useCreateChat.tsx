import { useState } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { disabledStore, commentValueStore } from '../../store';
import { API, graphqlOperation } from 'aws-amplify';
import { createChat as createChatImported } from '@/graphql/mutations';
import { userStore } from '@/stores/user';

export const useCreateChat = () => {
  const [errorMessage, setErrorMessage] = useState('投稿できない内容が含まれています。');

  const setDisabled = useSetAtom(disabledStore);
  const setCommentValue = useSetAtom(commentValueStore);
  const user = useAtomValue(userStore);

  const createChat = async (
    e: React.MouseEvent<HTMLButtonElement>,
    refElement: string | undefined
  ) => {
    e.preventDefault();

    function getFullDate(date: Date) {
      const components = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ];

      return (
        components
          .slice(0, 3)
          .map((n) => n.toString().padStart(2, '0'))
          .join('-') +
        ' ' +
        components
          .slice(3)
          .map((n) => n.toString().padStart(2, '0'))
          .join(':')
      );
    }

    const param = {
      input: {
        chatId: Math.floor(Math.random() * 10000),
        userId: user.attributes.sub,
        userName: user.username,
        iconColor: user.attributes.profile,
        text: refElement,
        date: getFullDate(new Date()),
        likes: 0,
        prohibition: 0,
      },
    };

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
