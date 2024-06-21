import { useDispatch } from 'react-redux'
import { signOut } from '../SignUp/signUpSlice'
import { Button } from '../Button/Button'
import { Exit } from '../Icons/Exit'

export function Header({
  children,
  leftColumn,
}: {
  children: React.ReactNode
  leftColumn?: React.ReactNode
}) {
  const dispatch = useDispatch()

  return (
    <header className="mb-8 bg-purple-800 px-4 pt-6 text-white md:mb-12 md:pt-8">
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 items-start gap-y-3 md:grid-cols-[minmax(90px,auto)_1fr_minmax(90px,auto)] md:gap-6">
        <div className="">{leftColumn}</div>
        <div className="col-span-2 md:col-span-1">{children}</div>
        <div
          className="col-start-2 row-start-1 justify-self-end md:col-start-auto md:row-start-auto"
          onClick={() => {
            dispatch(signOut())
          }}
        >
          <Button className="hidden border-zinc-50 sm:block">
            <span className="text-zinc-50">Выход</span>
          </Button>
          <Exit className="sm:hidden" />
        </div>
      </div>
    </header>
  )
}
