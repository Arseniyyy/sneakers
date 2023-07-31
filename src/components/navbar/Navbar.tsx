import React from 'react'
import cartIcon from 'icons/cart.svg'
import profileIcon from 'icons/profile.svg'
import useMediaQuery from 'hooks/useMediaQuery'
import burgerMenu from 'icons/burgerMenu.svg'
import BurgerMenu from 'components/svgs/BurgerMenu'
import { styled } from 'styled-components'

interface IProps {}

const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  margin-right: 29px;
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :focus {
    border: medium none rgb(111, 255, 176);
    box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
    outline: 0;
  }

  :hover {
    span:nth-of-type(1) {
      width: 33px;
    }

    span:nth-of-type(2) {
      width: 40px;
    }

    span:nth-of-type(3) {
      width: 30px;
    }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 40px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 40px;
    }
  }
`

const Bar = styled.span`
  display: block;
  width: 40px;
  height: 5px;
  margin-bottom: 7px;
  background-color: #fff;
`

const Navbar = (props: IProps) => {
  const iconsStyles = { width: 35, height: 35 }
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

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
            <button>
              {/* <img src={burgerMenu} alt="burger" /> */}
              <BurgerMenu width="35px" height="35px" fill="#000000" />
            </button>
          </div>
      }
    </nav>
  </div>
}

export default Navbar
