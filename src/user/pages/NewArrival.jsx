import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import { MdBookmarkBorder } from 'react-icons/md';
import '../../style/NewArrival.css'
import { FaBarsProgress } from "react-icons/fa6";
import HomeSidebar from '../components/HomeSidebar';

const NewArrival = () => {
  const [filterCollapse, setFilterCollpase] = useState(false)

  return (
    <>
      {/* Header */}
      <Header />

      <div style={{ marginTop: '140px' }} >
        <p className='px-5 d-lg-flex d-none' style={{ color: 'rgba(94, 89, 89, 0.53)', fontSize: '14px' }}><Link to={'/'} className='text-decoration-none' style={{ color: 'rgba(94, 89, 89, 0.53)' }}>HOME</Link> / TRENDING </p>
      </div>

      {/* Sorting dropdown */}
      <div className='d-flex justify-content-between align-items-center px-lg-5 px-2 mt-4 ' >
        <div>
          <h3>Trending</h3>
          <h6 style={{ color: 'rgba(94, 89, 89, 0.53)' }}>Showing All Results</h6>
        </div>

        <div>
          <DropdownButton id="dropdown-basic-button" variant='secondary' title="Sort by : Relavance">
            <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Price : Low to High</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Price : High to Low</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      {/* Menu bar */}
      <div className='w-100 d-flex flex-column justify-content-center align-items-center pt-5 pb-5' style={{ height: '10px' }}>
        <hr style={{ width: '95%' }} />
        <div className='w-100'>
          <button onClick={() => setFilterCollpase(!filterCollapse)} className='btn border bg-black text-white ms-5 d-lg-none' style={{ width: '100px' }}><FaBarsProgress className='text-white' /> Filter</button>
        </div>
      </div>

      {/* Main Container */}
      <div className='container-fluid'>
        <div className='row d-flex'>
          <div className='col-md-3 px-5 d-lg-flex d-none flex-column align-items-center border-end filterCol' style={{ height: '100vh', overflowY: 'auto' }}>
            <HomeSidebar />
          </div>

          {/* filter collapse */}
          {filterCollapse && <div className='col-md-3  px-5 d-lg-none flex-colum filterCol bg-black text-white' style={{ height: '100vh', overflowY: 'auto' }}>
            <HomeSidebar />
          </div>}

          {/* products */}
          <div className='col-md-9 mainCol' style={{ height: '100vh', overflowY: 'auto' }}>
            <div className="container- ">
              <div className="row">
                <div className="col-md-3 mb-3 col-6 " style={{ cursor: 'pointer' }}>
                  <div className='d-flex flex-column r NewmaincardDiv' style={{ borderRadius: '20px' }}>
                    <div className=' mb-3 mt-2 NewcardImg'>
                      <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
                    </div>
                    <div className='w-100 text-center mt-2'>
                      <div className='d-flex justify-content-around mb-1'>
                        <p></p>
                        <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                        <MdBookmarkBorder className='fs-5' />
                      </div>
                      <h6>GEL-QUANTUM 360 VIII</h6>
                      <p>ILLUMINATE YELLOW/BLACK</p>
                      <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> 7,899</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className='d-flex flex-column r NewmaincardDiv' style={{ borderRadius: '20px' }}>
                    <div className=' mb-3 mt-2 NewcardImg'>
                      <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/6_20_d731898b-efbd-42ff-bb6c-75d3bb52a509.jpg?v=1748524954&width=600" alt="no img" />
                    </div>
                    <div className='w-100 text-center'>
                      <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                      <h6>GEL-QUANTUM 360 VIII</h6>
                      <p>ILLUMINATE YELLOW/BLACK</p>
                      <p> 7899</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className='d-flex flex-column align-items-center NewmaincardDiv' style={{ borderRadius: '20px' }}>
                    <div className=' mb-3 mt-2 NewcardImg' >
                      <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/7_12_c3b2c027-2ae5-426c-8058-0bab6deb9c0b.jpg?v=1748524926&width=600" alt="no img" />
                    </div>
                    <div className='w-100 text-center'>
                      <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                      <h6>GEL-QUANTUM 360 VIII</h6>
                      <p>ILLUMINATE YELLOW/BLACK</p>
                      <p>$ 7899</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className='d-flex flex-column align-items-center NewmaincardDiv' style={{ borderRadius: '20px' }}>
                    <div className=' mb-3 mt-2 NewcardImg' >
                      <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
                    </div>
                    <div className='w-100 text-center'>
                      <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                      <h6>GEL-QUANTUM 360 VIII</h6>
                      <p>ILLUMINATE YELLOW/BLACK</p>
                      <p>$ 7899</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className='d-flex flex-column align-items-center NewmaincardDiv' style={{ borderRadius: '20px' }}>
                    <div className=' mb-3 mt-2 NewcardImg' >
                      <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
                    </div>
                    <div className='w-100 text-center'>
                      <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                      <h6>GEL-QUANTUM 360 VIII</h6>
                      <p>ILLUMINATE YELLOW/BLACK</p>
                      <p>$ 7899</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className='d-flex flex-column align-items-center NewmaincardDiv' style={{ borderRadius: '20px' }}>
                    <div className=' mb-3 mt-2 NewcardImg' >
                      <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
                    </div>
                    <div className='w-100 text-center'>
                      <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                      <h6>GEL-QUANTUM 360 VIII</h6>
                      <p>ILLUMINATE YELLOW/BLACK</p>
                      <p>$ 7899</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default NewArrival