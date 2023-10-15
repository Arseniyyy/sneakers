import { useRouteError } from 'react-router-dom'
import NotFoundIcon from 'components/Icons/NotFoundIcon'
import Navbar from 'components/Navbar'
import PrimaryButton from 'components/Buttons/PrimaryButton'

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
      <h1 className="font-medium text-4xl my-4 text-center z-10">
        <p>{error.statusText}.</p>
        <p>
          Status code is <b>{error.status}</b>
        </p>
      </h1>
      <a href='/'>
        <PrimaryButton backgroundColor="primary-500" text="Go to the homepage" />
      </a>
    </div>
  </div>
}

export default ErrorPage
