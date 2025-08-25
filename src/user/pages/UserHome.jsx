import React from 'react'
import Header from '../components/Header'
import { FaBasketball } from 'react-icons/fa6';
import dropCult from '../../assets/drop.svg'
import RippleGrid from '../../ReactBits/RippleGrid/RippleGrid';
import HomeCarousel from '../components/HomeCarousel';
import HomeBrand from '../components/HomeBrand';
import HomeTrending from '../components/HomeTrending';
import HomeSneakers from '../components/HomeSneakers';
import Gender from '../components/Gender';
import HomeApparels from '../components/HomeApparels';
import Footer from '../../components/Footer';

const UserHome = () => {
  return (
    <>
      {/* Header */}
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


      {/* carousel */}
      <HomeCarousel />

      {/* Ripple Grid  */}
      <div>

        <RippleGrid
          enableRainbow={false}
          gridColor="#f30909ff"
          rippleIntensity={0.05}
          gridSize={5}
          gridThickness={100}
          vignetteStrength={5}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.6}
          gridRotation={10}
        />

        <div className='d-flex flex-column w-100 align-items-center justify-content-center' style={{ marginTop: '-180px', position: 'relative' }}>
          <img className='dropimg' src={dropCult} alt="" />

          <h6 className='mt-4 fw-light' style={{ fontSize: '18px' }}>Hottest Drip Around The World.Refreshed Daily.</h6>
        </div>
      </div>

      {/* brand section*/}
      <HomeBrand />

      {/* New & Trending */}
      <HomeTrending />

      {/* Gender Selection */}
      <Gender />

      {/* Sneaker Section */}
      <HomeSneakers />

      {/* Apparel Section */}
      <HomeApparels />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default UserHome