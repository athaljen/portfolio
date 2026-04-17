import { HTMLAttributes, memo } from 'react'
import './revealX.css'

type Props = HTMLAttributes<HTMLDivElement>

function RevealX(props: Props) {
  return <div {...props} className={`revealX ${props.className || ''}`} />
}

export default memo(RevealX)
