import React, { useEffect } from 'react';

import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';
import TextDivider from '../components/TextDivider';

const About = () => {
  useEffect(() => {
    document.title = 'About #Co-Caring'
  })

  const pStyle = {
    width: '63%'
  }

  return (
    <>
      <TopBanner 
        title = "About Us"
        copy = "#Co-caring brings people together for greater impact."
        button = {false}
        imgClass = 'aboutUs'
      />

      {/* <TextSection title='Our Story' width='65rem'>
        
        <p>The #Co-Caring Dashboard tracks and projects future growth in the county or community’s COVID-19 death rate, currently the most accurate data point for tracking COVID-19. The team building the #Co-Caring Dashboard are participants in the March 2020 Pandemic Response Hackathon organized by Devpost.</p>
        <p>Created in alignment with <a href='http://vytality.co'>Vytality Health’s</a> #Co-Caring movement. We are all caregivers and care receivers. Our current situation calls us to both. And in a crisis, efforts like neighbors helping neighbors, to organizations working with citizens and each other -- are often not scalable and disjointed. </p>
        <p>Vytality #co-caring brings good people, good leaders and good info together for greater impact. We&#39;re also building an app to ease communication.</p>
      </TextSection> */}

      <TextSection title='Our Story'>
        <p style={{pStyle}}>The #Co-Caring Dashboard tracks COVID-19 spread in counties and states, and was created in alignment with Vytality Health’s #Co-Caring movement.</p>
        <p style={{pStyle}}>We are all caregivers and care receivers. As private individuals and as organizations, we are called to both roles. And in a crisis, efforts -- like neighbors helping neighbors, to organizations working with citizens and other organizations -- are often not scalable. Vytality #Co-Caring brings good people, leaders and info together for greater impact, and we're building a mobile app to ease communication. Check out <a href='http://vytality.co'>http://vytality.co</a> for more information.</p>
        <p style={{pStyle}}>And please, stay healthy and be well.</p>
      </TextSection>

      <TextDivider/>

    </>
    
  )
}

export default About
