import React from 'react'

import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';
import TextDivider from '../components/TextDivider';
import TableauViz from '../components/TableauViz';
import { TipList, TipItem, TrendingList, TrendingItem } from '../components/ResourcesComponents';

import vizStyles from '../styles/dashboard.module.scss'

const Resources = () => {
  const vizOptions3 = {
    height: '900px',
    width: '1000px',
  }

  return (
    <div>
      <TopBanner 
        title = 'Resources'
        copy = 'Review your local support services and our tips on how to #shelterinplace.'
        button = {false}
        imgClass = 'resources'
      />

      <TextSection title='Resources for You'/>
      <div className={vizStyles.viz3Container}>
        <TableauViz vizName='LocationsDashboard?publish=yes' vizOptions={vizOptions3} />
      </div>

      <TextDivider/>


      <TextSection title='Our Top Tips' width='58rem'>
        <p>Through establishing routines of exercise, social connection, and inspiration we will get through this time together.</p>
      </TextSection>
      <TipList>
        <TipItem 
          imgClass = 'tip1Exercise'
          title = 'Exercise'
          copy = 'Seek moments of growth to challenge yourself. Find a workout video online, do some home yoga, or go for a walk around your neighborhood while sticking to the 6 feet apart rule.'
          width = '530px'
          textSide = 'right'
        />
        
        <TipItem 
          imgClass = 'tip2SocialConnection'
          title = 'Social Connection'
          copy = 'Just because we’re sheltering doesn’t mean we can’t stay connected. Find new ways to keep in touch with your community and friends. If you’re a texter, hop on the phone for a call. If you miss seeing your friends faces, try out Skype, FaceTime, Facebook Messenger, or Zoom. The options are plenty!'
          width = '500px'
          textSide = 'left'
        />

        <TipItem 
          imgClass = 'tip3Inspiration'
          title = 'Inspiration'
          copy = 'In times of crisis, art is more important than ever. Take a virtual tour of your favorite museum, watch a movie you’ve been meaning to see, or start a virtual book club with your community.'
          width = '524px'
          textSide = 'right'
        />
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

    </div>
  )
}

export default Resources