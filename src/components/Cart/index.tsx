import React from 'react'
import EmptyBoxIcon from 'components/Icons/EmptyBoxIcon'
import PrimaryButton from 'components/Buttons/PrimaryButton'
import RemoveOrCloseIcon from 'components/Icons/RemoveOrCloseIcon'
import ArrowIcon from 'components/Icons/ArrowIcon'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import instance from 'settings/axios'
import { ActionTypes } from 'store'
import { Item } from 'types/Item'
import { AnyAction } from 'redux'
import { cartSlug } from 'settings/endpoints'

interface Props {
  items: Array<Item>
  sum: number
  onCartToggleClick: () => void
}

const Cart = ({ items, sum, onCartToggleClick }: Props) => {
  /**
   * Represents a cart which can do the following actions:
   * Storing added items
   * Removing items by clicking the X button or checkmark icon on the card of the added product
   */
  const dispatch = useDispatch()

  function onClickRemoveButton(...args: Array<string | number>): void {
    /* Removes an item from the cart and makes a delete request to the server. */
    const [id, price] = args
    {/* const dispatchActionConfig: AnyAction = { */}
    {/*   type: ActionTypes.removeItem, */}
    {/*   id, */}
    {/*   price, */}
    {/* } */}
    {/* dispatch(dispatchActionConfig) */}
  }

  useEffect(() => {
    async function setCartItems() {
      /* Makes a GET request to the `cart` endpoint and sets the response's data to state of items and the whole sum of the order. */
      let sum = 0
      const response = await instance.get(cartSlug)
      const payload: Array<Item> = response.data

      if (payload.length !== 0) {
        payload.forEach((item: Item) => sum += item.price)
      }

      dispatch({ type: ActionTypes.setItems, payload: payload })
      dispatch({ type: ActionTypes.setSum, sum: sum })
    }
    setCartItems()
  }, [dispatch])

  return <div>
    {items?.length === 0 ? (
      <div className="flex flex-col items-center h-full justify-center pb-40 bg-white-full gap-2 px-5 mt-[25%]">
        <EmptyBoxIcon className="bg-white-full" width={150} height={150} />
        <p className="font-bold text-2xl bg-white-full">Cart is empty</p>
          <PrimaryButton
            className="mt-5 bg-white-full"
            backgroundColor="white-0.5"
            text="Go back"
            onClick={onCartToggleClick}
          />
      </div>
    ) : (
        <div>
          <div className="h-[300px] overflow-auto border-2 border-solid border-black-full rounded-2xl p-3">
            {items?.map((item, index) => {
              return <div className="flex justify-between align-middle bg-white-full gap-4 mb-5" key={index}>
                <img className="bg-white-full" alt="sneakers" width={90} height={60} src={item.src} />
                <div className="flex flex-col justify-around">
                  <p className="font-normal text-base">{item.title}</p>
                  <b className="text-sm">{item.price}$</b>
                </div>
                <button className="mr-1">
                <RemoveOrCloseIcon
                  className="removeButton"
                  width={30}
                  height={30}
                  onClick={() => onClickRemoveButton(item.id, item.price)}
                />
                </button>
              </div>
            })}
          </div>
          <div className="flex flex-col cartTotalBlock">
            <ul>
              <li className="flex">
                <span>In total:</span>
                <div></div>
                <b>{sum}$</b>
              </li>
              <li className="flex">
                <span>Tax 5%:</span>
                <div></div>
                <b>{(sum * 0.05).toFixed(2)}$</b>
              </li>
            </ul>
            <button className="blackButton">
              Order
              <ArrowIcon className="arrowIcon transition absolute right-10 bg-white-full" width={16} height={14} />
            </button>
          </div>
        </div>
    )}
  </div>
}

export default Cart
