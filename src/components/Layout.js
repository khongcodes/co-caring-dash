import React, { useState } from 'react';

import layoutStyles from "../styles/layout.module.scss";

const Burger = () => (
  <div 
    className = {layoutStyles.burger}
  >
    <div/>
    <div/>
    <div/>
  </div>
)

const SideMenu = () => (
  <div>
    <ul>
      <li>foo</li>
      <li>bar</li>
    </ul>
  </div>
)

const Header = () => (
  <div className={layoutStyles.header}>
    <Burger />
    
    <div className={layoutStyles.titleContainer}>
      <h1>Co-Caring</h1>
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