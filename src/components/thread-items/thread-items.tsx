import { FunctionComponent, useEffect, useState } from 'react';
import { ThreadSkeltons } from '@/components/thread-skeltons';
import styles from './styles.module.scss';
import { GraphQLSubscription } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';
import { onCreateChat } from '@/graphql/subscriptions';
import { Chat, Report } from './types';
import { OnCreateChatSubscription } from '@/API';
import { Item, Modal } from './component';
import { LikeChatAPI, GetChatsAPI, SendProhibitionAPI } from '@/data';

export const ThreadItems: FunctionComponent = () => {
  const [chats, setChat] = useState<Chat | []>([]);
  const [prohibition, setProhibition] = useState(false);
  const [report, setReport] = useState<Report | null>(null);

  const likeChat = LikeChatAPI();
  const getChats = GetChatsAPI();
  const sendProhibition = SendProhibitionAPI();

  useEffect(() => {
    const fetchChats = async () => {
      const chats = await getChats();
      setChat(chats);
    };

    fetchChats();

    const createChat = API.graphql<GraphQLSubscription<OnCreateChatSubscription>>(
      graphqlOperation(onCreateChat)
    );

    const createChatSubscription = createChat.subscribe({
      next: ({ value }) => {
        const newChat: any = value.data?.onCreateChat;
        setChat((prevChat) => [...prevChat, newChat]);
      },
      error: (error) => console.warn(error),
    });

    return () => {
      createChatSubscription.unsubscribe();
    };
  }, []);

  const reportProhibition = (args: Report) => {
    setProhibition(true);
    setReport(args);
  };

  const closeProhibition = () => {
    setProhibition(false);
    setReport(null);
  };

  return (
    <div className={`${styles.container} ${chats.length === 0 && styles.has_loading}`}>
      {chats.length > 0 ? (
        <>
          <ul className={styles.content}>
            {chats.map(({ id, iconColor, userName, date, text, likes }) => (
              <Item
                key={id}
                id={id}
                iconColor={iconColor}
                userName={userName}
                date={date}
                text={text}
                likes={likes}
                reportProhibition={reportProhibition}
                likeChat={likeChat}
              />
            ))}
          </ul>
          {report && prohibition && (
            <Modal
              id={report.id}
              iconColor={report.iconColor}
              userName={report.userName}
              date={report.date}
              text={report.text}
              closeProhibition={closeProhibition}
              sendProhibition={sendProhibition}
            />
          )}
        </>
      ) : (
        <ThreadSkeltons />
      )}
    </div>
  );
};
