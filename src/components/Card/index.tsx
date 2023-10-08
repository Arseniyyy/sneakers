import React, { useEffect, useState } from 'react'
import useMediaQuery from 'hooks/useMediaQuery'
import { smallScreens, xsScreens } from 'screenDefinitions'
import PlusIcon from 'components/icons/PlusIcon'
import HeartUnliked from 'components/icons/HeartUnliked'
import HeartLiked from 'components/icons/HeartLiked'
import { Item, CardItem } from 'types/card'
import CheckMarkIcon from 'components/icons/CheckMarkIcon'

const Card = ({ src, title, price, onAddToCart }: CardItem) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false)
  const isAboveSmallScreens = useMediaQuery(smallScreens)
  const isAboveXSScreens = useMediaQuery(xsScreens)
  const plusIconWidthHeight = 15
  const heartIconStyles = "absolute cursor-pointer"
  const heartWidthHeight = isAboveSmallScreens ? 22 : 20

  function handleHeartIconClick(): void {
    setIsLiked(!isLiked)
  }
  function handlePlusIconClick(): void {
    setIsAddedToCart(!isAddedToCart)
  }
  function handleCheckMarkIconClick(): void {
    setIsAddedToCart(!isAddedToCart)
  }

  return <div className={`flex flex-col justify-between gap-5 transition-all hover:-translate-y-1 hover:shadow-xl border-[2px] border-solid border-white-0.5 rounded-3xl p-5 m-5 mr-6 min-w-[170px] max-w-[256px] h-auto ${isAboveXSScreens ? 'w-1/4' : 'w-[210px]'}`}>
    <div>
      {/* Unliked heart icon */}
      {isLiked ?
        <HeartLiked
          className={heartIconStyles}
          width={heartWidthHeight}
          height={heartWidthHeight}
          onClick={handleHeartIconClick}
        />
        :
        <HeartUnliked
          className={heartIconStyles}
          width={heartWidthHeight}
          height={heartWidthHeight}
          onClick={handleHeartIconClick}
        />
      }
    </div>
    <img width={220} height={100} src={src} alt="1.png" />
    <h5 className="font-normal text-sm">{title}</h5>
    <div className="flex justify-between">
      <div>
        <b className="text-sm">Price: {price}$</b>
      </div>
      <button>
        {/* Add to cart behavior */}
        {isAddedToCart ?
          <CheckMarkIcon
            onClick={handleCheckMarkIconClick}
            width={plusIconWidthHeight}
            height={plusIconWidthHeight}
          />
          :
          <PlusIcon
            onClick={handlePlusIconClick}
            width={plusIconWidthHeight}
            height={plusIconWidthHeight}
          />
        }
      </button>
    </div>
  </div>
}

export default Card

