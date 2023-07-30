import { FunctionComponent } from 'react';
import { Image } from '@/components/image';
import styles from './styles.module.scss';
import data from './data.json';

export const ThreadItem: FunctionComponent = () => {
  const { lists } = data;

  return (
    <div className={styles.container}>
      <ul>
        {lists.map(({ src, comment, date, likes }) => (
          <li key={comment} className={styles.content}>
            <div className={`${styles.image_content} image`} />
            <div>
              <span className={styles.date}>{date}</span>
              <p className={styles.comment}>{comment}</p>
            </div>
            <div className={styles.action_content}>
              <span className={styles.icon}>
                <Image src="/prohibition.png" alt="Prohibition" />
              </span>
              <div className={styles.like}>
                <span className={styles.icon}>
                  <Image src="/like.png" alt="Like" />
                </span>
                {likes > 0 && <span>{likes}</span>}
              </div>
            </div>

            <style jsx>
              {`
                .image {
                  background-image: url(${src});
                }
              `}
            </style>
          </li>
        ))}
      </ul>
    </div>
  );
};
