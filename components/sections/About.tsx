'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import skillsData from '@/data/skillsData'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      viewport={{ once: true }}
      className="min-h-screen bg-[radial-gradient(circle,_#0940747a,_#09407443_30%,_transparent_60%,_transparent_100%)]"
    >
      <h2 className="text-primary text-2xl font-bold mb-8 text-center">
        About Me
      </h2>

      <div>
        <p>
          Software Development Engineer with 3+ years of experience specializing
          in React Native, building scalable mobile applications used by 400K+
          users. Strong expertise in performance optimization, real-time
          systems, and end-to-end app development across mobile, web, and
          backend using React Native, Next.js, and Node.js.
        </p>

        <h3 className="text-md mt-10 mb-4 font-semibold">
          My <span className="text-primary">Skills</span>
        </h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-[15px]"
        >
          {skillsData.map((skill, idx) => (
            <div key={idx} className="flex flex-col">
              <strong>{skill.category}</strong>

              <div className="flex flex-wrap gap-3 mt-2 p-3 rounded-lg border border-white/20 bg-white/10">
                {skill.skills.map((s, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex flex-col items-center gap-1 justify-between min-w-[60px]"
                  >
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-full bg-gray-100/90 flex items-center justify-center hover:rotate-5">
                      <Image
                        src={s.icon}
                        alt={s.title}
                        width={30}
                        height={30}
                        title={s.title}
                        className="object-contain max-w-[30px] max-h-[30px]"
                      />
                    </div>

                    {/* Label */}
                    <span className="text-xs text-center block mt-1">
                      {s.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
