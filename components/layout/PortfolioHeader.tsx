'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo, useCallback, useEffect } from 'react'

import './portfolioHeader.css'

const navLinks = [
  {
    name: 'Home',
    href: '/#home',
    dropdownClass: 'nav-links backdrop-blur-md nav-dropdown-a nd-a5',
  },
  {
    name: 'About',
    href: '/#about',
    dropdownClass: 'nav-links backdrop-blur-md nav-dropdown-a nd-a3',
  },
  {
    name: 'Work',
    href: '/#experience',
    dropdownClass: 'nav-links backdrop-blur-md nav-dropdown-a nd-a1',
  },
  {
    name: 'Projects',
    href: '/#projects',
    dropdownClass: 'nav-links backdrop-blur-md nav-dropdown-a nd-a2',
  },
  {
    name: 'Contact',
    href: '/#contact',
    dropdownClass: 'nav-links backdrop-blur-md nav-dropdown-a nd-a4',
  },
]

function PortfolioHeader() {
  const pathname = usePathname()

  const toggleMenu = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const menuIcon = event.currentTarget
    menuIcon.classList.toggle('active')

    const navLinks = document.querySelectorAll('.nav-dropdown-a')
    navLinks.forEach((link) => {
      link.classList.toggle('show')
    })
  }, [])

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
              `header nav .nav-links[href="/#${entry.target.id}"]`,
            )
            if (activeHeaderLink) {
              activeHeaderLink.classList.add('active')
            }

            const activeDropdownLink = document.querySelector(
              `.nav-dropdown .nav-links[href="/#${entry.target.id}"]`,
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
      dropdownLinks.forEach((link) => {
        link.removeEventListener('click', hideDropdownLinks)
      })
    }
  }, [pathname])

  return (
    <>
      <header className="portfolio-header">
        <div className="header-container backdrop-blur-xl">
          <Link className="logo" href="/#home">
            <span>J</span>en
          </Link>
          <nav className="portfolio-nav">
            {navLinks.map((link) => (
              <Link key={link.name} className="nav-links" href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <div className="nav-dropdown" id="nav-menu">
        {navLinks.map((link) => (
          <Link key={link.name} className={link.dropdownClass} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  )
}

export default memo(PortfolioHeader)
