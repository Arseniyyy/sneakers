import Root from 'components/Root'
import ErrorPage from 'components/Root/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
