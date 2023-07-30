import { FunctionComponent } from 'react';
import { Section } from '@/components/section';
import styles from './styles.module.scss';
import data from './data.json';

export const ThreadItem: FunctionComponent = () => {
  const { lists } = data;

  return (
    <Section title={'みんなの反応'}>
      <ul className={styles.container}>
        {lists.map(({ src, alt, comment, date, likes }) => (
          <li key={comment}>
            <div className={styles.image_content}>
              <img src={src} alt={alt} />
            </div>
            <div className={styles.text_content}>
              <span>{date}</span>
              <p>{comment}</p>
            </div>
            <div className={styles.action_content}>
              <img src="/prohibition.png" alt="Prohibition" />
              <div>
                <img src="/like.png" alt="Like" />
                {likes && <span>{likes}</span>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
