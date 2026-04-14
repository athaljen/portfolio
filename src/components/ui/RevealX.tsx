import { HTMLAttributes, memo } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

function RevealX(props: Props) {
  return <div {...props} className={`revealX ${props.className || ''}`} />
}

export default memo(RevealX)
