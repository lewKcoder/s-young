import { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import data from './data.json';

export const Introduction: FunctionComponent = () => {
  const { texts } = data;

  return (
    <div className={styles.container}>
      {texts.map((text, i) => (
        <p key={i} className={styles.text}>
          {text}
        </p>
      ))}
    </div>
  );
};
