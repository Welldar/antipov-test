import './App.css'
import { Header } from '../Header/Header'
import { UsersList } from '../UsersList/UsersList'

function App() {
  return (
    <>
      <Header>
        <div>
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

export default App
