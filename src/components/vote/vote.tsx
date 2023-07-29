import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

export const Vote: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <img src="/vote-hand.svg" alt="Vote" className={styles.vote} />

      <img src="/red-card.svg" alt="RedCard" className={styles.red_card} />

      <div className={styles.white_card}>
        <img src="/white-card.svg" alt="WhiteCard" className={styles.image} />
      </div>

      <div className={styles.bar} />

      <div className={styles.circle} />
    </div>
  );
};
