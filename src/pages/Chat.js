import React, { useEffect } from 'react';

import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';

import '../styles/global.scss';

const Chat = () => {
  useEffect(() => {
    document.title = '#Co-Caring Chat'
  })

  return (
    <>
      <TopBanner 
        title = "Chat"
        copy = "Connect with your #Co-Caring community."
        button = {false}
        imgClass = 'aboutUs'
      />

      <TextSection title='Connect'>
        <p style={{textAlign: 'center', marginTop: '3rem'}}>
          <a href='https://facebook.com/groups/cocaring' target='_blank' rel="noopener noreferrer">
            Facebook
          </a>

          &nbsp;|&nbsp;

          <a href='https://www.reddit.com/r/vytality/' target='_blank' rel="noopener noreferrer">
            Reddit
          </a>
        </p>
      </TextSection>
    </>
  )
}

export default Chat