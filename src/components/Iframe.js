import React from 'react'

const Iframe = props => {
  return (
    <div>
      <iframe src={props.src} height={props.height} width={props.width} frameborder="0"/>
    </div>
  )
}

export default Iframe