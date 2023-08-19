import { Image } from '@/components/image';
import styles from './styles.module.scss';
import { Component } from './types';
import { useState } from 'react';

export const Item: Component = (props) => {
  const { id, iconColor, userName, date, text, likes: _likes, reportProhibition, likeChat } = props;

  const [likes, setLikes] = useState(_likes);

  return (
    <li className={styles.list}>
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
          <Image src="/site-icon-white.svg" alt="voteWhite" />
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
          onClick={() => reportProhibition({ id, iconColor, userName, date, text })}
        >
          <Image src="/prohibition.png" alt="Prohibition" />
        </span>

        <div className={styles.like}>
          {likes && <span>{likes}</span>}
          <span
            className={styles.icon}
            onClick={() => {
              likeChat(id, likes), setLikes((prev) => prev + 1);
            }}
          >
            <Image src="/like.png" alt="Like" />
          </span>
        </div>
      </div>
    </li>
  );
};
