import { PERSONAL_LINKS } from '@/constants'
import './resume.css'

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="container">
        <div className="page">
          {/* Header  */}
          <div className="header">
            <h1>BISWORANJAN JENA</h1>
            <div className="sub-header">
              Software Engineer — React Native & Full Stack | Salem, Tamil Nadu
            </div>
            <div className="sub-header-links">
              <a href="tel:+916370584925">+91 63705 84925</a>|
              <a href="mailto:bisworanjanjena23@gmail.com">
                bisworanjanjena23@gmail.com
              </a>
              |
              <a href="https://athaljen.tech/" target="_blank">
                Portfolio
              </a>
              |
              <a
                href="https://www.linkedin.com/in/bisworanjanjena23"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Summary  */}
          <h2 className="mt-0">SUMMARY</h2>
          <p>
            Software Development Engineer with 3.5+ years of experience building
            production-grade mobile, web, and backend applications using React
            Native, TypeScript, Next.js, and Node.js. Shipped over 15 apps
            across consumer, e-commerce, and enterprise domains, with expertise
            in performance optimization, API integration, CI/CD, and AI-powered
            applications.
          </p>

          {/* Work Experience  */}
          <h2>WORK EXPERIENCE</h2>
          <div className="header-justify">
            <p>
              <strong>Software Development Engineer I</strong>
              <br />
              Xam Guide Private Limited
            </p>
            <p className="place-date-box">
              March 2025 - Present
              <br />
              Salem, TN (Remote)
            </p>
          </div>
          <ul>
            <li>
              Built and maintained production features using Expo, React Native,
              Next.js, Supabase, and Node.js, focusing on application
              performance, reliability, and user experience.
            </li>
            <li>
              Set up CI/CD with Bitbucket, Docker, Jest, and Detox, cutting
              deployment time and raising code quality.
            </li>
            <li>
              Optimized API calls and state management, reducing load times by
              25%.
            </li>
            <li>
              Mentored junior developers through code reviews and best-practice
              guidance.
            </li>
          </ul>

          <div className="header-justify" style={{ marginTop: '10px' }}>
            <p>
              <strong>React Native Developer</strong>
              <br />
              SilverSky Technology
            </p>
            <p className="place-date-box">
              February 2023 - January 2025
              <br />
              Ahmedabad, Gujarat
            </p>
          </div>
          <ul>
            <li>
              Developed, enhanced, and maintained 12+ mobile and web apps across
              the Play Store and App Store, delivering new features, bug fixes,
              and performance improvements.
            </li>
            <li>
              Used REST APIs, WebSockets, and third-party libraries to extend
              functionality and UX.
            </li>
            <li>
              Conducted regular code reviews, improving code quality, adherence
              to best practices, and team productivity.
            </li>
          </ul>

          {/* Skills  */}
          <h2>TECHNICAL SKILLS</h2>
          <p>
            <strong>Languages & Frameworks:</strong> JavaScript, TypeScript,
            React Native, Expo, React.js, Next.js, Node.js, Kotlin
          </p>
          <p>
            <strong>State & Data Fetching:</strong> Redux Toolkit, Zustand,
            TanStack Query, Axios
          </p>
          <p>
            <strong>Backend & Databases:</strong> Supabase, Firebase,
            PostgreSQL, SQLite, REST APIs, GraphQL, WebSockets
          </p>
          <p>
            <strong>DevOps & Testing:</strong> Docker, CI/CD, Git, Jest, React
            Native Testing Library, Detox, EAS
          </p>
          <p>
            <strong>Integrations & Services:</strong> Stripe, Razorpay, FCM
            (Push Notifications), Google Vision API, OAuth
          </p>
          <p>
            <strong>Tools & Platforms:</strong> Xcode, Android Studio, VS Code,
            Postman, Jira, Figma
          </p>

          {/* Projects  */}
          <h2>PROJECTS</h2>
          <p>
            <strong>Iyal</strong> — Engineered a cross-platform exam prep
            platform with auth, real-time sync, AI-generated study content, TTS,
            and mock tests, using React Native/Expo, Next.js, Supabase, and
            Firebase. Integrated multi-model AI chat (GPT, Claude, Gemini,
            DeepSeek) with MCP tools and custom agents, plus chat history and
            token tracking. Deployed via CI/CD using Docker, Jest, Husky, and
            ESLint.
            <a href="https://iyal.app" target="_blank" className="link-a">
              Live Demo
            </a>
          </p>
          <p>
            <strong>Kahani Kids</strong> — AI-powered storytelling app for kids
            (3+), 160K+ downloads on Play Store. Built end-to-end with React
            Native and Firebase; added premium subscriptions with in-app
            purchases.
            <a
              href="https://play.google.com/store/apps/details?id=com.story_generation"
              target="_blank"
              className="link-a"
            >
              Live Demo
            </a>
          </p>
          <p>
            <strong>TN NHIS (Govt of Tamil Nadu)</strong> — Claims and insurance
            tracking application for employees and pensioners, 100K+ downloads.
            Built from scratch with React Native, Redux, Firebase, and backend
            APIs.
            <a
              href="https://play.google.com/store/apps/details?id=com.tnhealthschemev2"
              target="_blank"
              className="link-a"
            >
              Live Demo
            </a>
          </p>
          <p>
            <strong>F&amp;F-Bargains</strong> — E-commerce web/mobile app with
            live auctions, bidding, and chat; Firebase auth, Typesense search,
            Stripe payments. Grew to 10,000 users in two months.
            <a
              href="https://play.google.com/store/apps/details?id=com.ffbargains"
              target="_blank"
              className="link-a"
            >
              Live Demo
            </a>
          </p>

          {/* Education  */}
          <h2>EDUCATION</h2>
          <div className="header-justify">
            <p>
              <strong>Master of Computer Applications</strong>
              <br />
              Biju Patnaik University of Technology
            </p>
            <p className="place-date-box">
              2021–2023
              <br />
              Bhubaneswar, Odisha
            </p>
          </div>
        </div>
      </div>

      <a
        href={PERSONAL_LINKS.resume}
        download="Bisworanjan_Jena.pdf"
        className="primary-btn mt-10 mx-auto px-3 py-2 block w-50"
      >
        Download Resume
      </a>
    </div>
  )
}
