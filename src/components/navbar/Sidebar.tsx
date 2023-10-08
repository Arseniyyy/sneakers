import RemoveOrCloseButton from 'components/icons/RemoveOrCloseButton'
import { ReactElement } from 'react'
import styles from 'components/navbar/Sidebar.module.scss'

interface IProps {
  xMarkIconWidth: string | number
  xMarkIconHeight: string | number
  isToggled: boolean
  header: string
  chidlren?: ReactElement
  onClick: () => void
}

const Sidebar = ({ isToggled, header, chidlren, onClick }: IProps) => {
  return <div className={`fixed left-0 top-0 bg-black-0.5 ${isToggled ? 'z-20 w-full h-full' : ''}`}>
    <div className={`${styles.sidebar} overflow-scroll fixed flex flex-col right-0 px-[15px] py-10 z-40 h-full min-w-[370px] max-w-[420px] bg-white-full drop-shadow-xl ${isToggled && styles.open}`}>
      <div className="flex justify-between py-8 bg-white-full">
        <h1 className="font-bold text-2xl">{header}</h1>
        <button className="mr-4" onClick={onClick}>
          <RemoveOrCloseButton width={30} height={30} />
        </button>
      </div>
      {chidlren}
    </div>
  </div>
}

export default Sidebar
