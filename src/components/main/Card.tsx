import React from 'react'
import useMediaQuery from 'hooks/useMediaQuery'
import { smallScreens, xsScreens } from 'screenDefinitions'
import PlusIcon from 'components/icons/PlusIcon'
import HeartUnliked from 'components/icons/HeartUnliked'
import { Item } from 'types/card'

const Card = ({ src, title, price }: Item) => {
  const isAboveSmallScreens = useMediaQuery(smallScreens)
  const isAboveXSScreens = useMediaQuery(xsScreens)
  const plusIconWidth = 15
  const plusIconHeight = 15

  function clickHandler(event: React.MouseEvent<SVGElement>): void {
    alert(title)
  }

  return <div className={`flex flex-col justify-between gap-5 transition-all hover:-translate-y-5 hover:shadow-xl border-[2px] border-solid border-white-0.5 rounded-3xl p-5 m-5 mr-6 min-w-[170px] max-w-[256px] h-auto ${isAboveXSScreens ? 'w-1/4' : 'w-[210px]'}`}>
    <div>
      <HeartUnliked
        className="absolute cursor-pointer"
        width={isAboveSmallScreens ? 22 : 15}
        height={isAboveSmallScreens ? 22 : 15}
      />
    </div>
    <img width={220} height={100} src={src} alt="1.png" />
    <h5 className="font-normal text-sm ">{title}</h5>
    <div className="flex justify-between">
      <div>
        <b className="text-sm">Price: {price}$</b>
      </div>
      <button>
        <PlusIcon width={plusIconWidth} height={plusIconHeight} onClick={clickHandler} />
      </button>
    </div>
  </div>
}

export default Card
