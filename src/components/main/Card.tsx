import useMediaQuery from 'hooks/useMediaQuery'
import { smallScreens, xsScreens } from 'screenDefinitions'
import PlusIcon from 'components/icons/PlusIcon'
import HeartUnliked from 'components/icons/HeartUnliked'

interface IProps {
  text: string
}

const Card = ({ text }: IProps) => {
  const isAboveSmallScreens = useMediaQuery(smallScreens)
  const isAboveXSScreens = useMediaQuery(xsScreens)
  const plusIconWidth = 15
  const plusIconHeight = 15

  return <div className={`flex flex-col justify-between gap-5 transition-all hover:-translate-y-5 hover:shadow-xl border-[2px] border-solid border-white-0.5 rounded-3xl p-5 m-5 mr-6 min-w-[170px] max-w-[256px] h-auto ${isAboveXSScreens ? 'w-1/4' : 'w-[210px]'}`}>
    <div>
      <HeartUnliked
        className="absolute cursor-pointer"
        width={isAboveSmallScreens ? 45 : 30}
        height={isAboveSmallScreens ? 45 : 30}
      />
    </div>
    <img width={220} height={100} src="/img/sneakers/2.jpg" alt="1.png" />
    <h5 className="font-normal text-sm ">{text}</h5>
    <div className="flex justify-between ">
      <div>
        <b className="text-sm">99$</b>
      </div>
      <button>
        <PlusIcon width={plusIconWidth} height={plusIconHeight} />
      </button>
    </div>
  </div>
}

export default Card
