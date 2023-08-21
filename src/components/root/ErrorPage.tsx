import { useRouteError } from 'react-router-dom'
import NotFoundIcon from 'components/icons/NotFoundIcon'
import Navbar from 'components/navbar/Navbar'
import LinkButton from 'components/buttons/LinkButton'

const ErrorPage = () => {
  const error: any = useRouteError()
  console.error(error)

  return <div>
    <Navbar />
    <div className="flex flex-col items-center justify-center h-screen">
      <NotFoundIcon
        className="-mt-44"
        width="350px"
        height="350px"
      />
      <h1 className="font-medium text-4xl my-4 text-center">
        <p>{error.statusText}.</p>
        <p>
          Status code is <b>{error.status}</b>
        </p>
      </h1>
      <LinkButton href="/" text="Go to the homepage" />
    </div>
  </div>
}

export default ErrorPage
