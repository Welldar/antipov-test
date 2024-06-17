import { Link } from 'react-router-dom'
import { User } from '../UsersList/userListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Main/store'
import { toggleLike } from '../auth/signUpSlice'

export function UserCard(props: User) {
  const liked = useSelector((state: RootState) => state.auth.likes[props.id])
  const dispatch = useDispatch()

  return (
    <Link to={`/users/${props.id}`}>
      <img src={props.avatar} alt="" />
      {`${props.first_name} ${props.last_name}`}
      <button
        onClick={(e) => {
          e.preventDefault()
          dispatch(toggleLike(props.id))
        }}
      >
        {liked == true ? 'liked' : 'not liked'}
      </button>
    </Link>
  )
}
