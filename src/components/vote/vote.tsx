import { FunctionComponent } from 'react';
import { VoteSP, VotePC } from './components';
import styles from './styles.module.scss';

export const Vote: FunctionComponent = () => {
  return (
    <>
      <div className={styles.container_p}>
        <VotePC />
      </div>
      <div className={styles.container_s}>
        <VoteSP />
      </div>
    </>
  );
};
