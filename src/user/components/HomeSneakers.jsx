import React, { useContext, useEffect, useState } from 'react'
import { GiConverseShoe } from "react-icons/gi";
import { MdBookmarkBorder } from "react-icons/md";
import { CgChevronDoubleRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { addCartApi, getAllSneakersApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';
import { searhKeyContext } from '../../context/Contextshare';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';

const HomeSneakers = () => {
    const { searchKey, setSearchKey } = useContext(searhKeyContext)

    const [token, setToken] = useState(() => sessionStorage.getItem('token'))
    const [allSneakers, setAllSneakers] = useState([])
    const [productId, setProductId] = useState("")
    const [aProduct, setAProduct] = useState('')
    const [selectedSize, setSelectedSize] = useState("")
    const [show, setShow] = useState(false); //modal for size

    const handleClose = () => setShow(false);
    const handleShow = (item, id) => {
        setShow(true);
        setProductId(id)
        setAProduct(item)
    }

    // get All Sneakers
    const getAllSneakers = async () => {
        const result = await getAllSneakersApi(searchKey)
        // console.log(result);
        if (result.status == 200) {
            setAllSneakers(result.data)
        }
    }

    // Add products to cart
    const handleCart = async () => {
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

    useEffect(() => {
        getAllSneakers()
    }, [searchKey])

    return (

        <>
            <div className='d-flex align-items-center mb-5' style={{ paddingLeft: '55px', paddingTop: '65px', userSelect: 'none' }}>
                <div className='d-flex justify-content-center align-items-center me-4' style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(199, 199, 203, 0.47)' }}>
                    <GiConverseShoe className='fs-1' />
                </div>
                <div>
                    <h6 className='fw-light' style={{ color: 'rgba(94, 89, 89, 0.53)', textTransform: 'uppercase' }}>Asia's Largest Collection</h6>
                    <h3>Sneakers</h3>
                    <h6 style={{ color: 'rgba(94, 89, 89, 0.53)' }}>100% Pre-Authenticated. Express Shipping</h6>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    {allSneakers?.slice(0, 8).map((item, index) => (
                        <div key={index} className="col-md-3 mb-5 col-6" style={{ cursor: 'pointer', userSelect: 'none' }}>
                            <div className='d-flex flex-column align-items-center maincardDiv' style={{ borderRadius: '20px' }}>
                                <Link to={`/productdetails/${item?._id}`} className='text-dark text-decoration-none'>
                                    <div className=' mb-3 mt-2 cardImg'>
                                        <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src={`${serverUrl}/uploads/${item.uploadedImg[0]}`} alt="no img" />
                                    </div>
                                </Link>
                                <div className='w-100 text-center mt-2'>
                                    <div className='d-flex justify-content-around mb-1'>
                                        <p></p>
                                        <h6 style={{ textTransform: 'uppercase' }}>{item?.brand}</h6>
                                        <MdBookmarkBorder onClick={() => handleShow(item, item?._id)} className='fs-5' />
                                    </div>
                                    <Link to={`/productdetails/${item?._id}`} className='text-dark text-decoration-none'>
                                        <h6>{item?.name}</h6>
                                        <p>{item?.color}</p>
                                        <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> {item?.price}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center mt-5' style={{ userSelect: 'none' }}>
                <Link to={'/sneakers'} className='text-decoration-none text-black'><h5>LOAD MORE...</h5></Link>
                <h3 style={{ marginTop: '-5px' }}><CgChevronDoubleRight className='arrowEffect text-primary' /></h3>
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
                    <Button variant="success" onClick={handleCart}>ADD TO CART</Button>
                </Modal.Footer>
            </Modal>

            {/* Toast conatiner */}
            <ToastContainer position="top-center" autoClose={800} transition={Slide} theme="light" />
        </>
    )
}

export default HomeSneakers