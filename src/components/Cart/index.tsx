import EmptyBoxIcon from 'components/Icons/EmptyBoxIcon'
import PrimaryButton from 'components/Buttons/PrimaryButton'
import RemoveOrCloseButton from 'components/Icons/RemoveOrCloseButton'
import ArrowIcon from 'components/Icons/ArrowIcon'
import { Item } from 'types/Item'

interface Props {
  items?: Item[]
}

const Cart = ({ items }: Props) => {
  let sum = 0

  if (items?.length !== 0) {
    items?.forEach(item => {
      sum += item.price
    })
  }

  return <div>
    {items?.length === 0 ? (
      <div className="flex flex-col items-center h-full justify-center pb-40 bg-white-full gap-2 px-5">
        <EmptyBoxIcon className="bg-white-full" width={150} height={150} />
        <p className="font-bold text-2xl bg-white-full">Cart is empty</p>
        <a href="/">
          <PrimaryButton className="mt-10 bg-white-full" backgroundColor="white-0.5" text="Go to the homepage" />
        </a>
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
                  <RemoveOrCloseButton className="removeButton" width={30} height={30} />
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
