import React, { useEffect } from 'react';

import TopBanner from '../components/TopBanner';
import Dashboard from '../components/Dashboard';

const Home = () => {
  useEffect(() => {
    document.title = 'Co-Caring'
  })

  const imgProps = {

  }
  
  return (
    <>
      <TopBanner 
        title = "Co-Caring"
        copy = "NOTFINALTEXT Now more than ever, Vytality Health is bringing people together for positive impact in response to the novel coronavirus"
        button = {true}
        bannerClass = 'home'
      />
      
      <Dashboard />

      {/* <TableauViz /> */}
    </>
  )
}

export default Home