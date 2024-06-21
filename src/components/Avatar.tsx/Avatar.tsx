import { useState } from 'react'

export function Avatar({ src, className }: { src: string; className: string }) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className={`${className} flex h-full flex-col justify-center`}>
      <img
        src={src}
        onLoad={() => setIsLoading(false)}
        className={`${isLoading && 'hidden'} aspect-square rounded-full object-cover`}
        alt=""
      />
      <div
        className={`mx-auto size-1/2 animate-spin rounded-full border-2 border-zinc-200 border-b-zinc-500 ${isLoading ? '' : 'hidden'}`}
      ></div>
    </div>
  )
}
