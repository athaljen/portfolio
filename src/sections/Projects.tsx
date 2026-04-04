import { memo, useCallback, useRef } from 'react'

import { ModalRefType } from '@/types/other-types'
import { ProjectDataType } from '@/types/ProjectTypes'

import ProjectDetailsModal from '../components/modals/ProjectDetailsModal'
import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects-data'

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
