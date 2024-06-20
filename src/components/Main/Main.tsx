import { Header } from '../Header/Header'
import { UsersList } from '../UsersList/UsersList'

export function Main() {
  return (
    <>
      <Header>
        <div className="mx-auto mb-16 mt-8 flow-root max-w-4xl text-center">
          <h1 className="mb-4 text-6xl">Наша команда</h1>
          <p className="text-xl text-zinc-50">
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
