import SkillsData from "../data/SkillsData";

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            doloribus quidem at, quod delectus vero quos ex velit assumenda iure
            dignissimos suscipit harum possimus iste dolores minus error
            voluptates? Debitis.
          </p>
        </div>
        {SkillsData.map((skill) => (
          <div className="skill-card-bg" key={skill.title}>
            <div className="skill-card">
              <h3>{skill.title}</h3>
              <div>
                {skill.techs.map((t, idx) => (
                  <i className={t.icon} aria-label={t.name}></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
