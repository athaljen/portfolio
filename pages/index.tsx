import React, { useEffect } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import About from '@/src/sections/About'
import ContactMe from '@/src/sections/ContactMe'
import Experience from '@/src/sections/Experience'
import Home from '@/src/sections/Home'
import Projects from '@/src/sections/Projects'

export default function App() {
  function toggleMenu(event: React.MouseEvent<HTMLDivElement>) {
    const menuIcon = event.currentTarget
    menuIcon.classList.toggle('active')

    const navLinks = document.querySelectorAll('.nav-dropdown-a')
    navLinks.forEach((link) => {
      link.classList.toggle('show')
    })
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const headerLinks = document.querySelectorAll('.nav-links')
    const dropdownLinks = document.querySelectorAll('.nav-dropdown-a')

    function hideDropdownLinks() {
      const menuIcon = document.querySelector('.menu-icon')
      const nav = document.getElementById('nav-menu')

      menuIcon?.classList.remove('active')
      nav?.classList.remove('show')

      dropdownLinks.forEach((link) => {
        link.classList.remove('show')
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headerLinks.forEach((link) => link.classList.remove('active'))
            dropdownLinks.forEach((link) => link.classList.remove('active'))

            const activeHeaderLink = document.querySelector(
              `header nav .nav-links[href="#${entry.target.id}"]`,
            )
            if (activeHeaderLink) {
              activeHeaderLink.classList.add('active')
            }

            const activeDropdownLink = document.querySelector(
              `.nav-dropdown .nav-links[href="#${entry.target.id}"]`,
            )
            if (activeDropdownLink) {
              activeDropdownLink.classList.add('active')
            }
          }
        })
      },
      {
        threshold: [0.1, 0.5, 1.0],
        rootMargin: '0px 0px -50% 0px',
      },
    )

    // Observe each section
    sections.forEach((section) => observer.observe(section))

    dropdownLinks.forEach((link) => {
      link.addEventListener('click', hideDropdownLinks)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Bisworanjann Jena</title>
        <meta
          name="description"
          content="Hi, I am Bissoranjan Jena, a Frontend Developer."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="header-container">
          <Link className="logo" href="/">
            <span>J</span>en
          </Link>
          <nav>
            <a className="nav-links" href="#home">
              Home
            </a>
            <a className="nav-links" href="#about">
              About
            </a>
            <a className="nav-links" href="#experience">
              Work
            </a>
            <a className="nav-links" href="#projects">
              Projects
            </a>
            <a className="nav-links" href="#contact">
              Contact
            </a>
          </nav>
          <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <div className="nav-dropdown" id="nav-menu">
        <a className="nav-links nav-dropdown-a nd-a5" href="#home">
          Home
        </a>
        <a className="nav-links nav-dropdown-a nd-a3" href="#about">
          About
        </a>
        <a className="nav-links nav-dropdown-a nd-a1" href="#experience">
          Work
        </a>
        <a className="nav-links nav-dropdown-a nd-a2" href="#projects">
          Projects
        </a>
        <a className="nav-links nav-dropdown-a nd-a4" href="#contact">
          Contact
        </a>
      </div>
      <main className="safe-container">
        <Home />
        <About />
        <Experience />
        <Projects />
        <ContactMe />
      </main>
    </>
  )
}
