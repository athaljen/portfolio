'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { memo, JSX, useCallback, useRef, useState } from 'react'

import {
  GlobeSvg,
  LibrarySvg,
  MobileSvg,
  UserSvg,
} from '@/assets/text-svg-icons'
import projectsData from '@/data/projects-data'
import { ModalRefType } from '@/types/other-types'
import { ProjectDataType, TabType } from '@/types/ProjectTypes'

import ProjectCard from '../main/ProjectCard'
import ProjectDetailsModal from '../modals/ProjectDetailsModal'
import { Tab, TabItem, TabList } from '../ui/Tab'

const tabItems: {
  name: TabType
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}[] = [
  { name: 'All', Icon: LibrarySvg },
  { name: 'Mobile', Icon: MobileSvg },
  { name: 'Web', Icon: GlobeSvg },
  { name: 'Personal', Icon: UserSvg },
]

function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>('All')
  const projectDetailsModal = useRef<ModalRefType>(null)

  const filteredProjects = projectsData.filter((proj) => {
    if (activeTab === 'All') {
      return true
    }
    return proj.tags.includes(activeTab)
  })

  const onReadMore = useCallback((data: ProjectDataType) => {
    projectDetailsModal.current?.open(data)
  }, [])

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      viewport={{ once: true }}
      className="min-h-screen pt-10 px-5"
    >
      <h2 className="text-primary text-2xl font-bold mb-8 text-center">
        Projects
      </h2>

      <Tab>
        <TabList>
          {tabItems.map((tab) => (
            <TabItem
              key={tab.name}
              active={activeTab === tab.name}
              onClick={() => setActiveTab(tab.name)}
            >
              <tab.Icon className="w-5 h-5" fill="currentColor" />
              <p className="ml-2 mt-0.5 hidden [@media(min-width:420px)]:block">
                {tab.name}
              </p>
            </TabItem>
          ))}
        </TabList>
      </Tab>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 0.95, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          {filteredProjects.map((proj, idx) => (
            <ProjectCard data={proj} key={idx} onReadMore={onReadMore} />
          ))}
        </motion.div>
      </AnimatePresence>

      <ProjectDetailsModal ref={projectDetailsModal} />
    </motion.section>
  )
}

export default memo(Projects)
