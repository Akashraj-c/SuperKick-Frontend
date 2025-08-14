import React from 'react'
import Header from '../components/Header'
import { FaBasketball } from 'react-icons/fa6';
import dropCult from '../../assets/drop.svg'
import RippleGrid from '../../ReactBits/RippleGrid/RippleGrid';
import HomeCarousel from '../components/HomeCarousel';
import CurvedLoop from '../../ReactBits/CurvedLoop/CurvedLoop';
import HomeBrand from '../components/HomeBrand';
import HomeTrending from '../components/HomeTrending';
import HomeSneakers from '../components/HomeSneakers';

const UserHome = () => {
  return (
    <>
      <Header />

      {/* infinite scroll */}
      {/* <marquee className='bg-black text-white' behavior="" direction="left" style={{ marginTop: '100px' }} >
        <div className='d-flex align-items-center' style={{ height: '30px' }}>
          <ul className='list-unstyled d-flex mt-3' style={{ fontSize: '14px' }}>
            <li className='me-4 fw-bold' style={{ color: '#e1e7eaff' }}>ASIA'S #1 HYPE AND LUXURY APP</li>
            <li className='me-4' style={{ color: '#e1e7eaff' }}><FaBasketball /></li>
            <li className='me-4 fw-bold' style={{ color: '#e1e7eaff' }}>GLOBALLY RECOGNISED AUTHENTICATION CERTIFICATE</li>
            <li className='me-4' style={{ color: '#e1e7eaff' }}><FaBasketball /></li>
            <li className='me-4 fw-bold' style={{ color: '#e1e7eaff' }}>SHARK SALE IS LIVE - GET UPTO 70% OFF</li>
            <li className='me-4' style={{ color: '#e1e7eaff' }}><FaBasketball /></li>
            <li className='me-4 fw-bold' style={{ color: '#e1e7eaff' }}>WORLD'S LARGEST COLLECTION OF LEGIT DRIP</li>
          </ul>
        </div>
      </marquee> */}
       <div className='w-100 z-1' style={{position:'fixed'}}>
          <CurvedLoop
            marqueeText="ASIA'S #1 HYPE AND LUXURY APP    ✦    GLOBALLY RECOGNISED AUTHENTICATION CERTIFICATE    ✦    SHARK SALE IS LIVE - GET UPTO 70% OFF    ✦    WORLD'S LARGEST COLLECTION OF LEGIT DRIP "
            speed={1}
            curveAmount={0}
            direction="left"
            interactive={true}
            className="custom-text-style "
          />
       </div>

      {/* carousel */}
      <HomeCarousel />

      {/* Ripple Grid  */}
      <div>
        <div style={{ position: 'relative', height: '270px', overflow: 'hidden', marginTop: '-20px' }}>
          <RippleGrid
            enableRainbow={false}
            gridColor="#f30909ff"
            rippleIntensity={0.05}
            gridSize={10}
            gridThickness={100}
            vignetteStrength={5}
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
            opacity={0.6}
            gridRotation={10}
          />
        </div>
        <div className='d-flex flex-column w-100 align-items-center justify-content-center' style={{ marginTop: '-180px' }}>
          <img className='dropimg' src={dropCult} alt="" />

          <h6 className='mt-4 fw-light' style={{fontSize:'18px'}}>Hottest Drip Around The World.Refreshed Daily.</h6>
        </div>
      </div>

      {/* brand section*/}
      <HomeBrand />

      {/* New & Trending */}
      <HomeTrending/>

      {/* Sneaker Section */}
      <HomeSneakers/>
    </>
  )
}

export default UserHome