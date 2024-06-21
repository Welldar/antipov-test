import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { User } from './components/User/User'
import { store } from './components/Main/store'
import { Main } from './components/Main/Main'
import { App } from './components/App/App'
import './main.css'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: (
      <div className="mx-auto my-4 w-fit text-center text-5xl">
        <h1 className="my-2 text-red-600">
          Something went wrong. Probably hit limit rate reqres.in or incorrect
          route
        </h1>
        <Link to={'/'}>Return home</Link>
      </div>
    ),
    children: [
      { path: '/', element: <Main /> },
      {
        path: 'users/:id',
        element: <User />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
