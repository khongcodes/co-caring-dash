import React from 'react';

import topBannerStyles from '../styles/topbanner.module.scss';

const TopBanner = ({title, copy, button, imgClass, buttonText}) => {
  
  const handleClick = event => {
    const button = event.target.style;
    button.position='relative'
    button.top='0.1rem'
    setTimeout(()=>{
      button.top='0';
      window.open('https://www.reddit.com/r/vytality/', '_blank');
    },100)
  }
  
  return (
    <div className={topBannerStyles.container}>
      
      <div className={topBannerStyles[imgClass]}/>

      <div className={topBannerStyles.textContainer}>
        <h2>{title}</h2>
        <p>{copy}</p>
        
        {button ? 
          <button className={topBannerStyles.button}
            onClick = {handleClick}
          >
            {buttonText}
          </button>
        : <></>
        }
      </div>

    </div>
  )
}

export default TopBanner