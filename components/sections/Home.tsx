import { PERSONAL_LINKS } from '@/constants'

import styles from './home.module.css'
import DevAnimation from '../main/DevAnimation'
import HomeChangingText from '../main/HomeChangingText'

export default function Home() {
  return (
    <section id="home" className={styles['home-container']}>
      <div className={styles['home-bg']}>
        <div className={styles['home-bg-mask']}>
          <div className={styles['home-bg-dots']}></div>
        </div>
      </div>
      <div className={styles['home-left']}>
        <h1>Hi! I&apos;m Bisworanjan Jena</h1>
        <h2>
          And I&apos;m a{' '}
          <span className={styles['text-primary']}>Software Engineer</span>
        </h2>
        <HomeChangingText />
        <p className={styles['home-desc']}>
          I design and develop high-performance mobile and web applications that
          scale. Passionate about clean architecture, real-time systems, and
          crafting seamless user experiences.
        </p>
        <div className={styles['home-btns']}>
          <a href={PERSONAL_LINKS.hireMe}>Hire Me</a>
          <a href={PERSONAL_LINKS.resume} download="Bisworanjan_Jena.pdf">
            Download CV
          </a>
        </div>
        <div className={styles['social-icons-container']}>
          <a
            href={PERSONAL_LINKS.phone}
            target="_blank"
            className={styles['social-icon']}
          >
            <i className={styles['fa-solid fa-phone']}></i>
          </a>
          <a
            href={PERSONAL_LINKS.email}
            target="_blank"
            className={styles['social-icon']}
          >
            <i className={styles['fa-solid fa-envelope']}></i>
          </a>
          <a
            href={PERSONAL_LINKS.linkedin}
            target="_blank"
            className={styles['social-icon']}
          >
            <i className={styles['fa-brands fa-linkedin-in']}></i>
          </a>
          <a
            href={PERSONAL_LINKS.github}
            target="_blank"
            className={styles['social-icon']}
          >
            <i className={styles['fa-brands fa-github']}></i>
          </a>
        </div>
      </div>
      <div className={styles['home-right']}>
        <DevAnimation />
      </div>
    </section>
  )
}
