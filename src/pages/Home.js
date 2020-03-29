import React, { useEffect } from 'react';

import TopBanner from '../components/TopBanner';
import Dashboard from '../components/Dashboard';

const Home = () => {
  useEffect(() => {
    document.title = 'Co-Caring'
  })
  
  return (
    <>
      <TopBanner />
      
      <Dashboard />

      {/* <TableauViz /> */}
    </>
  )
}

export default Home