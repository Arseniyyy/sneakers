import { useState, useEffect } from 'react'
import CartIcon from 'components/icons/CartIcon'
import useMediaQuery from 'hooks/useMediaQuery'
import BurgerMenuIcon from 'components/icons/BurgerMenuIcon'
import ProfileIcon from 'components/icons/ProfileIcon'
import Sidebar from './Sidebar'

const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [cartMoneyAmount, setCartMoneyAmount] = useState<number>(0)
  const isScrolled = scrollPosition > 120

  const defaultIconWidth = '35px'
  const defaultIconHeight = '35px'
  const profileIconWidth = '30px'
  const profileIconHeight = '30px'

  const handleMenuToggleClick = () => {
    setIsMenuToggled(!isMenuToggled)
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)

    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <div>
    <nav className="flex justify-between items-center py-3 bg-zinc-100 font-montserrat text-base font-medium text-white no-underline">
      <img alt="logo" style={{ width: 210, height: 100 }} src="logo.svg" />
      {
        isAboveMediumScreens ?
          <ul className="flex justify-between gap-6 mx-10">
            <button>
              <CartIcon
                className={`${isScrolled ? 'fixed bottom-10 right-10 z-30' : '-mx-4'}`}
                width={defaultIconWidth}
                height={defaultIconHeight}
              />
            </button>
            <div className="text-black  font-thin py-3 pr-2">
              {cartMoneyAmount}$
            </div>
            <button>
              <ProfileIcon width={profileIconWidth} height={profileIconHeight} />
            </button>
          </ul>

          :

          <div>
            <div className="w-9 h-9 mx-3.5">
              <button onClick={handleMenuToggleClick}>
                <BurgerMenuIcon width="35px" height="35px" />
              </button>
            </div>
            <Sidebar isMenuToggled={isMenuToggled} iconWidth={defaultIconWidth} iconHeight={defaultIconHeight} onClick={handleMenuToggleClick} />
            <div>
              <button>
                <CartIcon
                  className="fixed bottom-10 right-3.5 z-30"
                  width={defaultIconWidth}
                  height={defaultIconHeight}
                />
              </button>
            </div>
          </div>
      }
    </nav>
  </div>
}

export default Navbar
