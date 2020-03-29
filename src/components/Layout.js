import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// import "../styles/modalmenu.scss"
import layoutStyles from "../styles/layout.module.scss";

const Header = ({ menuActive, toggleMenu }) => (
  <div className={layoutStyles.header}>
    
    <div className={layoutStyles.titleContainer}>
      <Link to='/'>
        <h1>Co-Caring</h1>
      </Link>
    </div>

    <div className={layoutStyles.navLinkContainer}>

    </div>
  </div>
)

const Layout = ({ children }) => {

  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  )
}

export default Layout