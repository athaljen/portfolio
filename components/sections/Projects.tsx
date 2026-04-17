'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { memo, useCallback, useRef, useState } from 'react'

import projectsData from '@/data/projects-data'
import { ModalRefType } from '@/types/other-types'
import { ProjectDataType } from '@/types/ProjectTypes'

import ProjectCard from '../main/ProjectCard'
import ProjectDetailsModal from '../modals/ProjectDetailsModal'
import { Tab, TabItem, TabList } from '../ui/Tab'

type TabType = 'All' | 'Mobile' | 'Web' | 'Personal'

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
    <section id="projects" className="min-h-screen">
      <h2 className="text-primary text-2xl font-bold mb-8 text-center">
        Projects
      </h2>

      <Tab>
        <TabList>
          {(['All', 'Mobile', 'Web', 'Personal'] as TabType[]).map((tab) => (
            <TabItem
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
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
    </section>
  )
}

export default memo(Projects)
