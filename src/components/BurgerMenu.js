import React from 'react';
import { NavLink } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import layoutStyles from '../styles/layout.module.scss';
import '../styles/burgermenu.scss';

export const MobileBurger = ({menuActive, toggleMenu}) => (
  <div 
    className = 'burger'
    onClick = {toggleMenu}
  >
    <div/>
    <div/>
    <div/>
  </div>
)

export const BurgerMenu = ({menuActive, toggleMenu}) => (
  <CSSTransition
    in = {menuActive}
    timeout = {200}
    classNames = 'burgerMenu'
  >
    <div className='burgerMenu'>

      <div 
        className = 'burgerMenuExit'
        onClick = {toggleMenu}
      >X</div>

      <p>
        <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive} onClick={toggleMenu}
          to = '/'
        >Dashboard</NavLink>
      </p>
          
      <p>
        <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive} onClick={toggleMenu}
          to = '/chat'
        >Co-Caring Chat</NavLink>
      </p>

      <p>
        <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive} onClick={toggleMenu}
          to = '/resources'
        >Resources</NavLink>
      </p>

      <p>
        <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive} onClick={toggleMenu}
          to = '/about'
        >About Us</NavLink>
      </p>
    </div>
  </CSSTransition>
)