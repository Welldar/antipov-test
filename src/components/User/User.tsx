import { Link, useParams } from 'react-router-dom'
import { useGetUserByIdQuery } from '../UsersList/userListSlice'
import { Header } from '../Header/Header'

export function User() {
  const { id } = useParams()

  if (!id) throw new Error('wrong route')

  const { data, isLoading } = useGetUserByIdQuery(id)
  const user = data?.data

  if (!user && !isLoading) return <div>No such a user</div>
  else if (user)
    return (
      <div>
        <Header>
          <div>
            <Link to="/">Назад</Link>
            <img src={user.avatar} alt="" />
            <p>{`${user.first_name} ${user.last_name}`}</p>
            <p>Партнер</p>
          </div>
        </Header>

        <div>
          <p>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты.
          </p>

          <p>
            В работе с клиентами недостаточно просто решить конкретную проблему
            или помочь справиться с трудностями. Не менее важно уделять внимание
            обмену знаниями: "Один из самых позитивных моментов — это осознание
            того, что ты помог клиенту перейти на совершенно новый уровень
            компетентности, уверенность в том, что после окончания проекта у
            клиента есть все необходимое, чтобы дальше развиваться
            самостоятельно".
          </p>

          <p>
            Помимо разнообразных проектов для клиентов финансового сектора,
            Сорин ведет активную предпринимательскую деятельность. Он является
            совладельцем сети клиник эстетической медицины в Швейцарии,
            предлагающей инновационный подход к красоте, а также инвестором
            других бизнес-проектов.
          </p>
        </div>
        <div>{user.email}</div>
      </div>
    )
}