const SkillsData = Object.freeze([
  {
    title: "Languages",
    techs: [
      {
        name: "JavaScript",
        Icon: () => <i className="devicon-javascript-plain colored"></i>,
      },
      {
        name: "TypeScript",
        Icon: () => <i className="devicon-typescript-plain colored"></i>,
      },
      {
        name: "C",
        Icon: () => <i className="devicon-c-plain-wordmark colored"></i>,
      },
      {
        name: "HTML",
        Icon: () => <i className="devicon-html5-plain colored"></i>,
      },
      {
        name: "CSS",
        Icon: () => <i className="devicon-css3-plain-wordmark colored"></i>,
      },
      {
        name: "Kotlin",
        Icon: () => <i className="devicon-kotlin-plain colored"></i>,
      },
    ],
  },
  {
    title: "Frameworks",
    techs: [
      {
        name: "React",
        Icon: () => <i className="devicon-react-original-wordmark colored"></i>,
      },
      {
        name: "React Native",
        Icon: () => <i className="devicon-react-original colored"></i>,
      },
      {
        name: "Next.js",
        Icon: () => <i className="devicon-nextjs-original-wordmark"></i>,
      },
      {
        name: "Expo",
        Icon: () => null,
      },
      {
        name: "Express",
        Icon: () => <i className="devicon-express-original"></i>,
      },
      {
        name: "Node.js",
        Icon: () => <i className="devicon-nodejs-plain-wordmark colored"></i>,
      },
    ],
  },
  {
    title: "Libraries",
    techs: [
      {
        name: "Redux",
        Icon: () => <i className="devicon-redux-original colored"></i>,
      },
    ],
  },
]);
export default SkillsData;
