import Link from 'next/link'

import { PERSONAL_LINKS } from '@/constants'

import DevAnimation from '../main/DevAnimation'
import HomeChangingText from '../main/HomeChangingText'

export default function Home() {
  return (
    <section id="home" className="flex flex-col md:flex-row min-h-screen">
      <div className="position-absolute inset-0 overflow-hidden">
        <div className="home-bg-mask">
          <div className="home-bg-dots"></div>
        </div>
      </div>
      <div className="flex-1 place-content-center">
        <h1 className="text-3xl font-bold">Hi! I&apos;m Bisworanjan Jena</h1>
        <h2 className="text-xl font-semibold">
          And I&apos;m a <span className="text-primary">Software Engineer</span>
        </h2>
        <HomeChangingText />
        <p className="text-lg mt-4">
          I design and develop high-performance mobile and web applications that
          scale. Passionate about clean architecture, real-time systems, and
          crafting seamless user experiences.
        </p>
        <div className="flex gap-6 mt-6">
          <a href={PERSONAL_LINKS.hireMe} className="primary-btn">
            Hire Me
          </a>
          <Link href={'/resume'} className="primary-btn">
            Resume
          </Link>
        </div>
        <div className="flex gap-4 mt-8">
          <a
            href={PERSONAL_LINKS.phone}
            target="_blank"
            className="link-icon-btn"
          >
            <i className="fa-solid fa-phone"></i>
          </a>
          <a
            href={PERSONAL_LINKS.email}
            target="_blank"
            className="link-icon-btn"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href={PERSONAL_LINKS.linkedin}
            target="_blank"
            className="link-icon-btn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href={PERSONAL_LINKS.github}
            target="_blank"
            className="link-icon-btn"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-1 items-center relative p-4 ">
        <DevAnimation />
      </div>
    </section>
  )
}
