import React from 'react'
import { MdBookmarkBorder } from "react-icons/md";
import { CgChevronDoubleRight } from "react-icons/cg";
import { IoShirt } from "react-icons/io5";
import { Link } from 'react-router-dom';

const HomeApparels = () => {
  return (
    <div>
         <div style={{userSelect:'none'}}>
            <div className='d-flex align-items-center mb-5' style={{ paddingLeft: '55px', paddingTop: '65px' }}>
                <div className='d-flex justify-content-center align-items-center me-4' style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(199, 199, 203, 0.47)' }}>
                    <IoShirt className='fs-1'/>
                </div>
                <div>
                    <h6 className='fw-light' style={{ color: 'rgba(94, 89, 89, 0.53)' ,textTransform:'uppercase'}}>Born to Wear</h6>
                    <h3>Apparels</h3>
                    <h6 style={{ color: 'rgba(94, 89, 89, 0.53)' }}>Largest Collection of Global Hype Brands</h6>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-5 " style={{ cursor: 'pointer' }}>
                        <div className='d-flex flex-column align-items-center maincardDiv' style={{ borderRadius: '20px' }}>
                            <div className=' mb-3 mt-2 cardImg' style={{ height: '340px', width: '290px', borderRadius: '20px', transition: 'all 0.8s' }}>
                                <img style={{ height: '340px', width: '290px', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/3-2025-08-05T170844.176.jpg?v=1754394119&width=600" alt="no img" />
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

                    <div className="col-md-3">

                        <div className='d-flex flex-column align-items-center maincardDiv' style={{ borderRadius: '20px' }}>
                            <div className=' mb-3 mt-2 cardImg' style={{ height: '340px', width: '290px', borderRadius: '20px', transition: 'all 0.8s' }}>
                                <img style={{ height: '340px', width: '290px', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/1_d24741ab-0e6c-4aac-9c7b-719a40c2b12d.jpg?v=1742914393&width=600" alt="no img" />
                            </div>
                            <div className='w-100 text-center'>
                                <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                                <h6>GEL-QUANTUM 360 VIII</h6>
                                <p>ILLUMINATE YELLOW/BLACK</p>
                                <p> 7899</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">

                        <div className='d-flex flex-column align-items-center maincardDiv' style={{ borderRadius: '20px' }}>
                            <div className=' mb-3 mt-2 cardImg' style={{ height: '340px', width: '290px', borderRadius: '20px', transition: 'all 0.8s' }}>
                                <img style={{ height: '340px', width: '290px', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
                            </div>
                            <div className='w-100 text-center'>
                                <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                                <h6>GEL-QUANTUM 360 VIII</h6>
                                <p>ILLUMINATE YELLOW/BLACK</p>
                                <p>$ 7899</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">

                        <div className='d-flex flex-column align-items-center maincardDiv' style={{ borderRadius: '20px' }}>
                            <div className=' mb-3 mt-2 cardImg' style={{ height: '340px', width: '290px', borderRadius: '20px', transition: 'all 0.8s' }}>
                                <img style={{ height: '340px', width: '290px', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
                            </div>
                            <div className='w-100 text-center'>
                                <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                                <h6>GEL-QUANTUM 360 VIII</h6>
                                <p>ILLUMINATE YELLOW/BLACK</p>
                                <p>$ 7899</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">

                        <div className='d-flex flex-column align-items-center maincardDiv' style={{ borderRadius: '20px' }}>
                            <div className=' mb-3 mt-2 cardImg' style={{ height: '340px', width: '290px', borderRadius: '20px', transition: 'all 0.8s' }}>
                                <img style={{ height: '340px', width: '290px', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
                            </div>
                            <div className='w-100 text-center'>
                                <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                                <h6>GEL-QUANTUM 360 VIII</h6>
                                <p>ILLUMINATE YELLOW/BLACK</p>
                                <p>$ 7899</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3">

                        <div className='d-flex flex-column align-items-center maincardDiv' style={{ borderRadius: '20px' }}>
                            <div className=' mb-3 mt-2 cardImg' style={{ height: '340px', width: '290px', borderRadius: '20px', transition: 'all 0.8s' }}>
                                <img style={{ height: '340px', width: '290px', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
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

            <div className='d-flex justify-content-center align-items-center mt-5'>
                <Link to={'/apparels'} className='text-decoration-none text-black'><h5>LOAD MORE...</h5></Link>
                <h3 style={{ marginTop: '-5px' }}><CgChevronDoubleRight className='arrowEffect text-primary' /></h3>
            </div>
        </div>
    </div>
  )
}

export default HomeApparels