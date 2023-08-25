import { useEffect, useState } from 'react';
import { ThreadSkeltons } from '@/components/thread-skeltons';
import styles from './styles.module.scss';
import { Chats, Report, Component } from './types';
import { Item, Modal } from './component';
import { useChatSubscription, useFetchChats, LikeChatAPI, SendProhibitionAPI } from './utils';

export const ThreadItems: Component = () => {
  const [chats, setChats] = useState<Chats | []>([]);
  const [prohibition, setProhibition] = useState(false);
  const [report, setReport] = useState<Report | null>(null);

  const fetchedChats = useFetchChats();
  const likeChat = LikeChatAPI();
  const sendProhibition = SendProhibitionAPI();

  useEffect(() => {
    setChats(fetchedChats);
  }, [fetchedChats]);

  useChatSubscription((newChat) => {
    setChats((prevChats) => [...prevChats, newChat]);
  });

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
            {chats.map((chat) => (
              <Item
                key={chat.id}
                {...chat}
                reportProhibition={reportProhibition}
                likeChat={likeChat}
              />
            ))}
          </ul>
          {report && prohibition && (
            <Modal
              {...report}
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
