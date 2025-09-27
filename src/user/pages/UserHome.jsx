import React, { useContext } from 'react'
import Header from '../components/Header'
import dropCult from '../../assets/drop.svg'
import HomeCarousel from '../components/HomeCarousel';
import HomeBrand from '../components/HomeBrand';
import HomeTrending from '../components/HomeTrending';
import HomeSneakers from '../components/HomeSneakers';
import Gender from '../components/Gender';
import HomeApparels from '../components/HomeApparels';
import Footer from '../../components/Footer';
import WhySuperKicks from '../components/WhySuperKicks';
import Homeblog from '../components/Homeblog';

const UserHome = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* carousel */}
      <HomeCarousel />

      {/* Ripple Grid  */}
      <div className='border '>
        <div className='d-flex flex-column w-100 align-items-center justify-content-center py-5 dropBg'>
          <img className='dropimg' src={dropCult} alt="no img" />
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

      {/* Why superkicks */}
      <WhySuperKicks />

      {/* Blogs */}
      <Homeblog />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default UserHome