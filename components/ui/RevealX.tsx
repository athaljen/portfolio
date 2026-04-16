import { HTMLAttributes, memo } from 'react'
import './revealX.module.css'

type Props = HTMLAttributes<HTMLDivElement>

function RevealX(props: Props) {
  return <div {...props} className={`revealX ${props.className || ''}`} />
}

export default memo(RevealX)
