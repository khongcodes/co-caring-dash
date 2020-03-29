import React from 'react'

import TopBanner from '../components/TopBanner';

const Resources = () => {
  return (
    <div>
      <TopBanner />

      <div className='paragraphContainer'>
        <h2>Resources</h2>

        <p>Review our tips on how to #shelterinplace. Through establishing routines of exercise, social connection, and inspiration we will get through this time together as a community.</p>
        <ol>
          <li><strong>Exercise</strong> – Seek moments of growth to challenge yourself. Find a workout video online, do some home yoga, or go for a walk around your neighborhood while sticking to the 6 feet apart rule.</li>
          <li><strong>Social Connection</strong> – Just because we’re sheltering doesn’t mean we can’t stay connected. Find new ways to keep in touch with your community and friends. If you’re a texter, hop on the phone for a call. If you miss seeing your friends faces, try out Skype, FaceTime, Facebook Messenger, or Zoom. The options are plenty!</li>
          <li><strong>Inspiration</strong> – In times of crisis, art is more important than ever. Take a virtual tour of your favorite museum, watch a movie you’ve been meaning to see, or start a virtual book club with your community.</li>
        </ol>


      </div>
    </div>
  )
}

export default Resources