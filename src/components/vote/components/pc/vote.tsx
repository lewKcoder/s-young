import { FunctionComponent, useEffect } from 'react';
import styles from './styles.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const VotePC: FunctionComponent = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to('#RedCard7', {
        opacity: 0.5,
        top: '1200px',
        borderColor: '#ff5454',
        scrollTrigger: {
          trigger: '#RedCard7',
          start: '+120px 400px',
          end: '+1000px top',
          scrub: true,
        },
      })
      .to('#RedCard7', {
        borderRadius: '50%',
        scale: 0,
        width: 10,
        height: 10,
        borderWidth: 0,
        y: '+300px',
        left: 'calc(50% - 16px)',
        scrollTrigger: {
          trigger: '#RedCard7',
          start: '+1100px 400px',
          end: '+1200px +200px',
          scrub: true,
        },
      })
      .to('#RedCard7', {
        scale: 150,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: '#RedCard7',
          start: '+1400px 400px',
          end: '+1500px top',
          scrub: true,
        },
      });

    gsap.to('#WhiteCard2', {
      top: '1200px',
      ease: 'none',
      scrollTrigger: {
        trigger: '#WhiteCard2',
        scrub: true,
        start: '+110px center',
        end: '+400px top',
      },
    });
  }, []);

  return (
    <div className={styles.container}>
      <img src="/vote-hand.svg" alt="Vote" className={styles.vote} />

      <div id="RedCard7" className={styles.red_card} />

      <div className={styles.white_card}>
        <img
          id="WhiteCard2"
          src="/white-card.svg"
          alt="WhiteCard"
          className={styles.white_card_image}
        />
      </div>

      <div className={styles.bar} />
    </div>
  );
};
