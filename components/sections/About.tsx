import skillsData from '@/data/skillsData'

function About() {
  return (
    <section
      id="about"
      className="bg-[radial-gradient(circle,_#0940747a,_#09407443_30%,_transparent_60%,_transparent_100%)]"
    >
      <h1 className="text-primary text-2xl font-bold mb-8 text-center">
        About Me
      </h1>

      <div>
        <p>
          Software Development Engineer with 3+ years of experience specializing
          in React Native, building scalable mobile applications used by 400K+
          users. Strong expertise in performance optimization, real-time
          systems, and end-to-end app development across mobile, web, and
          backend using React Native, Next.js, and Node.js.
        </p>

        <h3 className="text-[1.2rem] mt-[25px] mb-[10px]">
          My <span className="text-primary">Skills</span>
        </h3>

        <div className="flex flex-wrap gap-[15px]">
          {skillsData.map((skill, idx) => {
            const title = Object.keys(skill)[0]

            return (
              <div
                key={idx}
                className="
                  px-[15px] py-[10px]
                  bg-white/10
                  backdrop-blur-[6px]
                  rounded-[10px]
                  border border-white/20
                  text-[0.9rem]
                  grow max-[576px]:grow
                "
              >
                <strong>{title}</strong>
                <p className="mt-[5px] text-[0.8rem] text-[var(--text)]">
                  {skill[title as keyof typeof skill]}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
