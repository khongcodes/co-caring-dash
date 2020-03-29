import React, { useEffect } from 'react';

import TextSection from '../components/TextSection';

const ChatForum = () => {
  useEffect(() => {
    document.title = 'Chat Forum'
    setTimeout(() => {
      window.location.href = 'https://www.reddit.com/r/vytality/'
    }, 2000)
  })

  return (
    <div>

      <div style={{width: '100%', height: '5.25rem'}}/>

      <TextSection title='You are being redirected to "https://www.reddit.com/r/vytality/"...'/>

    </div>
  )
}

export default ChatForum