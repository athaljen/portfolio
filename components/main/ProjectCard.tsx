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
      className="relative group w-full overflow-hidden rounded-[10px] aspect-[2/1.2] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_10px_var(--primary)]"
      onClick={() => onReadMore?.(data)}
    >
      <img src={data?.image.src} className="w-full h-full object-cover" />

      <div
        className="absolute inset-0 z-10 flex flex-col justify-between p-2.5 bg-gradient-to-t from-black/100 to-black/30
        backdrop-blur-sm opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
      >
        <div>
          <h4 className="text-lg font-semibold">{data.title}</h4>
          <div className="flex items-center gap-2">
            <p className="text-sm mt-1 line-clamp-2">{data.type}</p>
            <p className="text-sm line-clamp-2">{data.date}</p>
          </div>
          <p className="text-sm text-gray-300 line-clamp-2 mt-2">
            {data.description}
          </p>
        </div>

        <div className="self-center text-sm px-4 py-1 border border-[var(--primary)] rounded-full cursor-pointer">
          Read More
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
