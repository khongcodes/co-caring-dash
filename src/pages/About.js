import React, { useEffect } from 'react';

// import copy from '../data/copy.js';
// import CopyFormatter from '../components/CopyFormatter';


const About = () => {
  useEffect(() => {
    document.title = 'About Co-Caring'
  })

  return (
    <div className='paragraphContainer'>
      <h2>About Us</h2>
      <p>The #Co-Caring Dashboard tracks and projects future growth in the county or community’s COVID-19 death rate, currently the most accurate data point for tracking COVID-19. The team building the #Co-Caring Dashboard are participants in the March 2020 Pandemic Response Hackathon organized by Devpost.</p>
      <p>Created in alignment with Vytality Health’s #Co-Caring movement. We are all caregivers and care receivers. Our current situation calls us to both. And in a crisis, efforts like neighbors helping neighbors, to organizations working with citizens and each other -- are often not scalable and disjointed. Vytality #co-caring brings good people, good leaders and good info together for greater impact. We&#39;re also building an app to ease communication.</p>
      
    </div>
  )
}

export default About
