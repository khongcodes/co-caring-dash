import React from 'react';

import resourceStyles from '../styles/resources-components.module.scss';

export const TipList = ({children}) => (
  <div className={resourceStyles.tipListContainer}>
    {children}
  </div>
)

export const TipItem = ({imgClass, title, copy, textSide}) => (
  
  <div className={resourceStyles.tipContainer}>
    
    {textSide==='right' ? 
      <>
        <div className={resourceStyles[imgClass]}/>

        <div className={resourceStyles.text} >
          <h4>{title}</h4>
          <p>{copy}</p>
        </div>
      </>
    :
      <>
        <div className={resourceStyles.text} >
          <h4>{title}</h4>
          <p>{copy}</p>
        </div>
        
        <div className={resourceStyles[imgClass]}/>
      </>
    }

  </div>
)

export const TrendingList = ({children}) => (
  <div className={resourceStyles.trendingListContainer}>
    {children}
  </div>
)

export const TrendingItem = ({imgClass, title, copy, url}) => (
  <div className={resourceStyles.trendingItemContainer}>
    <a href={url} target="_blank">
      <div className={resourceStyles[imgClass]}/>

      <h5>{title}</h5>
      <p>{copy}</p>
    </a>
  </div>
)