'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function DevAnimation() {
  return (
    <div className="mx-auto w-full max-w-md aspect-[2/1.5]">
      <DotLottieReact
        src="/animations/developer.lottie"
        autoplay
        loop
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
