import React, { useEffect, useState } from 'react'

const skillsData = [
  'React Native',
  'JavaScript ES6',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Expo',
  'Android & iOS',
  'HTML & CSS',
  'Git & GitHub',
  'Redux & Zustand',
  'RESTFul APIs',
  'Android Studio & Xcode',
  'GraphQL',
  'Firebase',
  'Supabase',
  'PostgreSQL',
]

const typingSpeed = 100 // speed per letter
const deletingSpeed = 50
const pauseTime = 1500

const HomeChangingText = () => {
  const [skillIndex, setSkillIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentSkill = skillsData[skillIndex]

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText.length < currentSkill.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentSkill.slice(0, displayText.length + 1))
      }, typingSpeed)
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentSkill.slice(0, displayText.length - 1))
      }, deletingSpeed)
    } else if (!isDeleting && displayText.length === currentSkill.length) {
      // Pause before delete
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && displayText.length === 0) {
      // Move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setSkillIndex((prev) => (prev + 1) % skillsData.length)
      }, 50)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentSkill, skillIndex])

  return (
    <div className="home-changing-text-container">
      I know
      <div className="changing-text">
        {displayText}
        <span className="cursor">|</span>
      </div>
    </div>
  )
}

export default HomeChangingText
