'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import { debounce } from '@/utils/helpers'

const debouncedMeow = debounce(() => {
  const audio = new Audio('/sounds/cat-meow.mp3')
  audio.play()
}, 300)

function playMeow() {
  debouncedMeow()
}

export default function DevAnimation() {
  return (
    <div className="mx-auto w-full aspect-[2/1.5] max-w-md relative">
      <DotLottieReact
        src="/animations/developer.lottie"
        autoplay
        loop
        className="h-full w-full"
      />
      <DotLottieReact
        src="/animations/cat.lottie"
        autoplay
        loop
        className="w-28 h-28 absolute bottom-0 left-20 cursor-pointer"
        onClick={playMeow}
      />
    </div>
  )
}
