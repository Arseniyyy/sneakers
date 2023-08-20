import useMediaQuery from 'hooks/useMediaQuery'
import { xsScreens } from 'screenDefinitions'

interface IProps {
  text: string
}

const Card = ({ text }: IProps) => {
  const isAboveXSScreens = useMediaQuery(xsScreens)

  return <div className={`border-2 rounded p-20 m-5 min-w-[170px] max-w-[256px] h-72 ${isAboveXSScreens ? 'w-1/4' : 'w-[200px]'}`}>
    <p>{text}</p>
  </div>
}

export default Card
