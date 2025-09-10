import React, { useEffect } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { GoTrash } from "react-icons/go";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import { addBlogApi, deleteABlogApi, getAllBlogApi, getAllCommentsApi } from '../../services/allApi';
import { Link } from 'react-router-dom';

const AdminBlogs = () => {

    const [blogDetails, setBlogDetails] = useState({
        image: "",
        title: "",
        subtitle: "",
        description: "",
        category: ""
    })
    // console.log(blogDetails);

    const [preview, setPreview] = useState("")
    const [token, setToken] = useState("")
    const [AllBlogs, setAllBlogs] = useState([])
    const [allComments, setAllComments] = useState([])
    const [updateStatus, setUpdateStatus] = useState('')
    const [show, setShow] = useState(false); // add new blog modal

    const handleClose = () => setShow(false); // add new blog modal
    const handleShow = () => setShow(true); // add new blog modal   

    // handle image upload
    const handleImage = (e) => {
        // console.log(e.target.files[0]);
        const url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
        setBlogDetails({ ...blogDetails, image: e.target.files[0] })
    }

    // modal reset
    const handleReset = () => {
        setBlogDetails({
            image: "",
            title: "",
            subtitle: "",
            description: "",
            category: ""
        })
        setPreview("")
    }

    // Add New Blogs
    const handleAddBlog = async () => {
        const { image, title, subtitle, description, category } = blogDetails

        if (!image || !title || !subtitle || !description || !category) {
            toast.info('Fill the from completely')
        }
        else {
            const reqHeader = { "Authorization": `Bearer ${token}` }
            const reqBody = new FormData()
            for (let key in blogDetails) {
                reqBody.append(key, blogDetails[key])
            }
            const result = await addBlogApi(reqBody, reqHeader)
            // console.log(result);
            if (result.status == 200) {
                toast.success('Blog Added successfully')
                setUpdateStatus(result.data)
                handleReset()
                handleClose()
            }
            else if (result.status == 402) {
                toast.info(result.response.data)
            }
            else {
                toast.error('something went wrong')
            }
        }
    }

    // Get All Blogs
    const getAllBlogs = async () => {
        const result = await getAllBlogApi()
        // console.log(result);
        setAllBlogs(result.data)
    }

    // Delete A Blog
    const DeleteABlog = async (id) => {
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await deleteABlogApi(id, reqHeader)
        // console.log(result);
        if (result.status == 200) {
            toast.success('Deleted successfully')
            setUpdateStatus(result.data)
        }
    }

    // get All Comments
    const getAllComments = async () => {
        const result = await getAllCommentsApi()
        console.log(result);
        setAllComments(result.data)
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }

        getAllBlogs()
        getAllComments()
    }, [updateStatus])

    return (
        <>
            {/* header */}
            <AdminHeader />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <AdminSidebar />
                    </div>

                    {/* main container */}
                    <div className="col-md-9">
                        <div className='d-flex justify-content-between align-items-center my-5'>
                            <div></div>
                            <div>
                                <button onClick={handleShow} className='btn btn-success'>Add New Blog</button>
                            </div>
                        </div>

                        {/* Table */}
                        {AllBlogs?.length > 0 ?
                            <div style={{ overflowX: "auto" }}>
                                <table className="table table-hover border">
                                    <thead>
                                        <tr className='text-center'>
                                            <th scope="col" className='border'>Sl.No</th>
                                            <th scope="col" className='border'>Blog Title</th>
                                            <th scope="col" className='border'>Category</th>
                                            <th scope="col" className='border'>No of Comments</th>
                                            <th scope="col" className='border'>Date</th>
                                            <th scope="col" className='border'>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {AllBlogs.map((item, index) => (
                                            <tr key={index} className='text-center'>
                                                <th scope="row">{index + 1}</th>
                                                <td className='border'>{item?.title}</td>
                                                <td className='border'>{item?.category}</td>
                                                <td className='border'><Link to={`/allcomments/${item?._id}`}>{allComments.filter((items) => items.blogId == item?._id).length}</Link></td>
                                                <td className='border'>{new Date(item.updatedAt).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "2-digit"
                                                })}</td>
                                                <td className='border text-danger'><GoTrash onClick={() => DeleteABlog(item._id)} /></td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            :
                            <div className='w-100 d-flex align-items-center justify-content-center'>
                                <div className='w-50 mt-5'>
                                    <img src="https://dld-vip.com/img/empty-product.png" alt="no img" width={'100%'} />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            {/* Modal to add blog */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg'>
                <Modal.Header closeButton style={{ backgroundColor: 'rgba(78, 30, 176, 1)' }}>
                    <Modal.Title className='fw-bold fs-5 text-white'>ADD BLOG</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-5'>
                    {/* Image Upload */}
                    <div className='d-flex flex-column justify-content-center align-items-center mb-2'>
                        <h6 className='fw-bold ps-4'>Upload Images</h6>
                        <label htmlFor="imageFile">
                            <input onChange={(e) => handleImage(e)} id='imageFile' type="file" className='d-none' />
                            <img src={preview ? preview : "https://cdn3.iconfinder.com/data/icons/it-and-ui-mixed-filled-outlines/48/default_image-1024.png"} alt="no img" style={{ width: '100%', height: '200px', borderRadius: '20px' }} />
                        </label>
                    </div>

                    {/* Title */}
                    <div className='mb-3'>
                        <input value={blogDetails.title} onChange={(e) => setBlogDetails({ ...blogDetails, title: e.target.value })} type="text" placeholder='Title' className='form-control' />
                    </div>

                    {/*Sub Title */}
                    <div className='mb-3'>
                        <input value={blogDetails.subtitle} onChange={(e) => setBlogDetails({ ...blogDetails, subtitle: e.target.value })} type="text" placeholder='Sub Title' className='form-control' />
                    </div>

                    {/* Bolg description */}
                    <div className='mb-3'>
                        <textarea value={blogDetails.description} onChange={(e) => setBlogDetails({ ...blogDetails, description: e.target.value })} rows={8} placeholder='Blog Description...' className='form-control'></textarea>
                    </div>

                    {/* Blog Category */}
                    <div>
                        <Form.Select value={blogDetails.category} onChange={(e) => setBlogDetails({ ...blogDetails, category: e.target.value })}>
                            <option >Select Category</option>
                            <option value={'News'}>News</option>
                            <option value={'Community'}>Community</option>
                        </Form.Select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type='button' variant="secondary" onClick={handleReset}>Reset</Button>
                    <Button type='button' variant="success" onClick={handleAddBlog}>Add</Button>
                </Modal.Footer>
            </Modal>

            {/* Toast container */}
            < ToastContainer position="top-center" autoClose={1000} theme="colored" />
        </>
    )
}

export default AdminBlogs