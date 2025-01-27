import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/home.css";
import "@/styles/contact.css";
import "@/styles/experience.css";
import "@/styles/projects.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
