import React from 'react';

// import bannerImage from '../images/homepage-banner.jpg'
import topBannerStyles from '../styles/topbanner.module.scss';

const TopBanner = ({title, copy, button}) => (
  <div className={topBannerStyles.container}
    // style={{backgroundImage: "url('../images/testduck.jpg')"}}
  >
    <div className={topBannerStyles.backgroundImage}/>

    <div className={topBannerStyles.textContainer}>
      <h2>Co-Caring</h2>
      <p>NOTFINALTEXT Now more than ever, Vytality Health is bringing people together for positive impact in response to the novel coronavirus</p>
    </div>

  </div>
)

export default TopBanner