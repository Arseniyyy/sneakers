import NotFoundIcon from 'components/Icons/NotFoundIcon'
import PrimaryButton from 'components/Buttons/PrimaryButton'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return <div>
    <div className="flex flex-col items-center justify-center h-screen">
      <NotFoundIcon
        className="-mt-44"
        width="350px"
        height="350px"
      />
      <h1 className="font-medium text-4xl my-4 text-center z-10">
        <p>Not found.</p>
      </h1>
      <Link to="/">
        <PrimaryButton backgroundColor="primary-500" text="Go to the homepage" />
      </Link>
    </div>
  </div>
}

export default NotFound
