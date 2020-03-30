import React, { useEffect } from 'react';

import TextSection from '../components/TextSection';

import loadingSpinner from '../images/src-spinner.gif'

const Reddit = () => {
  useEffect(() => {
    document.title = 'Reddit'
    setTimeout(() => {
      window.location.href = 'https://www.reddit.com/r/vytality/'
    }, 1200)
  })

  return (
    <div style={{paddingTop: '5.25rem'}}>

      <TextSection title='You are being redirected to "https://www.reddit.com/r/vytality/"...'/>

      <div style={{margin: '0 auto', width: 'fit-content', marginTop: '1rem'}} >
        <img src={loadingSpinner} />
      </div>

    </div>
  )
}

export default Reddit