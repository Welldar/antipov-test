import { UserCard } from '../UserCard/UserCard'
import { setPage, useGetUsersByPageQuery } from './userListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Main/store'

export function UsersList() {
  const page = useSelector((state: RootState) => state.page)
  const dispatch = useDispatch()
  const users = []

  for (let i = 1; i <= page; i++) {
    users.push(<UsersListHelper key={i} page={i} />)
  }

  return (
    <main>
      {users}

      <button
        type="button"
        onClick={() => {
          dispatch(setPage(page + 1))
        }}
      >
        Показать еще
      </button>
    </main>
  )
}

function UsersListHelper({ page }: { page: number }) {
  const { data, isLoading } = useGetUsersByPageQuery(page)
  const users = data?.data

  return (
    <>
      {!isLoading &&
        users &&
        users.map((user) => <UserCard {...user} key={user.id} />)}
    </>
  )
}
