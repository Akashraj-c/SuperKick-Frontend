import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { CiCalendar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { getAllBlogApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';
import Spinner from 'react-bootstrap/Spinner';

const Blogs = () => {
  const [AllBlogs, setAllBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Get All Blogs
  const getAllBlogs = async () => {
    const result = await getAllBlogApi()
    // console.log(result);
    setTimeout(() => {
      setAllBlogs(result.data)
      setIsLoading(false)
    }, 500)
  }

  useEffect(() => {
    getAllBlogs()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Header */}
      <Header />

      <div style={{ marginTop: '140px', userSelect: 'none' }} >
        <p className='px-5 d-lg-flex d-none' style={{ color: 'rgba(94, 89, 89, 0.53)', fontSize: '14px' }}><Link to={'/'} className='text-decoration-none' style={{ color: 'rgba(94, 89, 89, 0.53)' }}>HOME</Link> / BLOGS </p>
      </div>

      <div className='px-5'>
        <h3 className='fw-bold'>Blogs</h3>
      </div>

      <Tabs defaultActiveKey="AllBlogs" id="uncontrolled-tab-example" className="mb-3 mt-4 px-5" style={{ userSelect: 'none' }}>
        {/* all blogs */}
        <Tab eventKey="AllBlogs" title="All">
          {isLoading ?
            <div className='col-md-9 mainCol d-flex justify-content-center mt-5 px-5 py-5 w-100'>
              <Spinner animation="border" variant="primary" />
            </div>
            :
            <div className='container mt-4' style={{ userSelect: 'none' }}>
              <div className="row mt-4">

                {AllBlogs?.length > 0 ?
                  AllBlogs?.map((item, index) => (

                    <div key={index} className="col-md-4 mb-4" style={{ borderRadius: '20px', cursor: 'pointer' }}>
                      <Link to={`/blogdetails/${item?._id}`} className='text-decoration-none'>
                        <div className='w-100'>
                          <img src={`${serverUrl}/uploads/${item?.image}`} alt="no img" className='w-100' style={{ borderRadius: '20px 20px 0px 0px ' }} />
                        </div>

                        <div className='d-flex justify-content-end me-2' style={{ marginTop: '-45px' }}>
                          <h6 className='p-2 opacity-75 text-center fw-bold' style={{ borderRadius: '30px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>{item?.category}</h6>
                        </div>

                        <div className='px-3 py-3  text-dark' style={{ borderRadius: '0px 0px 20px 20px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>
                          <h6 className='fw-bold'>{item?.title.slice(0, 45)}...</h6>
                          <p className='text-secondary'><span className='fs-5 me-2'><CiCalendar /></span>{new Date(item.updatedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                          })}</p>
                        </div>
                      </Link>
                    </div>
                  ))

                  :
                  <div className='w-100 d-flex align-items-center justify-content-center'>
                    <div className='w-50'>
                      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/search-not-found-5342748-4468820.png" alt="no img" width={'50%'} />
                    </div>
                  </div>
                }

              </div>
            </div>
          }
        </Tab>

        {/* Community blogs */}
        <Tab eventKey="Community" title="Community">
          <div className='container mt-4' style={{ userSelect: 'none' }}>
            <div className="row mt-4">

              {AllBlogs?.filter((item) => item?.category == 'Community').length > 0 ?
                AllBlogs?.filter((item) => item?.category == 'Community').map((items, index) => (
                  <div key={index} className="col-md-4 mb-4" style={{ borderRadius: '20px', cursor: 'pointer' }}>
                    <Link to={`/blogdetails/${items?._id}`} className='text-decoration-none'>
                      <div className='w-100'>
                        <img src={`${serverUrl}/uploads/${items?.image}`} alt="no img" className='w-100' style={{ borderRadius: '20px 20px 0px 0px ' }} />
                      </div>

                      <div className='d-flex justify-content-end me-2' style={{ marginTop: '-45px' }}>
                        <h6 className='p-2 w-25 opacity-75 text-center fw-bold' style={{ borderRadius: '30px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>{items?.category}</h6>
                      </div>

                      <div className='px-3 py-3  text-dark' style={{ borderRadius: '0px 0px 20px 20px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>
                        <h6 className='fw-bold'>{items?.title}</h6>
                        <p className='text-secondary'><span className='fs-5 me-2'><CiCalendar /></span>{new Date(items.updatedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "2-digit"
                        })}</p>
                      </div>
                    </Link>
                  </div>
                ))
                :
                <div className='w-100 d-flex align-items-center justify-content-center'>
                  <div className='w-50'>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/search-not-found-5342748-4468820.png" alt="no img" width={'50%'} />
                  </div>
                </div>
              }

            </div>
          </div>
        </Tab>

        {/* News blogs */}
        <Tab eventKey="News" title="News" >
          <div className='container mt-4' style={{ userSelect: 'none' }}>
            <div className="row mt-4">

              {AllBlogs?.filter((item) => item?.category == 'News').length > 0 ?
                AllBlogs?.filter((item) => item?.category == 'News').map((items, index) => (
                  <div key={index} className="col-md-4 mb-4" style={{ borderRadius: '20px', cursor: 'pointer' }}>
                    <Link to={`/blogdetails/${items?._id}`} className='text-decoration-none'>
                      <div className='w-100'>
                        <img src={`${serverUrl}/uploads/${items?.image}`} alt="no img" className='w-100' style={{ borderRadius: '20px 20px 0px 0px ' }} />
                      </div>

                      <div className='d-flex justify-content-end me-2' style={{ marginTop: '-45px' }}>
                        <h6 className='p-2 w-25 opacity-75 text-center fw-bold' style={{ borderRadius: '30px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>{items?.category}</h6>
                      </div>

                      <div className='px-3 py-3  text-dark' style={{ borderRadius: '0px 0px 20px 20px', backgroundColor: 'rgba(229, 227, 235, 1)' }}>
                        <h6 className='fw-bold'>{items?.title}</h6>
                        <p className='text-secondary'><span className='fs-5 me-2'><CiCalendar /></span>{new Date(items.updatedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "2-digit"
                        })}</p>
                      </div>
                    </Link>
                  </div>
                ))
                :
                <div className='w-100 d-flex align-items-center justify-content-center'>
                  <div className='w-50'>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/search-not-found-5342748-4468820.png" alt="no img" width={'50%'} />
                  </div>
                </div>
              }

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