import React from 'react';
import { Link } from 'react-router-dom';

import topBannerStyles from '../styles/topbanner.module.scss';

const TopBanner = ({title, copy, button, imgClass}) => {
  
  const handleClick = event => {
    const button = event.target.style;
    button.position='relative'
    button.top='0.1rem'
    setTimeout(()=>{
      button.top='0'
    },100)
  }
  
  return (
    <div className={topBannerStyles.container}>
      
      <div className={topBannerStyles[imgClass]}/>

      <div className={topBannerStyles.textContainer}>
        <h2>{title}</h2>
        <p>{copy}</p>
        
        {button ? 
          <Link to='/about'>
            <button className={topBannerStyles.button}
              onClick = {handleClick}
            >
              LEARN MORE
            </button>
          </Link>
        : <></>
        }
      </div>

    </div>
  )
}

export default TopBanner