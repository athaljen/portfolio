import workExperienceData from '@/data/workExperienceData'

import ExpCard from '../main/ExpCard'

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen">
      <h2 className="text-primary text-2xl font-bold mb-8 text-center">
        Work Experience
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        {workExperienceData.map((exp, idx) => (
          <ExpCard
            key={idx}
            index={idx}
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
