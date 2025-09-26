import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { CgProfile } from 'react-icons/cg'
import { IoBagHandleOutline, IoLocationOutline, IoLogOutOutline } from 'react-icons/io5'
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillThunderbolt } from 'react-icons/ai'
import Modal from 'react-bootstrap/Modal';
import { Slide, toast, ToastContainer } from 'react-toastify'
import { addAddressApi, editaddressApi, getAddressApi, getAllOrderedProductsApi } from '../../services/allApi'
import { MdOutlineEditLocation } from 'react-icons/md'
import { serverUrl } from '../../services/serverUrl'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import { Spinner } from 'react-bootstrap'

const Profile = () => {
    const navigate = useNavigate()

    const [existingUser, setExistingUSer] = useState(() => JSON.parse(sessionStorage.getItem('existingUser')))
    const [token, setToken] = useState(() => sessionStorage.getItem('token'))
    const [myOrder, setMyOrder] = useState(true)
    const [address, setAddress] = useState(false)
    const [addressDetails, setAddressDetails] = useState({
        pincode: "",
        city: "",
        state: "",
        buildingnumber: "",
        completeaddress: "",
        fullname: "",
        phonenumber: ""
    })
    const [addressData, setAddressData] = useState([])
    const [editAddress, setEditAddress] = useState('')
    const [addressId, setAddressId] = useState("")
    const [updateStatus, setUpdateStatus] = useState('')
    const [show, setShow] = useState(false);
    const [allOrders, setAllOrders] = useState([])
    const [collapse, setCollapse] = useState(true)
    const [loading, setLoading] = useState(true)

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setShow(true);
        setEditAddress(item)
        setAddressId(item?._id)
    }

    // handle logout
    const handleLogout = () => {
        if (sessionStorage.getItem('token')) {
            sessionStorage.clear()
            navigate('/login')
        }
    }

    // handle reset address
    const handleReset = () => {
        setAddressDetails({
            pincode: "",
            city: "",
            state: "",
            buildingnumber: "",
            completeaddress: "",
            fullname: "",
            phonenumber: ""
        })
    }

    // handle add address
    const handleSubmit = async () => {
        const { pincode, city, state, buildingnumber, completeaddress, fullname, phonenumber } = addressDetails
        if (!pincode || !city || !state || !buildingnumber || !completeaddress || !fullname || !phonenumber) {
            toast.info('Please Fill the Form Completely')
        }
        else {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            const reqBody = { pincode, city, state, buildingnumber, completeaddress, fullname, phonenumber }
            const result = await addAddressApi(reqBody, reqHeader)
            // console.log(result);
            if (result.status == 200) {
                setUpdateStatus(result.data)
                handleReset()
                handleClose()
            }
            else if (result.status == 402) {
                toast.info(result.data.response)
            }
            else {
                toast.error('Something went wrong')
            }
        }
    }

    // get address data
    const getAddress = async () => {
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getAddressApi(reqHeader)
        // console.log(result);
        if (result.status == 200) {
            setAddressData(result.data)
        }
    }

    // Edit address
    const handleEditAddress = async () => {
        const { pincode, city, state, buildingnumber, completeaddress, fullname, phonenumber } = addressDetails
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const reqBody = { pincode, city, state, buildingnumber, completeaddress, fullname, phonenumber, addressId }

        const result = await editaddressApi(reqBody, reqHeader)
        // console.log(result);
        if (result.status == 200) {
            setUpdateStatus(result.data)
            handleClose()
        }
    }

    // get all ordered products
    const getAllOrders = async () => {

        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getAllOrderedProductsApi(reqHeader)
        // console.log(result);
        if (result.status == 200) {
            setTimeout(() => {
                setAllOrders(result.data)
                setLoading(false)
            }, 500)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        getAddress() //get address
        getAllOrders()//get all ordered products

        if (editAddress) {
            setAddressDetails({
                pincode: editAddress.pincode,
                city: editAddress.city,
                state: editAddress.state,
                buildingnumber: editAddress.buildingnumber,
                completeaddress: editAddress.completeaddress,
                fullname: editAddress.fullname,
                phonenumber: editAddress.phonenumber
            })
        }
    }, [updateStatus, editAddress])

    return (
        <>
            {/* Header */}
            <Header />

            <div className="container-fluid">
                {token ?
                    // main container
                    <div className="row px-5" style={{ marginTop: '170px' }}>
                        <div className="col-md-3" style={{ position: 'sticky', top: '170px', height: '60vh', overflowY: 'auto' }}>
                            <div>
                                {/* User Id */}
                                <div className='d-flex align-items-center justify-content-center border border-primary rounded shadow' style={{ flexWrap: 'wrap' }}>
                                    <div className='me-3 d-flex flex-column align-items-cente pt-2 justify-content-center'>
                                        <h5 className='fw-bold'>Hey, {existingUser?.username} </h5>
                                        <p style={{ fontSize: '15px' }}>Logged with {existingUser?.email}</p>
                                    </div>
                                    <div>
                                        <CgProfile className='fs-1 text-primary' />
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <h5 className='fw-bold'>Account</h5>
                                </div>

                                {/* My orders */}
                                <div className='d-flex align-items-center border-bottom border-secondary mt-4 pb-1'>
                                    <div className='me-3'>
                                        <IoBagHandleOutline className='fs-3' />
                                    </div>
                                    <div onClick={() => (setMyOrder(true), setAddress(false))} style={{ cursor: 'pointer' }}>
                                        <h6>My Orders</h6>
                                        <h6 className='text-secondary' style={{ fontSize: '15px' }}>Track your recent purchase</h6>
                                    </div>
                                    <div className='ms-4' onClick={() => (setMyOrder(true), setAddress(false))} style={{ cursor: 'pointer' }}>
                                        <IoIosArrowForward className='fs-3 text-secondary' style={{ cursor: 'pointer' }} />
                                    </div>
                                </div>

                                {/* My address */}
                                <div className='d-flex align-items-center border-bottom border-secondary mt-4 pb-1' >
                                    <div className='me-3'>
                                        <IoLocationOutline className='fs-3' />
                                    </div>
                                    <div className='me-2' onClick={() => (setAddress(true), setMyOrder(false))} style={{ cursor: 'pointer' }}>
                                        <h6>My Address</h6>
                                        <h6 className='text-secondary' style={{ fontSize: '15px' }}>Manage shipping address</h6>
                                    </div>
                                    <div className='ms-4' onClick={() => (setAddress(true), setMyOrder(false))}>
                                        <IoIosArrowForward className='fs-3 text-secondary' style={{ cursor: 'pointer' }} />
                                    </div>
                                </div>

                                {/* Logout */}
                                <div className='ms-2 d-flex my-4'>
                                    <button className='btn text-danger' onClick={handleLogout}><IoLogOutOutline className='fs-3 text-danger me-2' /> Logout</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-1"></div>

                        {myOrder &&
                            <div className="col-md-7">
                                <div>
                                    <h5 className='fw-bold ms-5'>My Orders</h5>
                                </div>

                                {loading ?
                                    <div className="d-flex flex-colum align-items-center justify-content-center" style={{ marginTop: '150px' }}>
                                        <Spinner animation="border" variant="primary" />
                                    </div>
                                    :
                                    <div className='container'>
                                        <div className="row">
                                            {allOrders.length < 0 ?
                                                // empty orders message
                                                <div className='d-flex w-100 align-items-center mt-4 rounded py-4' style={{ backgroundColor: 'rgba(229, 228, 228, 1)' }}>
                                                    <div>
                                                        <img src="https://static.vecteezy.com/system/resources/previews/010/988/392/non_2x/empty-box-illustration-3d-free-png.png" alt=" no img" style={{ width: '200px' }} />
                                                    </div>

                                                    <div className='d-flex flex-column justify-content-center align-items-center py- w-100' >
                                                        <h4 className='fw-bold'>Yet Not Order Anything</h4>
                                                        <p>Start your first order to see it here.</p>
                                                        <Link to={'/'}><button className='btn btn-primary py-4 fs-5'>Explore Products</button></Link>
                                                    </div>
                                                </div>
                                                :
                                                allOrders?.map((item, index) => (
                                                    <div key={index + 1} className=' mt-3 py-3'>
                                                        <div className='border-bottom rounded px-2 d-flex justify-content-between' style={{ cursor: 'pointer', userSelect: 'none' }} onClick={() => setCollapse(!collapse)}>
                                                            <h6> <span className='fw-bold'>{index + 1}</span>, {new Date(item?.createdAt).toLocaleString("en-US", { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</h6>
                                                            <h6><FaIndianRupeeSign />{item?.totalAmount} {collapse ? <IoIosArrowUp className='ms-4' /> : <IoIosArrowDown className='ms-4' />}</h6>
                                                        </div>
                                                        {collapse &&
                                                            <div className="container-fluid">
                                                                <div className="row">
                                                                    {item?.products.map((product, index) => (
                                                                        <div key={index} className='col-md-3 col-6'>
                                                                            <div key={index} className='d-flex flex-column border me-2 mt-4' style={{ borderRadius: '20px' }}>
                                                                                <Link to={`/productdetails/${product?.productId?._id}`} className='text-dark text-decoration-none d-flex align-items-center justify-content-center'>
                                                                                    <div className=' mb-3 mt-2  border border-primary' style={{ width: '150px', height: '200px', position: 'relative', borderRadius: '20px' }}>
                                                                                        <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src={`${serverUrl}/uploads/${product?.productId?.uploadedImg[0]}`} alt="no img" />
                                                                                        <h6 className='text-end w-25 rounded pe-2' style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'rgba(214, 217, 220, 1)' }}><RxCross2 style={{ fontSize: '12px' }} />{product?.quantity}</h6>
                                                                                    </div>
                                                                                </Link>
                                                                                <div className='w-100 text-center'>
                                                                                    <Link to={`/productdetails/${product?.productId?._id}`} className='text-dark text-decoration-none'>
                                                                                        <h6 style={{ textTransform: 'uppercase', fontSize: '13px' }}>size : {product?.size}</h6>

                                                                                        <h6 style={{ fontSize: '13px' }}>{product?.productId?.name.slice(0, 12)}...</h6>
                                                                                        <h6 style={{ fontSize: '13px' }}><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '10px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR </span>{product?.productId?.price}</h6>
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                }
                            </div>
                        }

                        {address &&
                            <div className="col-md-7">
                                <div>
                                    <h5 className='fw-bold ms-5'>My Address</h5>
                                </div>
                                <div className='container'>
                                    <div className="row">

                                        {addressData?.length > 0 ?
                                            addressData?.map((item, index) => (
                                                <div key={index} className='rounded mt-5 d-flex align-items-center justify-content-center'>

                                                    <div className='w-50 border border-primary rounded shadow'>
                                                        <div className='d-flex justify-content-between align-items-cente  py-2 rounded w-100 px-1' style={{ backgroundColor: 'rgba(13, 32, 107, 1)' }}>
                                                            <h5 className='fw-bold text-white'><IoLocationOutline /> Address</h5>
                                                            <h5 className='text-white me-2'><MdOutlineEditLocation style={{ cursor: 'pointer' }} onClick={() => handleShow(item)} /></h5>
                                                        </div>

                                                        <div className='mt-2 px-2'>
                                                            <h5 className='fw-bold'>{item?.fullname}</h5>
                                                            <h6>{item?.buildingnumber}, {item?.completeaddress}</h6>
                                                            <h6>{item?.city},{item?.state}</h6>
                                                            <h6>{item?.pincode}</h6>
                                                            <h6>{item?.phonenumber}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                            :
                                            <div className='d-flex w-100 align-items-center mt-4 rounded py-4' style={{ backgroundColor: 'rgba(229, 228, 228, 1)' }}>

                                                <div className='d-flex flex-column justify-content-center align-items-center py- w-100' >
                                                    <h4 className='fw-bold'>No Addresses Found</h4>
                                                    <p>Click to add a new delivery address.</p>
                                                    <button className='btn btn-primary py-4 fs-5' onClick={handleShow}>Add New Address</button>
                                                </div>
                                            </div>}
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                    :
                    // login message for users
                    <div className="row py-3" style={{ marginTop: '170px' }}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className='d-flex flex-column align-items-center shadow p-5' style={{ borderRadius: '30px' }}>
                                <h2><AiFillThunderbolt className='text-warning' /></h2>
                                <h6 className='text-center mt-3'>You are not logged in. Please <Link to={'/login'}>login</Link> to see your Profile.</h6>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                }
            </div >

            {/* modal */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton closeVariant='white' style={{ backgroundColor: 'rgba(14, 11, 52, 1)' }}>
                    <Modal.Title className='text-white'>Add New Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className='mb-2'>
                            <input value={addressDetails.pincode} onChange={(e) => setAddressDetails({ ...addressDetails, pincode: e.target.value })} type="number" placeholder='Enter Pincode' className='form-control' />
                        </div>

                        <div className='mb-2 d-flex justify-content-between'>
                            <div>
                                <input value={addressDetails.city} onChange={(e) => setAddressDetails({ ...addressDetails, city: e.target.value })} type="text" placeholder='City' className='form-control' />
                            </div>
                            <div>
                                <input value={addressDetails.state} onChange={(e) => setAddressDetails({ ...addressDetails, state: e.target.value })} type="text" placeholder='State' className='form-control' />
                            </div>
                        </div>

                        <div className='mb-2'>
                            <input value={addressDetails.buildingnumber} onChange={(e) => setAddressDetails({ ...addressDetails, buildingnumber: e.target.value })} type="text" placeholder='Flat/Building Number' className='form-control' />
                        </div>

                        <div className='mb-2'>
                            <textarea value={addressDetails.completeaddress} onChange={(e) => setAddressDetails({ ...addressDetails, completeaddress: e.target.value })} type="text" placeholder='Enter Complete Address' className='form-control' />
                        </div>

                        <div className='mb-2'>
                            <input value={addressDetails.fullname} onChange={(e) => setAddressDetails({ ...addressDetails, fullname: e.target.value })} type="text" placeholder='Enter Full Name' className='form-control' />
                        </div>

                        <div className='mb-3'>
                            <input value={addressDetails.phonenumber} onChange={(e) => setAddressDetails({ ...addressDetails, phonenumber: e.target.value })} type="number" placeholder='10-digit Mobile Number' className='form-control' />
                        </div>

                        <div>
                            {editAddress ?
                                <button type='button' onClick={handleEditAddress} className='btn btn-primary w-100'> Edit Address</button>
                                :
                                <button type='button' onClick={handleSubmit} className='btn btn-primary w-100'> Save Address</button>

                            }
                            <button type='button' onClick={handleReset} className='btn btn-danger mt-2 w-100'>Reset </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            {/* Toast conatiner */}
            <ToastContainer position="top-center" autoClose={800} transition={Slide} theme="light" />

            {/* Footer */}
            < Footer />
        </>
    )
}

export default Profile