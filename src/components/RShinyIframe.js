import React from 'react'

const RShinyIframe = props => {
  return (
    <div className={props.className} >
      <iframe 
        src={props.src}
        height='100%'
        width='100%'
        frameborder="0"
        title={props.title}
      />
    </div>
  )
}

export default RShinyIframe