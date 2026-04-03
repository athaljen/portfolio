import ProjectCard from "../components/ProjectCard";
import ProjectsData from "../data/ProjectsData";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-cont">
        {ProjectsData.map((proj, idx) => (
          <ProjectCard data={proj} key={idx} />
        ))}
      </div>
    </section>
  );
}
