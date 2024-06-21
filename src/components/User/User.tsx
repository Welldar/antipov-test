import { Link, useParams } from 'react-router-dom'
import { useGetUserByIdQuery } from '../UsersList/userListSlice'
import { Header } from '../Header/Header'
import { Button } from '../Button/Button'
import { Envelope } from '../Icons/Envelope'
import { Mobile } from '../Icons/Mobile'
import { ArrowLeft } from '../Icons/ArrowLeft'
import { Avatar } from '../Avatar.tsx/Avatar'

export function User() {
  const { id } = useParams()

  if (!id) throw new Error('wrong route')

  const { data, isLoading } = useGetUserByIdQuery(id)
  const user = data?.data

  if (!user && !isLoading) return <div>No such a user</div>
  else if (user)
    return (
      <div>
        <Header
          leftColumn={
            <Link to="/">
              <Button className="hidden border-zinc-50 text-zinc-50 sm:block">
                Назад
              </Button>
              <ArrowLeft className="sm:hidden" />
            </Link>
          }
        >
          <div className="mb-16 flex flex-col items-center gap-4 md:mb-10 md:flex-row md:items-start md:gap-8">
            <Avatar
              src={user.avatar}
              className="order-1 aspect-square size-44 rounded-full md:order-none"
            />

            <div className="md: my-auto text-center md:text-left">
              <p className="mb-4 text-4xl md:text-6xl">{`${user.first_name} ${user.last_name}`}</p>
              <p className="text-xl md:text-3xl">Партнер</p>
            </div>
          </div>
        </Header>

        <div className="mx-auto grid w-fit max-w-7xl justify-center gap-6 px-4 md:justify-normal lg:w-auto lg:grid-cols-[90px_630px_auto]">
          <div className="max-w-screen-sm *:mb-[1.5em] lg:col-start-2">
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
              В работе с клиентами недостаточно просто решить конкретную
              проблему или помочь справиться с трудностями. Не менее важно
              уделять внимание обмену знаниями: "Один из самых позитивных
              моментов — это осознание того, что ты помог клиенту перейти на
              совершенно новый уровень компетентности, уверенность в том, что
              после окончания проекта у клиента есть все необходимое, чтобы
              дальше развиваться самостоятельно".
            </p>
            <p>
              Помимо разнообразных проектов для клиентов финансового сектора,
              Сорин ведет активную предпринимательскую деятельность. Он является
              совладельцем сети клиник эстетической медицины в Швейцарии,
              предлагающей инновационный подход к красоте, а также инвестором
              других бизнес-проектов.
            </p>
          </div>
          <div className="col-start-1 row-start-1 flex flex-col gap-6 lg:col-start-3 xl:ml-24">
            <div className="flex gap-2">
              <Mobile />
              <span>+7 (954) 333-44-55</span>
            </div>
            <div className="flex gap-2">
              <Envelope />
              <span>{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    )
}
