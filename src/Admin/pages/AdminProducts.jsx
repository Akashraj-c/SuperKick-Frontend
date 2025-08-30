import React, { useContext, useEffect } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { IoMdSearch } from 'react-icons/io'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { searhKeyContext } from '../../context/Contextshare';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addProductApi, getAllBrandApi } from '../../services/allApi';
import { FaFolderPlus } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';

const AdminProducts = () => {
    const { searchKey, setSearchKey } = useContext(searhKeyContext)

    const [productDetails, setProductDetails] = useState({
        category: "",
        subcategory: "sneaker",
        brand: "",
        name: "",
        color: "",
        size: {},
        price: "",
        uploadedImg: []
    })
    console.log(productDetails);

    const [allBrands, setAllBrands] = useState([])
    const [preview, setPreview] = useState('')
    const [previewList, setPreviewList] = useState([])
    const [token, setToken] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Get All Brands to show in form 
    const GetAllBrands = async () => {
        const result = await getAllBrandApi(searchKey)
        // console.log(result);
        if (result.status == 200) {
            setAllBrands(result.data)
        }
    }

    // handle image uploads
    const handleImage = (e) => {
        console.log(e.target.files);

        const fileArray = productDetails.uploadedImg
        fileArray.push(e.target.files[0])
        setProductDetails({ ...productDetails, uploadedImg: fileArray })

        const url = URL.createObjectURL(e.target.files[0])
        setPreview(url)

        const newArray = previewList
        newArray.push(url)
        setPreviewList(newArray)
    }

    // handle Upload
    const handleUpload = async () => {
        const { category, subcategory, brand, name, color, size, price, uploadedImg } = productDetails

        if (!category || !subcategory || !brand || !name || !color || !size || !price || uploadedImg.length == 0) {
            toast.info('fill the form completely')
        }
        else {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }

            const reqBody = new FormData()
            for (let key in productDetails) {
                if (key == "size") {
                    reqBody.append("size", JSON.stringify(productDetails.size));  // stringify size
                }
                else if (key == "uploadedImg") {
                    productDetails.uploadedImg.forEach((Item) => {
                        reqBody.append("uploadedImg", Item);
                    });
                }
                else {
                    reqBody.append(key, productDetails[key]);
                }
            }

            const result = await addProductApi(reqBody, reqHeader)
            console.log(result);

            if (result.status == 200) {
                toast.success('Product added successfully')
                handleReset()
            }
            else if (result.status == 402) {
                toast.info(result.response.data)
            }
            else {
                toast.error('something went wrong')
            }
        }
    }

    // handle reset
    const handleReset = () => {
        setProductDetails({
            category: "",
            subcategory: "",
            brand: "",
            name: "",
            color: "",
            size: {},
            price: ""
        })
        setPreview('')
        setPreviewList([])
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }
        GetAllBrands()
    }, [])

    return (
        <>
            {/* header */}
            < AdminHeader />

            {/* main container */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>

                    <div className="col-md-9">
                        <div className='d-flex container justify-content-between px-5 w-100' style={{ marginTop: '80px' }} >
                            <div className='w-100 d-flex align-items-center'>
                                <input type="text" onChange={(e) => setSearchKey(e.target.value)} placeholder='search brand...' className='form-control w-50' />
                                <IoMdSearch style={{ marginLeft: '-30px' }} className='fs-5' />
                            </div>

                            <div className='d-flex w-75 justify-content-end'>
                                <DropdownButton variant='secondary' id="dropdown-basic-button" title={`Sort by : `}>
                                    <Dropdown.Item href="#/action-1">Apparel</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Sneaker</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">A-Z</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Z-A</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Relevance</Dropdown.Item>
                                </DropdownButton>

                                <button className='btn btn-success border ms-3' onClick={handleShow}>Add Products</button>
                            </div>
                        </div>

                        <div className='mt-5' style={{ overflowX: 'scroll' }}>
                            <table className="table table-hover table-success">
                                <thead>
                                    <tr>
                                        <th scope="col">Sl.No</th>
                                        <th scope="col">Brand</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Color</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th style={{ width: '80px' }} scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

            {/* modal to add product */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg'>
                <Modal.Header closeButton className='bg-secondary'>
                    <Modal.Title className='text-white fs-4'>ADD PROUDCTS</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* Category */}
                    <div className="mb-2">
                        <Form.Select value={productDetails?.category} aria-label="Select category" onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })}>
                            <option>Select Category</option>
                            <option value="sneaker">Sneaker</option>
                            <option value="apparel">Apparel</option>
                        </Form.Select>
                    </div>

                    {/* Sub Category */}
                    {productDetails?.category == 'apparel' && <div className="mb-2">
                        <Form.Select value={productDetails?.subcategory} aria-label="Select category" onChange={(e) => setProductDetails({ ...productDetails, subcategory: e.target.value })}>
                            <option>Select Sub Category</option>
                            <option value="Hoodies">Hoodies</option>
                            <option value="T-Shirt">T-Shirt</option>
                            <option value="Sweatshirt">Sweatshirt</option>
                            <option value="Shirt">Shirt</option>
                            <option value="Jacket">Jacket</option>
                        </Form.Select>
                    </div>}

                    {/* Brand */}
                    <div className="mb-2">
                        <Form.Select value={productDetails?.brand} aria-label="Select brand" onChange={(e) => setProductDetails({ ...productDetails, brand: e.target.value })}>
                            <option >Select Brand</option>
                            {allBrands?.map((brand, index) => (
                                <option key={index} value={brand?.brandname}>{brand?.brandname}</option>
                            ))}
                        </Form.Select>
                    </div>

                    {/* Title */}
                    <div className="mb-2">
                        <input value={productDetails?.name} type="text" onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })} placeholder="Title" className="form-control" />
                    </div>

                    {/* Color */}
                    <div className="mb-2">
                        <input value={productDetails?.color} type="text" onChange={(e) => setProductDetails({ ...productDetails, color: e.target.value })} placeholder="Color" className="form-control" />
                    </div>

                    {/* Price */}
                    <div className="mb-2">
                        <input value={productDetails?.price} type="number" onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })} placeholder="Price" className="form-control" />
                    </div>

                    {/* Sizes with Quantity */}
                    <div className="mb-3">
                        <h6 className="fw-bold">Size & Quantity</h6>
                        {productDetails.category == 'sneaker' ? <div className="d-flex gap-2 flex-wrap">
                            {["6", "7", "8", "9", "10", "11"].map((size, index) => (
                                <div key={index} className="d-flex align-items-center border rounded p-2" style={{ width: "110px" }}>
                                    <span className="me-2">UK {size}</span>
                                    <input min={0} type="number" placeholder="Qty" className="form-control" style={{ width: "60px" }} onChange={(e) => setProductDetails({ ...productDetails, size: { ...productDetails.size, [size]: e.target.value } })} value={productDetails.size[size] || ""} />
                                </div>
                            ))}
                        </div>
                            :
                            <div className="d-flex gap-2 flex-wrap">
                                {["S", "M", "L", "XL"].map((size, index) => (
                                    <div key={index} className="d-flex align-items-center border rounded p-2" style={{ width: "110px" }}>
                                        <span className="me-2">{size}</span>
                                        <input min={0} type="number" placeholder="Qty" className="form-control" style={{ width: "60px" }} onChange={(e) => setProductDetails({ ...productDetails, size: { ...productDetails.size, [size]: e.target.value } })} value={productDetails.size[size] || ""} />
                                    </div>
                                ))}
                            </div>
                        }
                    </div>

                    {/* Image Upload */}
                    <div>
                        <div>
                            <h6 className='fw-bold'>Upload Images</h6>
                            <div className='d-flex justify-content-center'>
                                {!preview ? <label htmlFor="imageFile">
                                    <input id='imageFile' type="file" className='d-none' onChange={(e) => handleImage(e)} />
                                    <img src="https://cdn3.iconfinder.com/data/icons/it-and-ui-mixed-filled-outlines/48/default_image-1024.png" alt="no img" style={{ width: '100%', height: '300px' }} />
                                </label>
                                    :
                                    <img src={preview} alt="no img" style={{ width: '50%', height: '200px' }} />
                                }
                            </div>
                        </div>

                        {preview && <div className='d-flex justify-content-center align-items-center mt-2'>
                            {previewList?.map((Item, index) => (
                                <img key={index} src={Item} alt="no img" style={{ width: '80px', height: '80px' }} className='me-2' />
                            ))}


                            {previewList?.length < 5 &&
                                <label htmlFor="imageFile">
                                    <input id='imageFile' type="file" className='d-none' onChange={(e) => handleImage(e)} />
                                    <FaFolderPlus className='fs-4 shadow ms-3' />
                                </label>
                            }
                        </div>}
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={handleReset}>Reset</Button>
                    <Button variant="success" onClick={handleUpload}>Add</Button>
                </Modal.Footer>
            </Modal>

            {/* Toast conatiner */}
            < ToastContainer position="top-center" autoClose={1500} theme="colored" />
        </>
    )
}

export default AdminProducts