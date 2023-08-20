import Cart from 'components/cart'
import Root from 'components/root'
import ErrorPage from 'components/root/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: '/cart',
    element: <Cart />,
    errorElement: <ErrorPage />,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
