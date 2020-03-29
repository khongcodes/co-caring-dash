import React from 'react';

// import bannerImage from '../images/homepage-banner.jpg'
import topBannerStyles from '../styles/topbanner.module.scss';

const TopBanner = ({title, copy, button, bannerClass}) => {
  
  
  return (
    <div className={topBannerStyles.container}
      // style={{backgroundImage: "url('../images/testduck.jpg')"}}
    >
      <div className={topBannerStyles[bannerClass]}
      />

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