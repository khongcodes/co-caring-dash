import React from 'react';
import { NavLink } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';
import "../styles/modalmenu.scss"

const SideMenuLink = ({title, destination, toggleMenu}) => {
  return (
    <div className="linkContainer">
      <NavLink 
        to = {destination}
        onClick = {toggleMenu}
      >
        {title}
      </NavLink>
    </div>
  )
}

const SideMenu = ({ toggleMenu, menuActive, children }) => (
  <>
    <CSSTransition
      in={menuActive}
      timeout={200}
      classNames="side-menu"
    >
      <div className="side-menu">

        <SideMenuLink
          toggleMenu = {toggleMenu}
          title = "Home"
          destination = "/"
        />

        <SideMenuLink
          toggleMenu = {toggleMenu}
          title = "About Us"
          destination = "/about"
        />

        <SideMenuLink
          toggleMenu = {toggleMenu}
          title = "Dashboard"
          destination = "/dashboard"
        />

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

export default SideMenu