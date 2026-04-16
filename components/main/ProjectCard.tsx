/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ProjectDataType } from '@/types/ProjectTypes'

type Props = {
  data: ProjectDataType
  onReadMore?: (_data: ProjectDataType) => void
}

const ProjectCard = ({ data, onReadMore }: Props) => {
  return (
    <div
      className="project-card"
      role="button"
      onClick={() => onReadMore?.(data)}
    >
      <img src={data?.image.src} />
      <div className="project-card-overlay backdrop-blur-xs">
        <div>
          <h4>{data.title}</h4>
          <p>{data.type}</p>
          <p>{data.date}</p>
          <p className="project-card-overlay-desc">{data.description}</p>
        </div>
        <div role="button" className="project-details-btn">
          Read More
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
