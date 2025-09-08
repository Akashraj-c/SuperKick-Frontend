import React, { useEffect, useRef } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { GoTrash } from "react-icons/go";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Quill from 'quill';
import Form from 'react-bootstrap/Form';

const AdminBlogs = () => {
    const editorRef = useRef(null)
    const quillRef = useRef(null)

    const [blogDetails, setBlogDetails] = useState({
        image: "",
        title: "",
        subtitle: "",
        description: "",
        category: ""
    })
    console.log(blogDetails);

    const [preview, setPreview] = useState("")
    const [show, setShow] = useState(false); // add new blog modal

    const handleClose = () => { // add new blog modal
        setShow(false);
        quillRef.current = null;
    }
    const handleShow = () => setShow(true); // add new blog modal   

    // handle image upload
    const handleImage = (e) => {
        console.log(e.target.files[0]);
        const url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
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

    useEffect(() => {
        if (show && editorRef.current && !quillRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: "snow",
                placeholder: "Write your blog here...",
            });
        }
    }, [show])

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
                        <table className="table table-hover border">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col" className='border'>Sl.No</th>
                                    <th scope="col" className='border'>Blog Title</th>
                                    <th scope="col" className='border'>No of Comments</th>
                                    <th scope="col" className='border'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-center'>
                                    <th scope="row">1</th>
                                    <td className='border'>Mark</td>
                                    <td className='border'>Otto</td>
                                    <td className='border text-danger'><GoTrash /></td>
                                </tr>

                            </tbody>
                        </table>
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
                            <input value={blogDetails.image} onChange={(e) => handleImage(e)} id='imageFile' type="file" className='d-none' />
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
                        <h6>Blog Description</h6>
                        <div ref={editorRef} style={{ height: '300px' }} ></div>
                        <div className='d-flex justify-content-end mt-2'>
                            <button className='btn btn-success'>Generate With AI</button>
                        </div>
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
                    <Button variant="secondary" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button variant="success">Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AdminBlogs