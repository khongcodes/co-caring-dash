import React from 'react';

import topBannerStyles from '../styles/topbanner.module.scss';

const TopBanner = ({title, copy, button, imgClass}) => {
  
  
  return (
    <div className={topBannerStyles.container}>
      
      <div className={topBannerStyles[imgClass]}/>

      <div className={topBannerStyles.textContainer}>
        <h2>{title}</h2>
        <p>{copy}</p>
        
        {button ? 
          <div className={topBannerStyles.button}>
            LEARN MORE
          </div>
        : <></>
        }
      </div>

    </div>
  )
}

export default TopBanner