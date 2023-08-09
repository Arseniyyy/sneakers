import XMarkIcon from 'components/icons/XMarkIcon'

interface IProps {
  iconWidth: string
  iconHeight: string
  isMenuToggled: boolean
  onClick: () => void
}

const Sidebar = (props: IProps) => {
  return <div className={`sidebar fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl ${props.isMenuToggled ? 'open' : 'close'}`}>
    <div className="flex justify-end p-12">
      <button onClick={props.onClick}>
        <XMarkIcon width={props.iconWidth} height={props.iconHeight} />
      </button>
    </div>
  </div>
}

export default Sidebar
