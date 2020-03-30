import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// import "../styles/modalmenu.scss"
import layoutStyles from "../styles/layout.module.scss";


const Header = () => (
  <div className={layoutStyles.header}>
    
    {/* <div className={layoutStyles.titleContainer}>
      <Link to='/'>
        <h1>Co-Caring</h1>
      </Link>
    </div> */}

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

  </div>
)

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      {/* margin between banner and first textSection is margin-bottom on .container topbanner.module.scss */}

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout