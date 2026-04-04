import ExpCard from '../components/ExpCard'
import workExperienceData from '../data/workExperienceData'

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="exp-container">
        {workExperienceData.map((exp, idx) => (
          <ExpCard
            key={idx}
            title={exp.title}
            date={exp.date}
            company={exp.company}
            location={exp.location}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  )
}
