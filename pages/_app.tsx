import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import '@/styles/home.css'
import '@/styles/contact.css'
import '@/styles/experience.css'
import '@/styles/projects.css'
import '@/styles/about.css'
// import "@/styles/resume.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
