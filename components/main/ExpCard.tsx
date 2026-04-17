'use client'
import { motion } from 'framer-motion'

type Props = {
  title: string
  date: string
  company: string
  location: string
  description: string
  index: number
}

const ExpCard = ({
  company,
  date,
  description,
  location,
  title,
  index,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: '0 10px 15px rgba(0,0,0,0.3)' }}
      className="rounded-xl p-5 bg-neutral-800 border border-neutral-700 shadow-[inset_19px_19px_35px_#1a1a1a,_inset_-19px_-19px_35px_#2e2e2e]"
    >
      <h3 className="text-lg font-semibold">
        {title} <span className="text-gray-50 text-sm">({date})</span>
      </h3>

      <p className="text-sm text-gray-300 mt-1">
        {company} <span className="text-zinc-500 text-sm">~ {location}</span>
      </p>

      <p className="mt-3 text-sm">{description}</p>
    </motion.div>
  )
}

export default ExpCard
