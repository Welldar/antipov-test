import { useDispatch } from 'react-redux'
import { signOut } from '../auth/signUpSlice'

export function Header({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch()

  return (
    <header>
      <button
        onClick={() => {
          dispatch(signOut())
        }}
      >
        Выход
      </button>
      {children}
    </header>
  )
}
