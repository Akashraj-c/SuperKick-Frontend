import React, { useEffect, useState } from 'react'
import { RiTimerLine } from "react-icons/ri";
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import { getABlogDetailsApi } from '../../services/allApi';

const BlogDetails = () => {
    const { id } = useParams()

    const [blogDetails, setBlogDetails] = useState("")
    
    const getABlogDetails = async () => {
        const result = await getABlogDetailsApi({ id })
        console.log(result);
        if (result.status == 200) {
            setBlogDetails(result.data)
        }
    }

    useEffect(() => {
        getABlogDetails()
    }, [])

    return (
        <>
            {/* Header */}
            <Header />

            <div className="container-fluid" style={{ marginTop: '140px', userSelect: 'none' }}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 d-flex flex-column align-items-center">
                        <div>
                            <img src="" alt="no img" />
                        </div>
                        <div>
                            <h6 className='text-secondary'><span className='me-3'><RiTimerLine /> date</span></h6>
                            <h4>Title</h4>
                        </div>
                        <div>
                            <h5>subtitle</h5>
                            <p>dghs</p>
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