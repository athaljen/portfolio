type Props = {
  title: string
  date: string
  company: string
  location: string
  description: string
}

const ExpCard = ({ company, date, description, location, title }: Props) => {
  return (
    <div
      className="rounded-xl p-5 bg-neutral-800 border border-neutral-700 transition-all duration-300 
      hover:-translate-y-1
      shadow-[inset_19px_19px_35px_#1a1a1a,_inset_-19px_-19px_35px_#2e2e2e]
      "
    >
      <h3 className="text-lg font-semibold">
        {title} <span className="text-gray-50 text-sm">({date})</span>
      </h3>

      <p className="text-sm text-gray-300 mt-1">
        {company} <span className="text-zinc-500 text-sm">~ {location}</span>
      </p>

      <p className="mt-3 text-sm">{description}</p>
    </div>
  )
}

export default ExpCard
