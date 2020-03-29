import React from 'react'

import TableauViz from './TableauViz';
import placeholder from '../images/placeholder-tableau.png'

import dashboardStyles from '../styles/dashboard.module.scss';

const Dashboard = () => {
  return (
    <div>
      

      <div className={dashboardStyles.vizGrid}>
        
        {/* <img src={placeholder}
          style={{width: '100%'}}
        />         */}

        <TableauViz />

      </div>
    </div>
  )
}

export default Dashboard