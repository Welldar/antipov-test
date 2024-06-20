import { UserCard } from '../UserCard/UserCard'
import { setPage, useGetUsersByPageQuery } from './userListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Main/store'
import { Button } from '../Button/Button'
import arrow from '../../assets/arrow-down.svg'

export function UsersList() {
  const page = useSelector((state: RootState) => state.page)
  const dispatch = useDispatch()
  const users = []

  for (let i = 1; i <= page; i++) {
    users.push(<UsersListHelper key={i} page={i} />)
  }

  return (
    <div className="mx-auto max-w-screen-xl px-9">
      <div className="mb-14 grid grid-cols-[repeat(auto-fit,_minmax(var(--card-size),1fr))] justify-items-center gap-5 [--card-size:305px]">
        {users}
      </div>
      <div className="mx-auto mb-16 w-fit">
        <Button
          clickHandler={() => {
            dispatch(setPage(page + 1))
          }}
        >
          <div className="flex gap-2">
            <span>Показать еще</span>
            <img src={arrow} alt="" />
          </div>
        </Button>
      </div>
    </div>
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
