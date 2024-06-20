import { useDispatch } from 'react-redux'
import { signOut } from '../auth/signUpSlice'
import { Button } from '../Button/Button'

export function Header({
  children,
  leftColumn,
}: {
  children: React.ReactNode
  leftColumn?: React.ReactNode
}) {
  const dispatch = useDispatch()

  return (
    <header className="mb-12 bg-purple-800 pt-8 text-white">
      <div className="mx-auto grid max-w-screen-xl grid-cols-[minmax(90px,auto)_1fr_minmax(90px,auto)] items-start gap-2">
        <div>{leftColumn}</div>
        <div>{children}</div>
        <Button
          className="border-zinc-50"
          clickHandler={() => {
            dispatch(signOut())
          }}
        >
          <span className="text-zinc-50">Выход</span>
        </Button>
      </div>
    </header>
  )
}
