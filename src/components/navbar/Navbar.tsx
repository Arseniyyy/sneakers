import { useState } from 'react'
import CartIcon from 'components/icons/CartIcon'
import useMediaQuery from 'hooks/useMediaQuery'
import BurgerMenuIcon from 'components/icons/BurgerMenuIcon'
import ProfileIcon from 'components/icons/ProfileIcon'
import Sidebar from './Sidebar'
import { svgTransitionColors } from 'styles'

interface IProps {}

const Navbar = (props: IProps) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  const handleMenuToggleClick = () => {
    setIsMenuToggled(!isMenuToggled)
  }

  const defaultIconWidth = '35px'
  const defaultIconHeight = '35px'

  const profileIconWidth = '30px'
  const profileIconHeight = '30px'

  return <div>
    <nav id="page-wrap" className="flex justify-between items-center p-8 bg-zinc-100 font-montserrat text-base font-medium text-white no-underline">
      <img className="logo" style={{ width: 210, height: 100 }} src="logo.svg" />
      {
        isAboveMediumScreens ?
          <ul className="flex justify-between gap-4 mx-10">
            <button>
              <CartIcon width={defaultIconWidth} height={defaultIconHeight} />
            </button>

            <button>
              <ProfileIcon width={profileIconWidth} height={profileIconHeight} />
            </button>
          </ul>

          :

          <div className="w-9 h-9 focus:rounded-md focus:border-dashed focus:border-green outline-0">
            <button onClick={handleMenuToggleClick}>
              <BurgerMenuIcon width="35px" height="35px" />
            </button>
          </div>
      }
      {!isAboveMediumScreens && (
        <Sidebar isMenuToggled={isMenuToggled} iconWidth={defaultIconWidth} iconHeight={defaultIconHeight} onClick={handleMenuToggleClick} />
      )}
    </nav>
  </div>
}

export default Navbar
