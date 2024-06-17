import { Link } from 'react-router-dom'
import { User } from '../UsersList/userListSlice'

export function UserCard(props: User) {
  return (
    <Link to={`/users/${props.id}`}>
      <img src={props.avatar} alt="" />
      {`${props.first_name} ${props.last_name}`}
    </Link>
  )
}
