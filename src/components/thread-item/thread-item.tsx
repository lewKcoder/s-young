import { FunctionComponent, useEffect, useState } from 'react';
import { Image } from '@/components/image';
import styles from './styles.module.scss';
import { API, graphqlOperation } from 'aws-amplify';
import { listChats } from '@/graphql/queries';

export const ThreadItem: FunctionComponent = () => {
  const [chats, setChat] = useState([]);

  async function getChats() {
    try {
      const chatData = await API.graphql(graphqlOperation(listChats));

      if ('data' in chatData) {
        setChat(chatData.data.listChats.items);
      }
    } catch (err) {
      console.log('error fetching chat:', err);
    }
  }

  useEffect(() => {
    getChats();
  }, []);

  return (
    <div className={`${styles.container} ${chats.length === 0 && styles.has_loading}`}>
      {chats.length > 0 ? (
        <ul className={styles.content}>
          {chats.map(({ id, date, text, userName, likes }) => (
            <li key={id} className={styles.list}>
              <div className={`${styles.image_content} image`} />
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
        <div className={styles.loading}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className={styles.skeleton}>
              <div className={styles.skeleton_image} />
              <div>
                <div className={styles.skeleton_title} />
                <div className={styles.skeleton_text} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
