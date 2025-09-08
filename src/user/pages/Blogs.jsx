import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { CiCalendar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Blogs = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <div style={{ marginTop: '135px', userSelect: 'none' }} >
        <p className='px-5 d-lg-flex d-none' style={{ color: 'rgba(94, 89, 89, 0.53)', fontSize: '14px' }}><Link to={'/'} className='text-decoration-none' style={{ color: 'rgba(94, 89, 89, 0.53)' }}>HOME</Link> / BLOGS </p>
      </div>

      <div className='px-5'>
        <h3 className='fw-bold'>Blogs</h3>
      </div>

      <Tabs defaultActiveKey="AllBlogs" id="uncontrolled-tab-example" className="mb-3 mt-4 px-5" >

        <Tab eventKey="AllBlogs" title="All">
          <div className='container mt-4' style={{ userSelect: 'none' }}>
            <div className="row mt-4">
              <div className="col-md-4 mb-4" style={{ borderRadius: '20px' }}>
                <div className='w-100'>
                  <img src="https://www.superkicks.in/cdn/shop/articles/3_520x500_520x500_520x500_520x500_520x500_0e705a26-f970-40c4-9ca9-e7db8c5b6b88.jpg?v=1736863966" alt="no img" className='w-100' style={{ borderRadius: '20px 20px 0px 0px ' }} />
                </div>

                <div className='d-flex justify-content-end me-2' style={{ marginTop: '-45px' }}>
                  <h6 className='p-2 w-25 opacity-75 text-center fw-bold' style={{ borderRadius: '30px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>News</h6>
                </div>

                <div className='px-3 py-3  text-dark' style={{ borderRadius: '0px 0px 20px 20px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>
                  <h6 className='fw-bold'>Air Force 1: The Untouchable Classic That Never Fades</h6>
                  <p className='text-secondary'><span className='fs-5 me-2'><CiCalendar /></span>April 03, 2025</p>
                </div>
              </div>

              <div className="col-md-4" style={{ borderRadius: '20px' }}>
                <div className='w-100'>
                  <img src="https://www.superkicks.in/cdn/shop/articles/Banner_520x500_520x500_8a4dcdd1-1f11-4ae0-a5cc-aa46acb09804.png?v=1736863733" alt="" className='w-100' style={{ borderRadius: '20px 20px 0px 0px ' }} />
                </div>
                <div className='px-3 py-3  text-dark' style={{ borderRadius: '0px 0px 20px 20px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>
                  <h6 className='fw-bold'>Air Force 1: The Untouchable Classic That Never Fades</h6>
                  <p className='text-secondary'><span className='fs-5 me-2'><CiCalendar /></span>April 03, 2025</p>
                </div>
              </div>

              <div className="col-md-4" style={{ borderRadius: '20px' }}>
                <div className='w-100'>
                  <img src="https://www.superkicks.in/cdn/shop/articles/3_520x500_520x500_520x500_520x500_520x500_0e705a26-f970-40c4-9ca9-e7db8c5b6b88.jpg?v=1736863966" alt="" className='w-100' style={{ borderRadius: '20px 20px 0px 0px ' }} />
                </div>
                <div className='px-3 py-2  text-dark' style={{ borderRadius: '0px 0px 20px 20px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>
                  <h6 className='fw-bold'>Air Force 1: The Untouchable Classic That Never Fades</h6>
                  <p className='text-secondary'><span className='fs-5 me-2'><CiCalendar /></span>April 03, 2025</p>
                </div>
              </div>

            </div>
          </div>
        </Tab>

        <Tab eventKey="Community" title="Community">
          <div className='container mt-4' style={{ userSelect: 'none' }}>
            <div className="row mt-4">

              <div className="col-md-4 mb-4" style={{ borderRadius: '20px' }}>
                <div className='w-100'>
                  <img src="https://www.superkicks.in/cdn/shop/articles/3_520x500_520x500_520x500_520x500_520x500_0e705a26-f970-40c4-9ca9-e7db8c5b6b88.jpg?v=1736863966" alt="" className='w-100' style={{ borderRadius: '20px 20px 0px 0px ' }} />
                </div>

                <div className='d-flex justify-content-end me-2' style={{ marginTop: '-45px' }}>
                  <h6 className='p-2 w-25 opacity-75 text-center fw-bold' style={{ borderRadius: '30px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>Community</h6>
                </div>

                <div className='px-3 py-3  text-dark' style={{ borderRadius: '0px 0px 20px 20px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>
                  <h6 className='fw-bold'>Air Force 1: The Untouchable Classic That Never Fades</h6>
                  <p className='text-secondary'><span className='fs-5 me-2'><CiCalendar /></span>April 03, 2025</p>
                </div>
              </div>

              <div className="col-md-4" style={{ borderRadius: '20px' }}>
                <div className='w-100'>
                  <img src="https://www.superkicks.in/cdn/shop/articles/Banner_520x500_520x500_8a4dcdd1-1f11-4ae0-a5cc-aa46acb09804.png?v=1736863733" alt="" className='w-100' style={{ borderRadius: '20px 20px 0px 0px ' }} />
                </div>
                <div className='px-3 py-2  text-dark' style={{ borderRadius: '0px 0px 20px 20px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>
                  <h6 className='fw-bold'>Air Force 1: The Untouchable Classic That Never Fades</h6>
                  <p className='text-secondary'><span className='fs-5 me-2'><CiCalendar /></span>April 03, 2025</p>
                </div>
              </div>

            </div>
          </div>
        </Tab>

        <Tab eventKey="News" title="News" >
          <div className='container mt-4' style={{ userSelect: 'none' }}>
            <div className="row mt-4">

              <div className="col-md-4 mb-4" style={{ borderRadius: '20px' }}>
                <div className='w-100'>
                  <img src="https://www.superkicks.in/cdn/shop/articles/3_520x500_520x500_520x500_520x500_520x500_0e705a26-f970-40c4-9ca9-e7db8c5b6b88.jpg?v=1736863966" alt="" className='w-100' style={{ borderRadius: '20px 20px 0px 0px ' }} />
                </div>

                <div className='d-flex justify-content-end me-2' style={{ marginTop: '-45px' }}>
                  <h6 className='p-2 w-25 opacity-75 text-center fw-bold' style={{ borderRadius: '30px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>News</h6>
                </div>

                <div className='px-3 py-3  text-dark' style={{ borderRadius: '0px 0px 20px 20px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>
                  <h6 className='fw-bold'>Air Force 1: The Untouchable Classic That Never Fades</h6>
                  <p className='text-secondary'><span className='fs-5 me-2'><CiCalendar /></span>April 03, 2025</p>
                </div>
              </div>

            </div>
          </div>
        </Tab>

      </Tabs>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Blogs