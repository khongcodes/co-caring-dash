import React from 'react'

const RShinyIframe = props => {
  return (
    <div>
      <iframe 
        src={props.src}
        height={props.height}
        width={props.width}
        frameborder="0"
        title={props.title}
      />
    </div>
  )
}

export default RShinyIframe