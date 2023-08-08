import { FunctionComponent, useEffect, useState } from 'react';
import { Image } from '@/components/image';
import { ThreadSkeltons } from '@/components/thread-skeltons';
import styles from './styles.module.scss';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { listChats } from '@/graphql/queries';

export const ThreadItem: FunctionComponent = () => {
  const [chats, setChat] = useState([]);

  useEffect(() => {
    getChats();
  }, []);

  async function getChats() {
    try {
      const chatData = await API.graphql(graphqlOperation(listChats));

      if ('data' in chatData) {
        console.log(chatData.data.listChats.items);
        setChat(chatData.data.listChats.items);
      }
    } catch (err) {
      console.log('error fetching chat:', err);
    }
  }

  return (
    <div className={`${styles.container} ${chats.length === 0 && styles.has_loading}`}>
      {chats.length > 0 ? (
        <ul className={styles.content}>
          {chats.map(({ id, date, text, userName, likes, iconColor }) => (
            <li key={id} className={styles.list}>
              <div className={styles.user_icon} style={{ background: `${iconColor}` }}>
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
                <span className={styles.icon}>
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
