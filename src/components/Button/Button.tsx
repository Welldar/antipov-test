import React from 'react'

export function Button({
  children,
  className,
  clickHandler,
}: {
  children: React.ReactNode
  className?: string
  clickHandler?: () => void
}) {
  return (
    <div
      onClick={clickHandler}
      className={`w-fit cursor-pointer rounded-lg border ${className || 'border-black'} px-4 py-2`}
    >
      {children}
    </div>
  )
}
