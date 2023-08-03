import React, { useState } from 'react'
import cartIcon from 'icons/cart.svg'
import profileIcon from 'icons/profile.svg'
import useMediaQuery from 'hooks/useMediaQuery'
import BurgerMenu from 'components/svgs/BurgerMenu'
import XMarkIcon from 'components/svgs/XMarkIcon'
import { svgTransitionColors } from 'styles'

interface IProps {}

const Navbar = (props: IProps) => {
  const iconsStyles = { width: 35, height: 35 }
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  const handleBurgerMenuClick = () => {
    setIsMenuToggled(!isMenuToggled)
  }

  const defaultIconWidth = "35px"
  const defaultIconHeight = "35px"

  return <div>
    <nav id="page-wrap" className="flex justify-between items-center p-8 bg-zinc-100 font-montserrat text-base font-medium text-white no-underline">
      <img className="logo" style={{ width: 300, height: 100 }} src="logo.svg" />
      {
        isAboveMediumScreens ?
          <ul className="nav__links flex justify-between gap-4 mx-10">
            <button>
              <img src={cartIcon} style={iconsStyles} alt="cart" />
            </button>
            <button>
              <img src={profileIcon} style={iconsStyles} alt="profile" />
            </button>
          </ul>

          :

          <div className="w-9 h-9 transition-all focus:rounded-md focus:border-dashed focus:border-green hover:scale-125 outline-0">
            <button onClick={handleBurgerMenuClick}>
              <BurgerMenu width="35px" height="35px" />
            </button>
          </div>
      }
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button className={svgTransitionColors} onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon width={defaultIconWidth} height={defaultIconHeight} />
            </button>
          </div>
        </div>
      )}
    </nav>
  </div>
}

export default Navbar
