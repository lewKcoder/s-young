import * as ReactDOM from 'react-dom';
import { FunctionComponent, useEffect, useState } from 'react';
import { Image } from '@/components/image';
import { ThreadSkeltons } from '@/components/thread-skeltons';
import styles from './styles.module.scss';
import { GraphQLSubscription } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';
import { onCreateChat } from '@/graphql/subscriptions';
import { Chat, Report } from './types';
import { OnCreateChatSubscription } from '@/API';
import { Item } from './component/item/item';
import { LikeChatAPI, GetChatsAPI, SendProhibitionAPI } from '@/data';

const Modal: FunctionComponent<
  Report & {
    closeProhibition: () => void;
    sendProhibition: (
      id: string,
      userName: string,
      date: string,
      text: string,
      report: string
    ) => void;
  }
> = (props) => {
  const { id, iconColor, userName, date, text, closeProhibition, sendProhibition } = props;
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [input, setInput] = useState<string>('');
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    setElement(document.querySelector('body')!!);
  }, []);

  if (!element) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.report}>
        {!submited ? (
          <>
            <div className={styles.header}>
              <p className={styles.title}>コメントの報告</p>
              <span className={styles.close_button} onClick={closeProhibition}>
                <Image src="/close.png" alt="close" />
              </span>
            </div>
            <div className={styles.list}>
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
            </div>
            <textarea
              className={styles.report_input}
              rows={5}
              placeholder="報告内容を入力してください。"
              onChange={(e) => setInput(e.target.value)}
            ></textarea>
            <button
              className={styles.report_button}
              onClick={() => {
                sendProhibition(id, userName, date, text, input), setSubmited(true);
              }}
            >
              報告する
            </button>
          </>
        ) : (
          <div>
            <p className={styles.header}>報告しました</p>
            <span className={styles.checkmark}>
              <Image src="/checkmark.png" alt="voteWhite" />
            </span>
            <div className={styles.feedback}>
              <p>ご協力ありがとうございます。報告内容をもとにサービス向上へ努めてまいります。</p>
              <p>引き続き掲示板をお楽しみください。</p>
            </div>
            <button className={styles.submited_button} onClick={closeProhibition}>
              閉じる
            </button>
          </div>
        )}
      </div>
    </>,
    element
  );
};

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
