import Contact from "@/src/sections/Contact";
import Experience from "@/src/sections/Experience";
import Home from "@/src/sections/Home";
import Projects from "@/src/sections/Projects";
import Head from "next/head";
import { useEffect } from "react";

export default function App() {
  function toggleMenu(event: React.MouseEvent<HTMLDivElement>) {
    const menuIcon = event.currentTarget;
    menuIcon.classList.toggle("active");
    const nav = document.getElementById("nav-menu");
    nav?.classList.toggle("show");
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const headerLinks = document.querySelectorAll("header nav .nav-links");
    const dropdownLinks = document.querySelectorAll(".nav-dropdown .nav-links");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headerLinks.forEach((link) => link.classList.remove("active"));
            dropdownLinks.forEach((link) => link.classList.remove("active"));
            console.log(entry.target.id);

            const activeHeaderLink = document.querySelector(
              `header nav .nav-links[href="#${entry.target.id}"]`
            );
            if (activeHeaderLink) activeHeaderLink.classList.add("active");

            const activeDropdownLink = document.querySelector(
              `.nav-dropdown .nav-links[href="#${entry.target.id}"]`
            );
            if (activeDropdownLink) activeDropdownLink.classList.add("active");
          }
        });
      },
      {
        threshold: [0.2, 0.6, 1.0],
        rootMargin: "0px 0px -50% 0px",
      }
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    dropdownLinks.forEach((link) => {
      let menuIcon = document.querySelector(".menu-icon");
      link.addEventListener("click", () => {
        const nav = document.getElementById("nav-menu");
        nav?.classList.remove("show");
        menuIcon?.classList?.remove("active");
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
        <a className="logo" href="/">
          <span>J</span>en.
        </a>
        <nav>
          <a className="nav-links" href="#home">
            Home
          </a>
          <a className="nav-links" href="#experience">
            Experience
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
      </header>
      <div className="nav-dropdown" id="nav-menu">
        <a className="nav-links" href="#home">
          Home
        </a>
        <a className="nav-links" href="#experience">
          Experience
        </a>
        <a className="nav-links" href="#projects">
          Projects
        </a>
        <a className="nav-links" href="#contact">
          Contact
        </a>
      </div>
      <main>
        <Home />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
