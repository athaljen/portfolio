import ProjCard from "../components/ProjCard";
import { ProjectsData } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-cont">
        {ProjectsData.map((proj) => (
          <ProjCard data={proj} />
        ))}
      </div>
    </section>
  );
}
