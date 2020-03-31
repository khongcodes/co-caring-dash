import React, { useEffect } from 'react'

import TextSection from '../components/TextSection'

const Error404 = () => {
  useEffect(() => {
    document.title = '404 Error - Page not found'
  })

  return (
    <div style={{paddingTop: '5.25rem', textAlign: 'center'}}>

      <TextSection title='404 Error' >
        <p>The page you were looking for could not be found.</p>
      </TextSection>
      
    </div>
  )
}

export default Error404