import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { User } from './components/User/User'
import { store } from './components/App/store'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: 'users/:id',
    element: <User />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
