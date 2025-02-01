import ExpCard from "../components/ExpCard";

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="exp-container">
        <ExpCard
          title="Frontend Developer"
          date="Feb/2023 - Dec/2024"
          company="SilverSky Technology"
          location="Ahmedabad, Gujarat"
          description="At SilverSky Technology, I've spent nearly 2 years as a Frontend
            Developer, making a significant impact across 20+ projects in
            eCommerce, healthcare, and government sectors. Collaborated closely
            with product managers and QA to deliver seamless, bug-free
            applications on time. Led and mentored a team of interns, guiding
            them to become production-ready."
        />
        <ExpCard
          title="Virtual Internship"
          date="Mar/2022 - May/2022"
          company="Eduskills (blueprism)"
          location="Remote"
          description="During my virtual internship with Eduskills, in collaboration with
          Blue Prism, I gained hands-on experience in Robotic Process Automation
          (RPA). I successfully designed automated workflows, streamlined
          repetitive tasks, and enhanced process efficiency. I also worked on
          projects, applying Blue Prism tools to real-world scenarios,
          strengthening my problem-solving and analytical skills in automation."
        />
      </div>
    </section>
  );
}
