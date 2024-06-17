import { useSelector } from 'react-redux'
import { RootState } from '../Main/store'
import { Outlet } from 'react-router-dom'
import { SignUp } from '../auth/SignUp'
import { useEffect } from 'react'

export function App() {
  const auth = useSelector((state: RootState) => state.auth.token)

  return auth ? <Outlet /> : <SignUp />
}
