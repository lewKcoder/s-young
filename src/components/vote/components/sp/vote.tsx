import { FunctionComponent, useEffect } from 'react';
import styles from './styles.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const VoteSP: FunctionComponent = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to('#RedCard5', {
        opacity: 0.5,
        top: '1000px',
        borderColor: '#ff5454',
        scrollTrigger: {
          trigger: '#RedCard5',
          start: '+220px 50%',
          end: '+1000px top',
          scrub: true,
        },
      })
      .to('#RedCard5', {
        borderRadius: '50%',
        scale: 0,
        width: 10,
        height: 10,
        borderWidth: 0,
        y: '+300px',
        left: 'calc(50% - 16px)',
        scrollTrigger: {
          trigger: '#RedCard5',
          start: '+1000px 50%',
          end: '+1400px +200px',
          scrub: true,
        },
      })
      .to('#RedCard5', {
        scale: 150,
        autoAlpha: 0,
        y: '+700px',
        scrollTrigger: {
          trigger: '#RedCard5',
          start: '+1600px 50%',
          end: '+1800px top',
          scrub: true,
        },
      });
  }, []);

  return (
    <div className={styles.container}>
      <img src="/vote-hand.svg" alt="Vote" className={styles.vote} />

      <div id="RedCard5" className={styles.red_card} />

      <div className={styles.bar} />
    </div>
  );
};
