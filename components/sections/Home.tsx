import Link from 'next/link'

import {
  EnvelopeSvg,
  GithubSvg,
  LinkedInSvg,
  PhoneSvg,
} from '@/assets/text-svg-icons'
import { PERSONAL_LINKS } from '@/constants'

import DevAnimation from '../main/DevAnimation'
import HomeChangingText from '../main/HomeChangingText'
import RevealX from '../ui/RevealX'

export default function Home() {
  return (
    <section id="home" className="min-h-screen h-screen pt-20 px-5">
      <div className="home-bg-mask">
        <div className="home-bg-dots"></div>
      </div>

      <RevealX className="flex flex-col md:flex-row h-full">
        <div className="flex-1 place-content-center">
          <h1 className="text-3xl font-bold">Hi! I&apos;m Bisworanjan Jena</h1>
          <h2 className="text-xl font-semibold">
            And I&apos;m a{' '}
            <span className="text-primary">Software Engineer</span>
          </h2>
          <HomeChangingText />
          <p className="text-lg mt-4">
            I design and develop high-performance mobile and web applications
            that scale. Passionate about clean architecture, real-time systems,
            and crafting seamless user experiences.
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
              <PhoneSvg className="w-5 h-5" fill="currentColor" />
            </a>
            <a
              href={PERSONAL_LINKS.email}
              target="_blank"
              className="link-icon-btn"
            >
              <EnvelopeSvg className="w-5 h-5" fill="currentColor" />
            </a>
            <a
              href={PERSONAL_LINKS.linkedin}
              target="_blank"
              className="link-icon-btn"
            >
              <LinkedInSvg className="w-5 h-5" fill="currentColor" />
            </a>
            <a
              href={PERSONAL_LINKS.github}
              target="_blank"
              className="link-icon-btn"
            >
              <GithubSvg className="w-5 h-5" fill="currentColor" />
            </a>
          </div>
        </div>
        <div className="flex flex-1 items-center relative p-4 ">
          <DevAnimation />
        </div>
      </RevealX>
    </section>
  )
}
