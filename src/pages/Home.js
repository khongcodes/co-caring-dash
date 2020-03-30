import React, { useEffect } from 'react';

import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';
import TextDivider from '../components/TextDivider';
import Dashboard from '../components/Dashboard';

const Home = () => {
  useEffect(() => {
    document.title = 'Co-Caring'
  })
  
  return (
    <>
      <TopBanner 
        title = "Co-Caring"
        copy = "We are bringing people together for positive impact in response to the novel coronavirus."
        button = {true}
        imgClass = 'home'
      />
      
      <TextSection title='Mission Statement'>
        <p>We are all caregivers and care receivers. As private individuals and as organizations, our current situation calls us to both. And in a crisis, efforts -- like neighbors helping neighbors, to organizations working with citizens and other organizations -- are often not scalable. In response to the ongoing challenge to track the spread of COVID-19 and to connect individuals, organizations and communities who want to help, we have created the #Co-Caring Dashboard.</p>
      </TextSection>

      <TextDivider />


      <Dashboard />

      {/* <TableauViz /> */}
    </>
  )
}

export default Home