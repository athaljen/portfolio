import Image from "next/image";
import HomeChangingText from "../components/HomeChangingText";

export default function Home() {
  return (
    <section id="home">
      <div>
        <h1>Hi! I'm Bisworanjan Jena</h1>
        <h2>
          And I'm a <span className="text-primary">Software Engineer</span>
        </h2>
        <HomeChangingText />
        <p>
          I design and develop high-performance mobile and web applications that
          scale. Passionate about clean architecture, real-time systems, and
          crafting seamless user experiences.
        </p>
        <div className="home-btns">
          <a href="mailto:bisworanjanjena23@gmail.com">Hire Me</a>
          <a href="#">Download CV</a>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/bisworanjan-jena-0b0b3b1b4/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/athaljen/" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div>
        <div className="img-box">
          <div className="liquid-wave">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <path fill="#00eeff">
                <animate
                  attributeName="d"
                  dur="10000ms"
                  repeatCount="indefinite"
                  values="M352,351.5Q250,453,132,351.5Q14,250,132,166.5Q250,83,352,166.5Q454,250,352,351.5Z;
                    M366,334Q250,418,177.5,334Q105,250,177.5,169.5Q250,89,366,169.5Q482,250,366,334Z;
                    M348,337Q250,424,154.5,337Q59,250,154.5,189Q250,128,348,189Q446,250,348,337Z;
                    M352,351.5Q250,453,132,351.5Q14,250,132,166.5Q250,83,352,166.5Q454,250,352,351.5Z;
                    "
                ></animate>
              </path>
            </svg>
          </div>
          <div className="liquid-wave">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <path fill="#00eeff">
                <animate
                  attributeName="d"
                  dur="10000ms"
                  repeatCount="indefinite"
                  values="M352,351.5Q250,453,132,351.5Q14,250,132,166.5Q250,83,352,166.5Q454,250,352,351.5Z;
                    M366,334Q250,418,177.5,334Q105,250,177.5,169.5Q250,89,366,169.5Q482,250,366,334Z;
                    M348,337Q250,424,154.5,337Q59,250,154.5,189Q250,128,348,189Q446,250,348,337Z;
                    M352,351.5Q250,453,132,351.5Q14,250,132,166.5Q250,83,352,166.5Q454,250,352,351.5Z;
                    "
                ></animate>
              </path>
            </svg>
          </div>
          <Image
            src="/assets/animations/developer.gif"
            alt="me"
            width={350}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}
