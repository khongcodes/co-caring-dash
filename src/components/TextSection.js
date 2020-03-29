import React from 'react'

import textSectionStyles from '../styles/textsectiondivider.module.scss'

const TextSection = ({ title, children, }) => (
  <div className={textSectionStyles.section}>
    <h3>{title}</h3>
    {children}
  </div>
)

export default TextSection