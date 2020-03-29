import React, { useEffect } from 'react';

import TableauViz from '../components/TableauViz';

const Home = () => {
  useEffect(() => {
    document.title = 'Co-Caring'
  })
  
  return (
    <>
      <div className='paragraphContainer'>
        <h2>Mission Statement</h2>
        <p>We are all caregivers and care receivers. Our current situation calls us to both. And in a crisis, efforts like neighbors helping neighbors, to organizations working with citizens and each other -- are often not scalable and disjointed. In response to the ongoing challenge to track the spread of COVID-19, we have created the #Co-Caring Dashboard which projects future coronavirus growth in the local California community.</p>
      </div>

      {/* <TableauViz /> */}
    </>
  )
}

export default Home