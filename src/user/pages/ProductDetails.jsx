import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { Link, useParams } from 'react-router-dom';
import { addCartApi, addWishListApi, getAProductDetailsApi, getPrdtTrendingApi, removeProductApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';
import Footer from '../../components/Footer';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { MdBookmarkBorder } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { MdOutlineVerifiedUser } from "react-icons/md";
import { SiSongkick } from 'react-icons/si';
import { BsHouseHeart } from 'react-icons/bs';

const ProductDetails = () => {
    const { id } = useParams()

    const [AproductDetails, setAProductDetails] = useState('')
    const [allImages, setAllImages] = useState([])
    const [mainImg, setMainImg] = useState('')
    const [token, setToken] = useState('')
    const [wishlisted, setWishlisted] = useState(false)
    const [aProduct, setAProduct] = useState('')
    const [productId, setProductId] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    // console.log(selectedSize);
    const [allTrendingPdct, setAllTrendingPdct] = useState([])
    const [show, setShow] = useState(false); //modal for size

    const handleClose = () => setShow(false);
    const handleShow = (item, id) => {
        setShow(true);
        setProductId(id)
        setAProduct(item)
    }

    // Add Trending products to cart
    const handleTrendingCart = async () => {
        if (!token) {
            toast.info('Only Logined user can add products to cart')
        }
        else if (!selectedSize) {
            toast.info('please select a size')
        }
        else {
            const size = selectedSize

            const reqBody = { productId, size }
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }

            const result = await addCartApi(reqBody, reqHeader)
            console.log(result);

            if (result.status == 200) {
                toast.success('Your product has been added to cart')
                setSelectedSize("")
                handleClose()
            }
            else if (result.status == 402) {
                toast.info(result.response.data)
                setSelectedSize("")
            }
            else {
                toast.error('Something went wrong')
            }

        }
    }

    // get details of a particular product
    const getAProduct = async () => {
        const result = await getAProductDetailsApi(id)
        // console.log(result);
        if (result.status == 200) {
            setAProductDetails(result.data)
            setAllImages(result.data.uploadedImg)
            getAllTrending(result.data.category)
        }
    }

    // handle product size
    const handleSize = (size, qty) => {
        // console.log(size, qty);
        setSelectedSize(size)
        if (selectedSize == size) {
            setSelectedSize("")
        }
        else {
            setSelectedSize(size)
        }
    }

    // Add Product to wishlist
    const handleWishList = async (productId) => {
        if (!token) {
            toast('Please login to add this item to your wishlist')
        }
        else {

            const reqHeader = {
                'Authorization': `Bearer ${token}`
            }
            const reqBody = { productId }

            const result = await addWishListApi(reqBody, reqHeader)
            // console.log(result);

            if (result.status == 200) {
                toast.success('Your item has been added')
                setWishlisted(true)
            }
            else if (result.status == 409) {
                toast(result.response.data)
            }
            else {
                toast.error('Something went wrong')
            }
        }
    }

    // Add products to cart
    const handleCart = async (productId) => {
        if (!token) {
            toast.info('Only Logined user can add products to cart')
        }
        else if (!selectedSize) {
            toast.info('please select a size')
        }
        else {
            const size = selectedSize

            const reqBody = { productId, size }
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }

            const result = await addCartApi(reqBody, reqHeader)
            console.log(result);

            if (result.status == 200) {
                toast.success('Your product has been added to cart')
                setSelectedSize("")
            }
            else if (result.status == 402) {
                toast.info(result.response.data)
            }
            else {
                toast.error('Something went wrong')
            }

        }
    }

    // Get all similar products
    const getAllTrending = async (category) => {
        const result = await getPrdtTrendingApi(category)
        console.log(result);
        if (result.status == 200) {
            setAllTrendingPdct(result.data)
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }
        getAProduct()
        window.scrollTo(0, 0); //scroll to the top of the page
    }, [id])

    return (
        <>
            {/* Header */}
            <Header />

            {/* Main Container */}
            <div className="container" style={{ marginTop: '115px', userSelect: 'none' }}>
                <div className="row p-2">
                    <div className="col-md-7 d-flex border rounded p-2">
                        <div className='d-flex flex-column gap-2 align-items-center me-2' style={{ width: '130px' }}>
                            {allImages.slice(0, 4).map((images, index) => (
                                <div key={index} className='w-100 shadow rounded' >
                                    <img onClick={() => setMainImg(images)} className='w-100 d-flex justify-content-center align-items-center' src={`${serverUrl}/uploads/${images}`} alt="no img" style={{ cursor: 'pointer' }} />
                                </div>
                            ))}
                        </div>

                        <div className='shadow rounded'>
                            <img className='w-100 rounded' src={mainImg ? `${serverUrl}/uploads/${mainImg}` : `${serverUrl}/uploads/${allImages[0]}`} alt="no img" />
                        </div>
                    </div>

                    <div className="col-md-5 border px-5 rounded">
                        <div className='d-flex justify-content-between mt-3 mb-2'>
                            <h5 className='text-secondary'>{AproductDetails?.brand}</h5>
                            {!wishlisted ?
                                <FaRegHeart onClick={() => handleWishList(AproductDetails?._id)} style={{ cursor: 'pointer' }} />
                                :
                                <FaHeart className='text-danger' style={{ cursor: 'pointer' }} />
                            }
                        </div>
                        <div>
                            <h3 className='fw-bolder'>{AproductDetails?.name}</h3>
                            <h6 className='text-secondary'>{AproductDetails?.color}</h6>
                            <h6 className='fw-bolder'> <LiaRupeeSignSolid />{AproductDetails?.price} <span className='text-secondary fw-light'>MRP (Inclusive to all taxes)</span></h6>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-secondary text-bolder'>{AproductDetails?.category == 'shoes' ? "Shoe Size (UK)" : "Available sizes"}</h5>

                            <div className='d-flex mt-3' style={{ flexWrap: 'wrap' }}>

                                {AproductDetails?.size &&
                                    Object.entries(AproductDetails.size).map(([label, qty]) => (
                                        <div key={label}>

                                            <button onClick={() => handleSize(label, qty - 1)} className={`border px-4 py-2 bg-white fs-6 border-dark me-3 mb-2 ${qty == 0 ? "opacity-50 disabled" : ""} ${selectedSize == label ? "text-secondary  border-secondary opacity-75" : ""}`} disabled={qty == 0}>
                                                {label}
                                            </button>

                                            {qty == 0 && <p className='text-danger'>out of <br /> stock</p>}
                                        </div>
                                    ))}

                            </div>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-dark w-100 py-2 fs-5' onClick={() => handleCart(AproductDetails?._id)}>Add to Cart</button>
                        </div>
                        <div className='d-flex mt-4 align-items-center justify-content-center'>
                            <div className='px-3 pt-2 rounded me-3 shadow' style={{ backgroundColor: 'rgba(240, 242, 240, 1)' }}>
                                <div className='d-flex justify-content-center align-items-center shadow' style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'rgba(229, 226, 223, 1)' }}>
                                    <h2><MdOutlineVerifiedUser className='text-secondary' /></h2>
                                </div>
                                <p className='text-center mt-1' style={{ fontSize: '15px' }}>Pre <br /> Authenticated</p>
                            </div>

                            <div className='px-3 pt-2 rounded me-3 shadow' style={{ backgroundColor: 'rgba(240, 242, 240, 1)' }}>
                                <div className='d-flex justify-content-center align-items-center shadow' style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'rgba(229, 226, 223, 1)' }}>
                                    <h2><SiSongkick className='text-secondary' /></h2>
                                </div>
                                <p className='text-center mt-1' style={{ fontSize: '15px' }}>Superkicks <br /> Verified</p>
                            </div>

                            <div className='px-3 pt-2 rounded shadow' style={{ backgroundColor: 'rgba(240, 242, 240, 1)' }}>
                                <div className='d-flex justify-content-center align-items-center shadow' style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'rgba(229, 226, 223, 1)' }}>
                                    <h2><BsHouseHeart className='text-secondary' /></h2>
                                </div>
                                <p className='text-center mt-1' style={{ fontSize: '15px' }}>Our <br /> Promise</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar products */}
            <div className='mt-5 px-md-5 px-2'>
                <div>
                    <h3 className='fw-bolder'>You may aslo like</h3>
                </div>

                <div className='d-flex productdetailsTrending ps-5'>

                    {allTrendingPdct.filter((item) => item._id != id).map((items, index) => (
                        <div key={index} className='d-flex flex-column NewmaincardDiv me-4 mt-4' style={{ borderRadius: '20px', cursor: 'pointer' }}>
                            <Link to={`/productdetails/${items?._id}`} className='text-dark text-decoration-none'>
                                <div className=' mb-3 mt-2 NewcardImg'>
                                    <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src={`${serverUrl}/uploads/${items?.uploadedImg[0]}`} alt="no img" />
                                </div>
                            </Link>
                            <div className='w-100 text-center mt-2'>
                                <div className='d-flex justify-content-around mb-1'>
                                    <p></p>
                                    <h6 style={{ textTransform: 'uppercase' }}>{items?.brand}</h6>
                                    <MdBookmarkBorder onClick={() => handleShow(items, items?._id)} className='fs-5' />
                                </div>
                                <Link to={`/productdetails/`} className='text-dark text-decoration-none'>
                                    <h6>{items?.name.slice(0, 20)}...</h6>
                                    <p>{items?.color.slice(0, 25)}</p>
                                    <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span>{items?.price}</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* modal for size */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg' style={{ marginTop: '80px' }}>
                <Modal.Header closeButton closeVariant='white' style={{ backgroundColor: 'rgba(14, 11, 52, 1)' }}>
                    <Modal.Title className='text-white'>Superkicks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='mt-4'>
                        <div className="conatiner-fluid">
                            <div className="row">
                                <div className="col-md-4 col- d-flex justify-content-center align-items-center">
                                    {aProduct &&
                                        <div className='border border-primary shadow' style={{ borderRadius: '20px' }}>
                                            <img src={`${serverUrl}/uploads/${aProduct?.uploadedImg[0]}`} alt="" style={{ borderRadius: '20px', width: '100%' }} className='shadow' />
                                        </div>
                                    }
                                </div>
                                {/* <div className="col-md-1"></div> */}
                                <div className="col-md-6 mt-3 mt-md-0">
                                    <h6>{aProduct?.brand}</h6>
                                    <h5>{aProduct?.name}</h5>
                                    <p>{aProduct?.color}</p>
                                    <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> {aProduct?.price}</p>

                                    <div className='d-flex mt-3'>
                                        {aProduct?.size &&
                                            Object.entries(aProduct?.size).map(([label, qty]) => (
                                                <div key={label}>

                                                    <button onClick={() => handleSize(label, qty - 1)} className={`border px-md-4 px-3 py-2 bg-white fs-6 border-dark me-3 mb-2 ${qty == 0 ? "opacity-50 disabled" : ""} ${selectedSize == label ? "text-secondary  border-secondary opacity-75" : ""}`} disabled={qty == 0}>
                                                        {label}
                                                    </button>

                                                    {qty == 0 && <p className='text-danger'>out of <br /> stock</p>}
                                                </div>
                                            ))}
                                    </div>

                                    <div className='mt-2'>
                                        <Link to={`/productdetails/${aProduct?._id}`}><h6>view Product <IoArrowForwardCircleSharp /></h6></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleTrendingCart}>ADD TO CART</Button>
                </Modal.Footer>
            </Modal>

            {/* Footer */}
            <Footer />

            {/* Toast conatiner */}
            <ToastContainer position="top-right" autoClose={800} transition={Slide} theme="light" />
        </>
    )
}

export default ProductDetails