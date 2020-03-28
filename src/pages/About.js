import React, { useEffect } from 'react';

import copy from '../data/copy.js';
import CopyFormatter from '../components/CopyFormatter';


const About = () => {
  useEffect(() => {
    document.title = 'About Co-Caring'
  })

  return (
    <div className='paragraphContainer'>
      <p>Individuals are coming together to create tools to respond to COVID-19 as part of the Pandemic Response Hackathon. One such tool is the Co-Caring Dashboard, created for citizens of California to get a quick estimate of how non-pharmaceutical interventions (NPIs), such as #shelterinplace, are having an impact on reducing the spread of COVID-19.</p>
      <p>California currently has 3,829 confirmed cases of coronavirus, with a 27.71% change today (831 additional cases). <a href='https://ncov2019.live/data'>https://ncov2019.live/data</a></p>
      <p>In order to slow down the spread of the COVID-19, the best course of action currently available is #shelterinplace, also known as practicing “social distancing” by avoiding public places. You can see the positive impacts of #shelterinplace on reducing the curve here: <a href='https://www.washingtonpost.com/graphics/2020/world/corona-simulator/'>https://www.washingtonpost.com/graphics/2020/world/corona-simulator/</a>.</p>
      <p>The Co-Caring Dashboard displays the local impact of #shelterinplace in each county in LA, by identifying the death rate by date, as this is currently the most accurate data point for tracking COVID-19. The dashboard is created in alignment with Vytality’s #co-caring movement, which aims to bring together community members in times of crisis for greater impact.</p>
      <p>Another initiative of the #co-caring movement is sharing tips on how to #shelterinplace. You can do so effectively through 3 steps: 1) exercise, 2) social connection, and 3) inspiration.</p>
      <p>Vytality Health is a social support platform for co-caring where people can document their health & wellness journeys while sharing deep, authentic support. We help build people’s personalized circles of support so we can all have transformative health and wellness.</p>
      <p>Read about and download the Rapid Response Tool for Coronavirus here at <a href='http://bit.ly/coronavirustool'>http://bit.ly/coronavirustool</a>.</p>

      {/* <CopyFormatter src={copy.pressRelease}/> */}
      
    </div>
  )
}

export default About
