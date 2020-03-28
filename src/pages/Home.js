import React, { useEffect } from 'react';

import Iframe from '../components/Iframe';

const Home = () => {
  useEffect(() => {
    document.title = 'Co-Caring'
  })
  
  return (
    <div>
      Home page
      <Iframe 
        src = "https://my-shiny-app-creation.shinyapps.io/TrendChart/"
        frameborder = "0"
        width = "100%"
        height = "850px"
        title = 'shinytrendchart'
      />
        {/* <iframe id="example1" src="https://gallery.shinyapps.io/goog-trend-index/" style="border: none; width: 100%; height: 850px" frameborder="0"></iframe> */}
    </div>
  )
}

export default Home