import React from 'react'

const TextSection = ({ title, children, }) => (
  <div className='textSection'>
    <h3>{title}</h3>
    {children}
  </div>
)

export default TextSection