import React, { useEffect } from 'react';

import Iframe from '../components/Iframe';
import TableauViz from '../components/TableauViz';

const Home = () => {
  useEffect(() => {
    document.title = 'Co-Caring'
  })
  
  return (
    <div>
      Home page
      {/* <Iframe 
        src = "https://my-shiny-app-creation.shinyapps.io/TrendChart/"
        frameborder = "0"
        width = "100%"
        height = "850px"
        title = 'shinytrendchart'
      /> */}

      {/* <TableauViz /> */}
    </div>
  )
}

export default Home