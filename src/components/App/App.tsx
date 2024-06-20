import { useSelector } from 'react-redux'
import { RootState } from '../Main/store'
import { Outlet } from 'react-router-dom'
import { SignUp } from '../auth/SignUp'

export function App() {
  const auth = useSelector((state: RootState) => state.auth.token)

  return auth ? <Outlet /> : <SignUp />
}
