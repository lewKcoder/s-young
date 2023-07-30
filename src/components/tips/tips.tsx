import { FunctionComponent } from 'react';
import { Section } from '@/components/section';
import styles from './styles.module.scss';
import data from './data.json';

export const Tips: FunctionComponent = () => {
  const { links } = data;

  return (
    <Section title={'もっと楽しく'}>
      <ul className={styles.lists}>
        {links.map(({ link }) => (
          <li key={link.label} className={styles.list}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
