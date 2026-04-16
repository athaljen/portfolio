'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function DevAnimation() {
  return (
    <div className="dev-animation-box">
      <DotLottieReact
        src="/animations/developer.lottie"
        autoplay
        loop
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
