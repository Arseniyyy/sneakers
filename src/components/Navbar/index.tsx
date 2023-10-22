import { useState, useEffect } from 'react'
import CartIcon from 'components/Icons/CartIcon'
import useMediaQuery from 'hooks/useMediaQuery'
import BurgerMenuIcon from 'components/Icons/BurgerMenuIcon'
import ProfileIcon from 'components/Icons/ProfileIcon'
import Sidebar from 'components/Sidebar'
import Cart from 'components/Cart'
import { useSelector } from 'react-redux'
import { State } from 'reduxStore'
import { Item } from 'types/Item'
import BadgeIcon from 'components/Icons/BadgeIcon'
import styles from 'components/Navbar/CartIcon.module.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const sum = useSelector((state: State) => state.sum)
  const cartItems: Array<Item> = useSelector((state: State) => state.items)
  const cartItemsLength = cartItems.length

  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const [isCartToggled, setIsCartToggled] = useState<boolean>(false)
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const isScrolled = scrollPosition > 120

  const defaultIconWidth = 35
  const defaultIconHeight = 35
  const profileIconWidth = 30
  const profileIconHeight = 30
  const xMarkIconWidth = 20
  const xMarkIconHeight = 20

  const handleCartToggleClick = () => { setIsCartToggled(!isCartToggled) }
  const handleMenuToggleClick = () => { setIsMenuToggled(!isMenuToggled) }

  const cartComponent = <Cart
    items={cartItems}
    sum={sum}
    onCartToggleClick={handleCartToggleClick}
  />

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
      {/* Sidebar elements */}
      <Sidebar
        header="Cart"
        chidlren={cartComponent}
        isToggled={isCartToggled}
        xMarkIconWidth={xMarkIconWidth}
        xMarkIconHeight={xMarkIconHeight}
        onClick={handleCartToggleClick}
      />
      <Sidebar
        isToggled={isMenuToggled}
        header="Menu"
        xMarkIconWidth={xMarkIconWidth}
        xMarkIconHeight={xMarkIconHeight}
        onClick={handleMenuToggleClick}
      />
      <img alt="logo" style={{ width: 210, height: 100 }} src="logo.svg" />
      {
        isAboveMediumScreens ?
          <>
            <div className="flex gap-8">
              <Link to="/">Feed</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact us</Link>
            </div>

            <ul className="flex justify-between gap-6 mx-10 max-h-12">
              <button onClick={handleCartToggleClick}>
                <div className={styles.CartBadgeGroup}>
                  <CartIcon
                    className={`${styles.CartIcon} ${isScrolled ? 'fixed bottom-10 right-10' : '-mx-4'}`}
                    width={defaultIconWidth}
                    height={defaultIconHeight}
                    changeColorOnHover={false}
                    notAnimated={false}
                  />
                  {cartItems.length > 0 &&
                    <BadgeIcon
                      className={`${styles.BadgeIcon} absolute top-8`}
                      value={cartItemsLength}
                    />
                  }
                </div>
              </button>
              <div className="text-black font-thin py-3 pr-2">
                {sum}$
              </div>
              <button>
                <ProfileIcon width={profileIconWidth} height={profileIconHeight} />
              </button>
            </ul>
          </>
          :

          <div>
            <div className="w-9 h-9 mx-3.5">
              <button onClick={handleMenuToggleClick}>
                <BurgerMenuIcon width="35px" height="35px" />
              </button>
            </div>
            <div>
              <button onClick={handleCartToggleClick}>
                <div className={styles.CartBadgeGroup}>
                  <CartIcon
                    className={`${styles.CartIcon} fixed bottom-10 right-3.5`}
                    width={defaultIconWidth}
                    height={defaultIconHeight}
                  />
                  {cartItems.length > 0 &&
                    <BadgeIcon
                      className={`${styles.BadgeIcon} fixed bottom-16 right-2`}
                      value={cartItemsLength}
                    />
                  }
                </div>
              </button>
            </div>
          </div>
      }
    </nav>
  </div>
}

export default Navbar
