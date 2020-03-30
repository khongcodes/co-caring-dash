import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';

// import "../styles/modalmenu.scss"
import vytalityLogo from '../images/vytality-logo.png'
import layoutStyles from "../styles/layout.module.scss";

const MobileBurger = ({menuActive, toggleMenu}) => (
  <div 
    className = { menuActive ? layoutStyles.burgerActive : layoutStyles.burger }
    onClick = {toggleMenu}
  >
    <div/>
    <div/>
    <div/>
  </div>
)

// const BurgerMenu = () => (

// )

const Header = ({menuActive, toggleMenu}) => (
  <div className={layoutStyles.header}>
    
    {/* <div className={layoutStyles.titleContainer}>
      <Link to='/'>
        <h1>Co-Caring</h1>
      </Link>
    </div> */}

    <MobileBurger menuActive={menuActive} toggleMenu={toggleMenu}/>

    <div className={layoutStyles.navLinkContainer}>
      <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive}
        to = '/'
      >Dashboard</NavLink>
      
      <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive}
        to = '/reddit'
      >Co-Caring Chat</NavLink>

      <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive}
        to = '/resources'
      >Resources</NavLink>

      <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive}
        to = '/about'
      >About Us</NavLink>
    </div>
  </div>
)

const Footer = () => (
  <div className={layoutStyles.footer}>
    <img src={vytalityLogo} alt='Vytality logo'/>
    <p>info@vytality.co | vytality.co</p>
    <p>© 2020 by Peakfoqus LLC</p>
  </div>
)

const Layout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu = () => {
    console.log(menuActive)
    setMenuActive(!menuActive)
  }

  return (
    <>
      <Header menuActive={menuActive} toggleMenu={toggleMenu}/>
      {/* margin between banner and first textSection is margin-bottom on .container topbanner.module.scss */}

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout