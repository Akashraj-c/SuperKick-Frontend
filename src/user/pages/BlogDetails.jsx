import React, { useEffect, useState } from 'react'
import { RiTimerLine } from "react-icons/ri";
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { addCommentsApi, getABlogDetailsApi, getCommentsApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';
import { FaUserCircle } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';

const BlogDetails = () => {
    const { id } = useParams()

    const [AblogDetails, setABlogDetails] = useState("")
    const [commentData, setCommentData] = useState('')
    const [userName, setUserName] = useState("")
    const [token, setToken] = useState("")
    const [allComments, setAllComments] = useState([])
    const [updateStatus, setUpdateStatus] = useState("")

    // Get a blog details
    const getABlogDetails = async () => {
        const result = await getABlogDetailsApi(id)
        // console.log(result);
        if (result.status == 200) {
            setABlogDetails(result.data)
        }
    }

    // Add comments
    const addComment = async () => {
        if (!commentData) {
            toast.info('please add comment')
        }
        else {

            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            const reqBody = { commentData, blogId: id, userName }
            // console.log(reqBody);

            const result = await addCommentsApi(reqBody, reqHeader)
            // console.log(result);

            if (result.status == 200) {
                toast.success('Comment added succesfully')
                setUpdateStatus(result.data)
                setCommentData("")
            }
            else if (result.status == 402) {
                toast.info(result.response.data)
                setCommentData("")
            }
            else {
                toast.error('Something went wrong')
            }
        }
    }

    // get All Comments
    const getAllComments = async () => {
        const result = await getCommentsApi(id)
        console.log(result);
        setAllComments(result.data)
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
            const existingUser = JSON.parse(sessionStorage.getItem('existingUser'))
            setUserName(existingUser.username)
        }

        getABlogDetails()
        getAllComments()
    }, [updateStatus])

    return (
        <>
            {/* Header */}
            <Header />
            <div style={{ marginTop: '140px', userSelect: 'none' }} >
                <p className='px-5 d-lg-flex d-none' style={{ color: 'rgba(94, 89, 89, 0.53)', fontSize: '14px' }}><Link to={'/blogs'} className='text-decoration-none' style={{ color: 'rgba(94, 89, 89, 0.53)' }}>BLOGS</Link> / BLOGDETAILS </p>
            </div>

            <div className="container-fluid mt-3" style={{ userSelect: '' }}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 d-flex flex-column align-items-center">
                        <div className='w-100 d-flex align-items-center justify-content-center'>
                            <img className='w-75' src={`${serverUrl}/uploads/${AblogDetails?.image}`} alt="no img" style={{ borderRadius: '30px' }} />
                        </div>
                        <div className='mt-4  w-100'>
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

            {/* Add Comment Section */}
            {token && <div className='d-flex flex-column align-items-center mt-5'>
                <h4 className='fw-bold mb-4'>Add your Comments</h4>
                <textarea value={commentData} onChange={(e) => setCommentData(e.target.value)} className='form-control w-50 p-3 border border-primary shadow pb-3' placeholder='Add your comment...' rows={4}></textarea>
                <div className='w-50 me-1 d-flex justify-content-center'>
                    <button className='btn btn-primary w-100 mt-2' onClick={addComment}>Add</button>
                </div>
            </div>}

            {/* All comments Section */}
            <div className='d-flex flex-column align-items-center justify-content-center w-100 mt-5'>
                <h4 className='fw-bold mb-4'>Comments ({allComments?.length})</h4>
                {allComments?.length > 0 ?
                    allComments?.map((items, index) => (
                        <div key={index} className='d-flex flex-column align-items-center w-50 py-1 border px-3 shadow border mb-4' style={{ borderRadius: '25px' }}>
                            <div className='w-100 me-1 d-flex align-items-center'>
                                <h6 className='fs-3 me-4' ><FaUserCircle /></h6>
                                <h6>{items?.userName}</h6>
                            </div>
                            <div className='ms-5'>
                                <p style={{ textAlign: 'justify' }}>{items?.comment}</p>
                            </div>
                            <div className='w-100 d-flex justify-content-end px-3'>
                                <span style={{ fontSize: '13px' }}>{new Date(items.updatedAt).toLocaleDateString("en-US", { month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" })}</span>
                            </div>
                        </div>
                    ))
                    :
                    <div className='text-center'>
                        <p>No Comments</p>
                    </div>
                }
            </div>


            {/* Toast container */}
            < ToastContainer position="top-center" autoClose={1000} theme="colored" />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default BlogDetails