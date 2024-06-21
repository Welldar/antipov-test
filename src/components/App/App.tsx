import { useSelector } from 'react-redux'
import { RootState } from '../Main/store'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { SignUp } from '../SignUp/SignUp'

export function App() {
  const auth = useSelector((state: RootState) => state.auth.token)

  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname
        }}
      />
      {auth ? <Outlet /> : <SignUp />}
    </>
  )
}
