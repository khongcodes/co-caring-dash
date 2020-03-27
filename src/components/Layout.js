import React from 'react';

import layoutStyles from "../styles/layout.module.scss";

const Header = () => (
  <div className={layoutStyles.header}>
    HEADER
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