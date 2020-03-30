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
    // width: '1000px',
  }

  return (
    <div>
      <TopBanner 
        title = 'Resources'
        copy = 'Review your local support services and our tips on how to #shelterinplace.'
        button = {false}
        imgClass = 'resources'
      />

      <TextSection title='Resources for You'>
        <p>Local resources in your area — public health departments, hospitals, nursing homes and childcare — are available by clicking the menu for your state and zoom to your area. To drag the map over: 
        <ol>
          <li>Click on the arrow in the left menu,</li>
          <li>Click on the crossed arrows, and</li>
          <li>Click on the map and drag!</li>
        </ol>
        Then, hover over a dot to see the name of the institution and contact info.</p>
      </TextSection>

      <div className={vizStyles.viz3Container}>
        <TableauViz vizName='LocationsDashboard?publish=yes' vizOptions={vizOptions3} />
      </div>

      <TextDivider/>


      <TextSection title='Our Top Tips'>
        <p>Through establishing routines of exercise, social connection, and inspiration we will get through this time together.</p>
      </TextSection>
      <TipList>
        <TipItem 
          imgClass = 'tip1Exercise'
          title = 'Exercise'
          copy = 'Seek moments of growth to challenge yourself. Find a workout video online, do some home yoga, or go for a walk around your neighborhood while sticking to the 6 feet apart rule.'
          textSide = 'right'
        />
        
        <TipItem 
          imgClass = 'tip2SocialConnection'
          title = 'Social Connection'
          copy = 'Just because we’re sheltering doesn’t mean we can’t stay connected. Find new ways to keep in touch with your community and friends. If you’re a texter, hop on the phone for a call. If you miss seeing your friends faces, try out Skype, FaceTime, Facebook Messenger, or Zoom. The options are plenty!'
          textSide = 'left'
        />

        <TipItem 
          imgClass = 'tip3Inspiration'
          title = 'Inspiration'
          copy = 'In times of crisis, art is more important than ever. Take a virtual tour of your favorite museum, watch a movie you’ve been meaning to see, or start a virtual book club with your community.'
          textSide = 'right'
        />
      </TipList>


      <TextSection title="What's Trending"/>
      <TrendingList>
        <TrendingItem 
          imgClass = 'trending1'
          title = 'The Right Way to Wash Your Hands'
          copy = 'What the experts are saying.'
          url = 'https://www.cdc.gov/handwashing/when-how-handwashing.html'
        />

        <TrendingItem 
          imgClass = 'trending2'
          title = 'CDC: Stress and Coping'
          copy = 'Need help? Know someone who does?'
          url = 'https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html'
        />

        <TrendingItem 
          imgClass = 'trending3'
          title = 'Coronavirus: The Hammer and the Dance'
          copy = 'What the next 18 months can look like.'
          url = 'https://medium.com/@tomaspueyo/coronavirus-the-hammer-and-the-dance-be9337092b56?fbclid=IwAR0-e2v0Z9_2wN8gnzBCYZwlGpbtW5cygZ62T_7N_G7DBz-jYj6dkdZsxXU'
        />
      </TrendingList>

    </div>
  )
}

export default Resources