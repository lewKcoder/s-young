import { GraphQLError } from 'graphql';
import { FunctionComponent, useEffect, useState } from 'react';
import { Image } from '@/components/image';
import styles from './styles.module.scss';
import { API, graphqlOperation } from 'aws-amplify';
import { getAllChats } from '@/graphql/queries';

type Chat = {
  createdAt: string;
  date: string;
  id: string;
  likes: number;
  prohibitions: number;
  text: string;
  updatedAt: string;
  user: {
    icon: string;
  };
  userId: string;
  __typename: string;
};

export const ThreadItem: FunctionComponent = () => {
  const [chats, setChat] = useState<Chat[] | []>([]);

  async function getChats() {
    try {
      const chatData = await API.graphql(graphqlOperation(getAllChats));

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
    <div className={styles.container}>
      <ul className={styles.content}>
        {chats.map(({ id, date, text, likes }) => (
          <li key={id} className={styles.list}>
            <div className={`${styles.image_content} image`} />
            <div>
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

            {/* {user.icon && (
              <style jsx>
                {`
                  .image {
                    background-image: url(${user.icon});
                  }
                `}
              </style>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};
