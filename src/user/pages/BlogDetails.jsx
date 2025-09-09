import React, { useEffect, useState } from 'react'
import { RiTimerLine } from "react-icons/ri";
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { getABlogDetailsApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';

const BlogDetails = () => {
    const { id } = useParams()

    const [AblogDetails, setABlogDetails] = useState("")

    const getABlogDetails = async () => {
        const result = await getABlogDetailsApi(id)
        console.log(result);
        if (result.status == 200) {
            setABlogDetails(result.data)
        }
    }

    useEffect(() => {
        getABlogDetails()
    }, [])

    return (
        <>
            {/* Header */}
            <Header />
            <div style={{ marginTop: '140px', userSelect: 'none' }} >
                <p className='px-5 d-lg-flex d-none' style={{ color: 'rgba(94, 89, 89, 0.53)', fontSize: '14px' }}><Link to={'/'} className='text-decoration-none' style={{ color: 'rgba(94, 89, 89, 0.53)' }}>HOME</Link> / BLOGDETAILS </p>
            </div>

            <div className="container-fluid mt-3" style={{ userSelect: 'none' }}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 d-flex flex-column align-items-center">
                        <div className='w-100 d-flex align-items-center justify-content-center'>
                            <img className='w-75' src={`${serverUrl}/uploads/${AblogDetails?.image}`} alt="no img" style={{ borderRadius: '30px' }} />
                        </div>
                        <div className='mt-4'>
                            <h6 className='text-secondary'><span className='me-3'><RiTimerLine /> {new Date(AblogDetails.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" })}</span></h6>

                            <h4 className='fw-bold mt-4'>{AblogDetails?.title}</h4>
                        </div>
                        <div className='mt-3'>
                            <h5>{AblogDetails?.subtitle}</h5>
                            <p className='mt-3' style={{ textAlign: 'justify' }}>{AblogDetails?.description}</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default BlogDetails