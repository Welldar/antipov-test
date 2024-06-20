import { Link } from 'react-router-dom'
import { User } from '../UsersList/userListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Main/store'
import { toggleLike } from '../auth/signUpSlice'
import { Like } from '../Icons/Like'

export function UserCard(props: User) {
  const liked = useSelector((state: RootState) => state.auth.likes[props.id])
  const dispatch = useDispatch()

  return (
    <Link
      to={`/users/${props.id}`}
      className="flex w-[--card-size] flex-col items-center gap-4 rounded-[10px] px-5 pb-5 pt-9 shadow-md"
    >
      <img src={props.avatar} alt="" className="size-32 rounded-full" />
      <span className="text-xl">{`${props.first_name} ${props.last_name}`}</span>
      <button
        className="self-end"
        onClick={(e) => {
          e.preventDefault()
          dispatch(toggleLike(props.id))
        }}
      >
        <Like liked={liked} />
      </button>
    </Link>
  )
}
