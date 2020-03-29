import React from 'react'

import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';
import TextDivider from '../components/TextDivider';
import { TipList, TipItem, TrendingList, TrendingItem } from '../components/ResourcesComponents';

const Resources = () => {
  return (
    <div>
      <TopBanner 
        title = 'Resources'
        copy = 'Review our tips on how to #shelterinplace.'
        button = {false}
        imgClass = 'resources'
      />

      <TextSection title='Resources for You' width='58rem'>
        <p>Through establishing routines of exercise, social connection, and inspiration we will get through this time together.</p>
      </TextSection>

      <TextDivider/>


      <TextSection title='Our Top Tips'/>
      <TipList>
        <TipItem 
          imgClass = 'tip1Exercise'
          title = 'Exercise'
          copy = 'Seek moments of growth to challenge yourself. Find a workout video online, do some home yoga, or go for a walk around your neighborhood while sticking to the 6 feet apart rule.'
          width = '530px'
          textSide = 'right'
        />
        
        {/* <TipItem 
          imgClass = {}
          title = {}
          copy = {}
          textSide = 'left'
        />

        <TipItem 
          imgClass = {}
          title = {}
          copy = {}
          textSide = 'right'
        /> */}
      </TipList>


      <TextSection title="What's Trending"/>
      <TrendingList>
        {/* <TrendingItem 
          imgClass = {}
          title = {}
          copy = {}
          url = {}
        /> */}

        {/* <TrendingItem 
          imgClass = {}
          title = {}
          copy = {}
          url = {}
        />

        <TrendingItem 
          imgClass = {}
          title = {}
          copy = {}
          url = {}
        /> */}
      </TrendingList>
      {/* <ol>
        <li><strong>Exercise</strong> – Seek moments of growth to challenge yourself. Find a workout video online, do some home yoga, or go for a walk around your neighborhood while sticking to the 6 feet apart rule.</li>
        <li><strong>Social Connection</strong> – Just because we’re sheltering doesn’t mean we can’t stay connected. Find new ways to keep in touch with your community and friends. If you’re a texter, hop on the phone for a call. If you miss seeing your friends faces, try out Skype, FaceTime, Facebook Messenger, or Zoom. The options are plenty!</li>
        <li><strong>Inspiration</strong> – In times of crisis, art is more important than ever. Take a virtual tour of your favorite museum, watch a movie you’ve been meaning to see, or start a virtual book club with your community.</li>
      </ol> */}

    </div>
  )
}

export default Resources