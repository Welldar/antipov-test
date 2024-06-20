import { Header } from '../Header/Header'
import { UsersList } from '../UsersList/UsersList'

export function Main() {
  return (
    <>
      <Header>
        <div className="">
          <h1>Наша команда</h1>
          <p>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </p>
        </div>
      </Header>
      <UsersList />
    </>
  )
}
