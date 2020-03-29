import React from 'react'

import textSectionStyles from '../styles/textsectiondivider.module.scss'

const TextSection = ({ title, children, width }) => (
  <div className={textSectionStyles.section} style={{width: width}}>
    <h3>{title}</h3>
    {children}
  </div>
)

export default TextSection