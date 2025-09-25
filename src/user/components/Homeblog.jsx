import React, { useEffect, useState } from 'react'
import { getAllBlogApi } from '../../services/allApi'
import { serverUrl } from '../../services/serverUrl'
import { Link } from 'react-router-dom'
import { CgChevronDoubleRight } from 'react-icons/cg'
import { IoShirt } from 'react-icons/io5'
import { GrBlog } from "react-icons/gr";

const Homeblog = () => {
    const [AllBlogs, setAllBlogs] = useState([])

    // Get All Blogs
    const getAllBlogs = async () => {
        const result = await getAllBlogApi()
        console.log(result);
        setAllBlogs(result.data)
    }

    useEffect(() => {
        getAllBlogs()
    }, [])

    return (
        <>
            <div className='d-flex align-items-center mb-5' style={{ paddingLeft: '55px', paddingTop: '65px' }}>
                <div className='d-flex justify-content-center align-items-center me-4 p-3' style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(199, 199, 203, 0.47)' }}>
                    <GrBlog className='fs-1' />
                </div>
                <div>
                    <h6 className='fw-light' style={{ color: 'rgba(94, 89, 89, 0.53)', textTransform: 'uppercase' }}>Trend Talks</h6>
                    <h3>Blogs</h3>
                    <h6 style={{ color: 'rgba(94, 89, 89, 0.53)' }}>Fashion Drops & Culture</h6>
                </div>
            </div>

            {/* main container */}
            <div className="container-fluid mt-5 mb-5" >
                <div className="row mt-4 ">
                    {AllBlogs?.slice(0, 4).map((items, index) => (
                        <div key={index} className="col-md-6 position-relative">
                            <Link to={`/blogdetails/${items?._id}`} className='text-decoration-none text-dark'>
                                <div className='blogDiv border rounded p-1'>
                                    <img src={`${serverUrl}/uploads/${items?.image}`} alt="no img" className='w-100 blogImg rounded' />
                                </div>
                                <h3 className='text-white position-absolute px-1 ms-3' style={{ marginTop: '-80px' }}>{items?.title.slice(0, 50)}...</h3>
                                <div className='mt-2'>
                                    <p style={{ textAlign: 'justify' }} className='px-2'>{items?.description.slice(0, 260)}...</p>
                                </div>
                            </Link>
                            <hr />
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-center align-items-center mt-5' style={{ userSelect: 'none' }}>
                    <Link to={'/blogs'} className='text-decoration-none text-black'><h5>LOAD MORE...</h5></Link>
                    <h3 style={{ marginTop: '-5px' }}><CgChevronDoubleRight className='arrowEffect text-primary' /></h3>
                </div>
            </div>
        </>
    )
}

export default Homeblog