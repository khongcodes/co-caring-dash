import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import "../styles/modalmenu.scss"
import layoutStyles from "../styles/layout.module.scss";

const Burger = ({toggleMenu}) => (
  <div 
    className = {layoutStyles.burger}
    onClick = {toggleMenu}
  >
    <div/>
    <div/>
    <div/>
  </div>
)

const SideMenu = ({ toggleMenu, menuActive, children }) => (
  <>
    <CSSTransition
      in={menuActive}
      timeout={200}
      classNames="side-menu"
    >
      <div className="side-menu">
        {/* <ul> */}
          <li>link 1</li>
          <li>link 2</li>
        {/* </ul> */}
      </div>
    </CSSTransition>
    
    <CSSTransition
      in={menuActive}
      timeout={200}
      classNames="dark-modal"
    >
      <div onClick={ toggleMenu }/>
    </CSSTransition>
  </>
)

const Header = ({ toggleMenu }) => (
  <div className={layoutStyles.header}>
    <Burger toggleMenu={toggleMenu} />
    
    <div className={layoutStyles.titleContainer}>
      <h1>Co-Caring</h1>
    </div>
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
      <Header toggleMenu={toggleMenu} />

      <SideMenu 
        menuActive={menuActive}
        toggleMenu={toggleMenu}
      />

      <main>{children}</main>
    </>
  )
}

export default Layout