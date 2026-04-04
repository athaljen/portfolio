import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projectsData'

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-cont">
        {projectsData.map((proj, idx) => (
          <ProjectCard data={proj} key={idx} />
        ))}
      </div>
    </section>
  )
}
