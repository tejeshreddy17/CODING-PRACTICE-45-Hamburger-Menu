// Write your code here

import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import {HeaderBackground, LinkItemStyle} from './styledComponents'

import './index.css'

const overlayStyles = {
  backgroundColor: 'black',
}

const Header = () => (
  <HeaderBackground>
    <Link to="/">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu />
        </button>
      }
    >
      {close => (
        <>
          <ul className="trail-background">
            <li className="close-button-container">
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose />
              </button>
            </li>
            <li className="links-container">
              <Link className="link-style" onClick={() => close()} to="/">
                <AiFillHome />
                <LinkItemStyle>Home</LinkItemStyle>
              </Link>
              <Link className="link-style" onClick={() => close()} to="/about">
                <BsInfoCircleFill />
                <LinkItemStyle>About</LinkItemStyle>
              </Link>
            </li>
          </ul>
        </>
      )}
    </Popup>
  </HeaderBackground>
)

export default Header
