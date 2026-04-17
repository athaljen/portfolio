import { PERSONAL_LINKS } from '@/constants'
import './resume.css'

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="container">
        {/* <!-- MARK:- PAGE-1 --> */}

        <div className="page">
          {/* <!-- MARK:- Header --> */}
          <div className="header">
            <h1 className="resume-name">BISWORANJAN JENA</h1>
            <div className="sub-header">
              Software Engineer (React Native | Full Stack)
              <br />
              Bhubaneswar, Odisha
              <br />
            </div>
            <div className="sub-header-links">
              <a className="resume-links" href="tel:+916370584925">
                +91 63705 84925
              </a>
              |
              <a
                className="resume-links"
                href="mailto:bisworanjanjena23@gmail.com"
              >
                bisworanjanjena23@gmail.com
              </a>
              |
              <a
                className="resume-links"
                href="https://athaljen.tech/"
                target="_blank"
              >
                {' '}
                Portfolio{' '}
              </a>
              |
              <a
                className="resume-links"
                href="https://www.linkedin.com/in/bisworanjanjena23"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* <!-- MARK:- Summary --> */}
          <h2 className="resume-header-title">SUMMARY</h2>
          <p className="resume-texts">
            Software Development Engineer with 3+ years of experience building
            scalable mobile, web, and backend applications using React Native,
            Next.js, Node.js, Supabase, and Firebase. Demonstrated ability to
            improve performance, strengthen security, and enhance user
            experience.
          </p>

          {/* <!-- MARK:- Achievements --> */}
          <h2 className="resume-header-title">ACHIEVEMENTS</h2>
          <ul className="resume-ul">
            <li>
              Built and delivered 15+ mobile and web applications across iOS,
              Android, and web.
            </li>
            <li>
              Achieved 100K+ downloads and 4.1+ average ratings across multiple
              apps.
            </li>
            <li>
              Developed real-time and AI-powered features improving engagement
              by and retention.
            </li>
            <li>
              Experience in CI/CD pipelines, scalable architecture, and
              mentoring developers.
            </li>
          </ul>

          {/* <!-- MARK:- Work Experience --> */}
          <h2 className="resume-header-title">WORK EXPERIENCE</h2>
          <div className="header-justify">
            <p className="resume-texts">
              <strong>Software Development Engineer I</strong>
              <br />
              Xam Guide Private Limited
            </p>
            <p className="resume-texts place-date-box">
              (March 2025 - Present)
              <br />
              Coimbatore, Tamil Nadu (Remote)
            </p>
          </div>
          <ul className="resume-ul">
            <li>
              Developed and maintained scalable features using Expo, React
              Native, Supabase, Node.js and backend services improved
              application performance and user experience.
            </li>
            <li>
              Established CI/CD pipelines using Bitbucket, Docker, and automated
              testing with Jest and Detox, reducing deployment time and improved
              code quality.
            </li>
            <li>
              Optimized API calls and state management, reducing load times by
              25% and improving app responsiveness
            </li>
            <li>
              Collaborated with cross-functional teams (design, QA) to deliver
              features on time in an agile environment.
            </li>
            <li>
              Mentored junior developers by conducting code reviews and sharing
              best practices.
            </li>
          </ul>

          <div className="header-justify mt-2">
            <p className="resume-texts">
              <strong>React Native Developer </strong>
              <br />
              SilverSky Technology
            </p>
            <p className="resume-texts place-date-box">
              (February 2023 - January 2025)
              <br />
              Ahmedabad, Gujarat
            </p>
          </div>
          <ul className="resume-ul">
            <li>
              Successfully developed and deployed over 12 mobile and web
              applications across Play Store and App Store.
            </li>
            <li>
              Utilized RESTful APIs, Web-Sockets, and third-party libraries to
              enhance functionality and user experience.
            </li>
            <li>
              Collaborated with product managers, cross-functional teams, and QA
              to deliver high-quality projects on time.
            </li>
            <li>
              Conducted regular code reviews, ensuring adherence to best
              practices and boosting team productivity.
            </li>
          </ul>

          {/* <!-- MARK:- Skills--> */}
          <h2 className="resume-header-title">TECHNICAL SKILLS</h2>
          <p className="resume-texts">
            <strong>Core: </strong>
            React Native, Expo, React.js, Next.js, Node.js, JavaScript,
            TypeScript, Kotlin
          </p>
          <p className="resume-texts">
            <strong>State & Data Management: </strong>
            Redux, Redux-Toolkit, Zustand, Axios, React Query (TanStack Query)
          </p>
          <p className="resume-texts">
            <strong>Backend & APIs: </strong>
            REST APIs, GraphQL, WebSocket
          </p>
          <p className="resume-texts">
            <strong>Database: </strong>
            Firebase, SQLite, PostgreSQL, Supabase
          </p>
          <p className="resume-texts">
            <strong>DevOps & Deployment: </strong>
            Docker, CI/CD Pipelines, Git, Bitbucket, GitLab, App Store & Play
            STore Deployment
          </p>
          <p className="resume-texts">
            <strong>Tools & Platforms: </strong>
            VS COde, Xcode, Android Studio, Jira, Postman, Figma
          </p>
          <p className="resume-texts">
            <strong>Testing: </strong>
            Jest, React Native Testing Library, Detox
          </p>
          <p className="resume-texts">
            <strong>Services & Integrations: </strong>
            Stripe, Razorpay, Firebase Auth, Cloud Messaging, Push
            Notifications, Google Vision API
          </p>
        </div>

        {/* <!-- MARK:- PAGE-2 --> */}
        <div className="page">
          {/* <!-- MARK:- Projects --> */}
          <h2 className="resume-header-title mt-0">PROJECTS</h2>
          <p className="resume-texts">
            <strong>Learning and Exam preparation app (Iyal)</strong>
          </p>
          <ul className="resume-ul">
            <li>
              Engineered a learning and exam preparation app using Expo, React
              Native, Zustand, supabase, and Firebase, providing users with a
              comprehensive platform for educational content and practice exams.
            </li>
            <li>
              Designed and implemented core features including authentication,
              study material upload, and real-time data synchronization.
            </li>
            <li>
              Developed advanced functionalities such as AI-powered study
              material generation, text-to-speech (TTS), mock tests, and
              flashcards.
            </li>
            <li>
              Established CI/CD pipelines and implemented tools such as Docker,
              Jest, Husky, and ESLint to improve code quality and streamline
              deployment.
            </li>
            <li>
              Integrated analytics to track user engagement and performance,
              allowing for data-driven improvements and personalized learning
              paths.
            </li>
          </ul>

          <p className="resume-texts">
            <strong>Children&apos;s Storytelling App (Kahani Kids)</strong>
          </p>
          <ul className="resume-ul">
            <li>
              Reached 160K+ downloads by developing an AI-powered storytelling
              app for children (ages 3+) on the Google Play Store.
            </li>
            <li>
              Led end-to-end development using React Native, Firebase, and
              backend APIs, ensuring scalability and smooth UX.
            </li>
            <li>
              Built premium subscription features with in-app purchases and
              ad-free experience.
            </li>
          </ul>

          <p className="resume-texts">
            <strong>Tamil Nadu Government App (TN NHIS)</strong>
          </p>
          <ul className="resume-ul">
            <li>
              Built a Tamil Nadu Government mobile app for employees and
              pensioners to track and apply for claims with 100K+ downloads.
            </li>
            <li>
              Built from scratch using React Native, Redux, firebase and Backend
              APIs for claims, insurance and hospital listings.
            </li>
          </ul>

          <p className="resume-texts">
            <strong>E-Commerce Mobile & Web App (F&F-Bargains)</strong>
          </p>
          <ul className="resume-ul">
            <li>
              Led development and maintenance of web and mobile application,
              incorporating Firebase authentication, Type-Sense for fast search,
              Stripe payments Gateway, and Easy Post for delivery tracking.
            </li>
            <li>
              Built real-time features such as live auctions, bidding, comments,
              customer support, and live chat to enhance user engagement and
              interaction. Successfully attracted 10,000 new users within two
              months.
            </li>
          </ul>

          {/* <!-- MARK:- Personal Projects & Open Source --> */}
          <h2 className="resume-header-title">
            PERSONAL PROJECTS & OPEN SOURCE
          </h2>
          <ul className="resume-ul">
            <li>
              Published React Native libraries used for developer productivity
              and app features (react-native-dynamic-shortcut,
              react-native-pip-mode, toast-react-native etc.)
            </li>
            <li>
              Built a Google Lens-like application using Google Vision API for
              text detection and QR scanning.
            </li>
          </ul>

          {/* <!-- MARK:- Education --> */}
          <h2 className="resume-header-title">EDUCATION</h2>
          <div className="header-justify">
            <p className="resume-texts">
              <strong>Master of Computer Application</strong>
              <br />
              Biju Patnaik University of Technology
            </p>
            <p className="resume-texts place-date-box">
              (2021–2023)
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
