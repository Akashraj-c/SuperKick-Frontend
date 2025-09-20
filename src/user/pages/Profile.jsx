import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { CgProfile } from 'react-icons/cg'
import { IoBagHandleOutline, IoLocationOutline, IoLogOutOutline } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillThunderbolt } from 'react-icons/ai'

const Profile = () => {
    const navigate = useNavigate()

    const [existingUser, setExistingUSer] = useState(() => JSON.parse(sessionStorage.getItem('existingUser')))
    const [token, setToken] = useState('')
    const [myOrder, setMyOrder] = useState(true)
    const [address, setAddress] = useState(false)
    console.log(myOrder);
    console.log(address);

    // handle logout
    const handleLogout = () => {
        if (sessionStorage.getItem('token')) {
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('existingUser')
            navigate('/login')
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }
        window.scrollTo(0,0)
    }, [])
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
                                        {/* empty orders message*/}
                                        <div className='d-flex w-100 align-items-center mt-4 rounded py-4' style={{ backgroundColor: 'rgba(229, 228, 228, 1)' }}>

                                            <div className='d-flex flex-column justify-content-center align-items-center py- w-100' >
                                                <h4 className='fw-bold'>No Addresses Found</h4>
                                                <p>Click to add a new delivery address.</p>
                                                <button className='btn btn-primary py-4 fs-5'>Add New Address</button>
                                            </div>
                                        </div>
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

            {/* Footer */}
            < Footer />
        </>
    )
}

export default Profile