import React from 'react'

import TableauViz from './TableauViz';

import dashboardStyles from '../styles/dashboard.module.scss';

const Dashboard = () => {
  const vizOptions1 = {
    height: '1000px',
    width: '100%'
  }

  const vizOptions2 = {
    height: '900px',
    width: '100%'
  }

  return ( 
    <div>
      <div className={dashboardStyles.vizGrid}>

        <TableauViz vizName='Dashboard1' vizOptions={vizOptions1} />
        <TableauViz vizName='Dashboard2' vizOptions={vizOptions2} />

      </div>
    </div>
  )
}

export default Dashboard