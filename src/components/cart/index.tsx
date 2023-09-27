import EmptyBoxIcon from 'components/icons/EmptyBoxIcon'
import LinkButton from 'components/buttons/LinkButton'
import RemoveOrCloseButton from 'components/icons/RemoveOrCloseButton'
import ArrowIcon from 'components/icons/ArrowIcon'

interface Item {
  imgPath: string
  text: string
  price: number
}

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
        <LinkButton className="mt-10 bg-white-full" backgroundColor="white-0.5" href="/" text="Go to the homepage" />
      </div>
    ) : (
      <div>
        <div className="h-[300px] overflow-auto">
          {items?.map((item, index) => {
            return <div className="flex justify-between align-middle bg-white-full gap-4 mb-5" key={index}>
              <img className="bg-white-full" width={90} height={60} src={item.imgPath} />
              <div className="flex flex-col justify-around">
                <p className="font-normal text-base">{item.text}</p>
                <b className="text-sm">{item.price}$</b>
              </div>
              <button>
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
            <ArrowIcon className="arrowIcon transition absolute right-10 bg-green" width={16} height={14} />
          </button>
        </div>
      </div>
    )}
  </div>
}

export default Cart
