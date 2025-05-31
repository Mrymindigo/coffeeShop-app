
import './Head-swiper.css'
import React from 'react'

export default function HeadSwiper() {
  return (
    <div className='firstSection'>
      <img src="banner-bg.png" alt="background banner" className='bgImg' />
      <div className="contentContainer">
        <img src="banner-img.png" alt="coffee cup" className='bannerImg' />
        <div className="content">
          <h1 className='title'>coffee</h1>
          <span>Tasty Of DozeCafe</span>
          <p>
            more-or-less normal distribution of letters, as opposed to using
          </p>
          <div className="bannerBtn">
            <button className='bannerBtn1'>about us</button>
            <button className='bannerBtn2'>call now</button>
          </div>
        </div>
      </div>

    </div>
  )
}
