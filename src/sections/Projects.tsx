import ProjCard from "../components/ProjCard";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-cont">
        <ProjCard
          image="https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg"
          desc="some dummy text"
          title="F&F Bargains"
        />
        <ProjCard
          image="https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg"
          desc="some dummy text"
          title="F&F Bargains"
        />
        <ProjCard
          image="https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg"
          desc="some dummy text"
          title="F&F Bargains"
        />
        <ProjCard
          image="https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg"
          desc="some dummy text"
          title="F&F Bargains"
        />
      </div>
    </section>
  );
}
