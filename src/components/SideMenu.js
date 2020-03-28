import React from 'react';
import { CSSTransition } from 'react-transition-group';

import "../styles/modalmenu.scss"

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

export default SideMenu