import ProjCard from "../components/ProjCard";
import ProjectsData from "../data/ProjectsData";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-cont">
        {ProjectsData.map((proj, idx) => (
          <ProjCard data={proj} key={idx} />
        ))}
      </div>
    </section>
  );
}
