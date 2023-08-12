import { FunctionComponent, useEffect, useState } from 'react';
import { Image } from '@/components/image';
import { ThreadSkeltons } from '@/components/thread-skeltons';
import styles from './styles.module.scss';
import { API, graphqlOperation } from 'aws-amplify';
import { listChats } from '@/graphql/queries';
import { createProhibition } from '@/graphql/mutations';

type Chat = {
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

export const ThreadItem: FunctionComponent = () => {
  const [chats, setChat] = useState<Chat | []>([]);

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {
    try {
      const chatData = await API.graphql(graphqlOperation(listChats));

      if ('data' in chatData) {
        setChat(chatData.data.listChats.items);
      }
    } catch (err) {
      console.log('error fetching chat:', err);
    }
  };

  const sendProhibition = async (id: string, userName: string, date: string, text: string) => {
    const param = {
      input: {
        id: id,
        userName: userName,
        text: text,
        date: new Date(date).toISOString(),
        report: 'テスト',
      },
    };

    try {
      await API.graphql(graphqlOperation(createProhibition, param));
    } catch (err) {
      console.log('error createProhibition:', err);
    }
  };

  return (
    <div className={`${styles.container} ${chats.length === 0 && styles.has_loading}`}>
      {chats.length > 0 ? (
        <ul className={styles.content}>
          {chats.map(({ id, iconColor, userName, date, text, likes }) => (
            <li key={id} className={styles.list}>
              <div
                className={styles.user_icon}
                style={{
                  background: `${
                    iconColor.length > 0
                      ? iconColor
                      : 'linear-gradient(40deg, rgb(23, 51, 2), rgb(95 95 95), rgb(17, 38, 70))'
                  }`,
                }}
              >
                <span className={styles.vote}>
                  <Image src="/vote-white.svg" alt="voteWhite" />
                </span>
              </div>
              <div>
                <span className={styles.user}>{userName}</span>
                <span className={styles.date}>{date}</span>
                <p className={styles.comment}>{text}</p>
              </div>
              <div className={styles.action_content}>
                <span
                  className={styles.icon}
                  onClick={() => sendProhibition(id, userName, date, text)}
                >
                  <Image src="/prohibition.png" alt="Prohibition" />
                </span>

                <div className={styles.like}>
                  {likes && <span>{likes}</span>}
                  <span className={styles.icon}>
                    <Image src="/like.png" alt="Like" />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ThreadSkeltons />
      )}
    </div>
  );
};
