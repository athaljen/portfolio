import skillsData from '../data/skillsData'

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div>
        <div>
          <p>
            Software Development Engineer with 3+ years of experience
            specializing in React Native, building scalable mobile applications
            used by 400K+ users. Strong expertise in performance optimization,
            real-time systems, and end-to-end app development across mobile,
            web, and backend using React Native, Next.js, and Node.js.
          </p>
        </div>
        <h3 className="skill-title">
          My <span className="text-primary">Skills</span>
        </h3>
        <div className="skill-container">
          {skillsData.map((skill, idx) => {
            const title = Object.keys(skill)[0]
            return (
              <div className="skill-card" key={idx}>
                <strong>{title}</strong>
                <p>{skill[title as keyof typeof skill]}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
