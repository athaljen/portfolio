import React from 'react'

import Head from 'next/head'

import Header from '@/src/components/main/Header'
import About from '@/src/sections/About'
import ContactMe from '@/src/sections/ContactMe'
import Experience from '@/src/sections/Experience'
import Home from '@/src/sections/Home'
import Projects from '@/src/sections/Projects'

export default function App() {
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
      <Header />
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
