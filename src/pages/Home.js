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
        copy = "NOTFINALTEXT Now more than ever, Vytality Health is bringing people together for positive impact in response to the novel coronavirus"
        button = {true}
        imgClass = 'home'
      />
      
      <TextSection title='Mission Statement'>
        <p>We are all caregivers and care receivers. Our current situation calls us to both. And in a crisis, efforts like neighbors helping neighbors, to organizations working with citizens and each other -- are often not scalable and disjointed. In response to the ongoing challenge to track the spread of COVID-19, we have created the #Co-Caring Dashboard which projects future coronavirus growth in the local California community.</p>
      </TextSection>

      <TextDivider />


      <Dashboard />

      {/* <TableauViz /> */}
    </>
  )
}

export default Home