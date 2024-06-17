import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { User } from './components/User/User'
import { store } from './components/Main/store'
import { Main } from './components/Main/Main'
import { App } from './components/App/App'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
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
