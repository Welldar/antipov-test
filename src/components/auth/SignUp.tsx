import { useDispatch } from 'react-redux'
import { signIn } from './signUpSlice'

export function SignUp() {
  const dispatch = useDispatch()

  return (
    <form>
      <input type="text" />
      <input type="email" />
      <input type="password" />
      <input type="password" />
      <button
        onClick={() => {
          dispatch(signIn({ email: 'eldar@asd.com', password: '21' }))
        }}
      >
        Зарегистрироваться
      </button>
    </form>
  )
}
