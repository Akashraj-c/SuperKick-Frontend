import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { CgProfile } from 'react-icons/cg'
import { IoBagHandleOutline, IoLocationOutline, IoLogOutOutline } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillThunderbolt } from 'react-icons/ai'
import Modal from 'react-bootstrap/Modal';
import { Slide, toast, ToastContainer } from 'react-toastify'
import { addAddressApi, editaddressApi, getAddressApi } from '../../services/allApi'
import { MdOutlineEditLocation } from 'react-icons/md'

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
    console.log(addressData);

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setShow(true);
        setEditAddress(item)
        setAddressId(item?._id)
    }

    // handle logout
    const handleLogout = () => {
        if (sessionStorage.getItem('token')) {
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('existingUser')
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

    useEffect(() => {
        window.scrollTo(0, 0)

        getAddress() //get address

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
                        <div className="col-md-3">
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
                                <div className='ms-2 d-flex mt-4'>
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
                                <div className='container'>
                                    <div className="row">
                                        {/* empty orders message*/}
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


                                    </div>
                                </div>
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

                                                    <div className='w-50 border rounded'>
                                                        <div className='d-flex justify-content-between align-items-cente py-2 rounde w-100 px-1' style={{ backgroundColor: 'rgba(241, 241, 241, 1)' }}>
                                                            <h5 className='fw-bold'><IoLocationOutline /> Address</h5>
                                                            <h5><MdOutlineEditLocation style={{ cursor: 'pointer' }} onClick={() => handleShow(item)} /></h5>
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