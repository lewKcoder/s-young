import { FunctionComponent, useEffect } from 'react';
import styles from './styles.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Vote: FunctionComponent = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#RedCard',
        start: '+120px center',
        end: '+1000px top',
        scrub: true,
      },
    });

    timeline
      .to('#RedCard', {
        opacity: 0.5,
        top: 'calc(50% - -400px)',
        borderColor: '#ff5454',
      })
      .to('#RedCard', {
        borderRadius: '50%',
        scale: 0,
        width: 10,
        height: 10,
        top: 'calc(50% - -420px)',
        left: 'calc(50% - 37px)',
      })
      .to('#RedCard', {
        scale: 50,
        opacity: 0,
        display: 'none',
      });

    gsap.to('#WhiteCard', {
      top: 'calc(50% - -863px)',
      ease: 'none',
      scrollTrigger: {
        trigger: '#WhiteCard',
        scrub: true,
        start: '+115px center',
        end: '+40px top',
      },
    });
  }, []);

  return (
    <div className={styles.container}>
      <img src="/vote-hand.svg" alt="Vote" className={styles.vote} />

      <div id="RedCard" className={styles.red_card} />

      <div className={styles.white_card}>
        <img
          id="WhiteCard"
          src="/white-card.svg"
          alt="WhiteCard"
          className={styles.white_card_image}
        />
      </div>

      <div className={styles.bar} />
    </div>
  );
};
