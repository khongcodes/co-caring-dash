import React, { useState } from 'react';

import SideMenu from './SideMenu';

import "../styles/modalmenu.scss"
import layoutStyles from "../styles/layout.module.scss";

const Burger = ({menuActive, toggleMenu}) => (
  <div 
    className = { menuActive ? layoutStyles.burgerActive : layoutStyles.burger }
    onClick = {toggleMenu}
  >
    <div/>
    <div/>
    <div/>
  </div>
)

const Header = ({ menuActive, toggleMenu }) => (
  <div className={layoutStyles.header}>
    <Burger 
      menuActive = {menuActive}
      toggleMenu = {toggleMenu} 
    />
    
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
      <Header 
        menuActive = {menuActive}
        toggleMenu = {toggleMenu} 
      />

      <SideMenu 
        menuActive = {menuActive}
        toggleMenu = {toggleMenu}
      />

      <main>{children}</main>
    </>
  )
}

export default Layout