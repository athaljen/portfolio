'use client'
import { memo, useCallback, useRef } from 'react'

import projectsData from '@/data/projects-data'
import { ModalRefType } from '@/types/other-types'
import { ProjectDataType } from '@/types/ProjectTypes'

import ProjectCard from '../main/ProjectCard'
import ProjectDetailsModal from '../modals/ProjectDetailsModal'

function Projects() {
  const projectDetailsModal = useRef<ModalRefType>(null)

  const onReadMore = useCallback((data: ProjectDataType) => {
    projectDetailsModal.current?.open(data)
  }, [])

  return (
    <section id="projects" className="min-h-screen">
      <h2 className="text-primary text-2xl font-bold mb-8 text-center">
        Projects
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projectsData.map((proj, idx) => (
          <ProjectCard data={proj} key={idx} onReadMore={onReadMore} />
        ))}
      </div>
      <ProjectDetailsModal ref={projectDetailsModal} />
    </section>
  )
}

export default memo(Projects)
