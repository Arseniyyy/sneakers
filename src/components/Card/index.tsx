import { useState } from 'react'
import useMediaQuery from 'hooks/useMediaQuery'
import { smallScreens, xsScreens } from 'screenDefinitions'
import PlusIcon from 'components/Icons/PlusIcon'
import HeartUnliked from 'components/Icons/HeartUnliked'
import HeartLiked from 'components/Icons/HeartLiked'
import { CardItem } from 'types/Item'
import CheckMarkIcon from 'components/Icons/CheckMarkIcon'
import instance from 'settings/axios'
import { useDispatch } from 'react-redux'
import { ActionTypes } from 'reduxStore'

const Card = ({ src, title, price }: CardItem) => {
  const dispatch = useDispatch()

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

  function onClickCheckMarkIcon(): void {
    setIsAddedToCart(!isAddedToCart)
  }

  async function onClickPlus() {
    const payload = {
      src: src,
      title: title,
      price: price
    }
    await instance.post("c", payload)
    setIsAddedToCart(!isAddedToCart)
    dispatch({ type: ActionTypes.addItem, payload })
  }

  return <div className={`flex flex-col justify-between gap-5 transition-all hover:scale-105 hover:shadow-xl border-[2px] border-solid border-white-0.5 rounded-3xl p-5 m-5 mr-6 min-w-[170px] max-w-[256px] h-auto ${isAboveXSScreens ? 'w-1/4' : 'w-[210px]'}`}>
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
            onClick={onClickCheckMarkIcon}
            width={plusIconWidthHeight}
            height={plusIconWidthHeight}
          />
          :
          <PlusIcon
            onClick={onClickPlus}
            width={plusIconWidthHeight}
            height={plusIconWidthHeight}
          />
        }
      </button>
    </div>
  </div>
}

export default Card

