'use client'
import { memo, useCallback, useRef } from 'react'

import projectsData from '@/data/projects-data'
import { ModalRefType } from '@/types/other-types'
import { ProjectDataType } from '@/types/ProjectTypes'

import ProjectCard from '../main/ProjectCard'
import ProjectDetailsModal from '../modals/ProjectDetailsModal'
import './projects.css'

function Projects() {
  const projectDetailsModal = useRef<ModalRefType>(null)

  const onReadMore = useCallback((data: ProjectDataType) => {
    projectDetailsModal.current?.open(data)
  }, [])

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-cont">
        {projectsData.map((proj, idx) => (
          <ProjectCard data={proj} key={idx} onReadMore={onReadMore} />
        ))}
      </div>
      <ProjectDetailsModal ref={projectDetailsModal} />
    </section>
  )
}

export default memo(Projects)
