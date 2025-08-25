import React from 'react'
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='container-fluid  px-5 pt-4  mt-5 shadow' style={{ backgroundColor: 'rgba(246, 239, 239, 1)' }}>
                <div className='row d-flex justify-content-center' style={{ backgroundColor: 'rgba(16, 16, 16, 1)', borderRadius: '30px' }}>
                    <div className='col-md-5 text-white'>
                        <h4 className='fw-bold mb-4 mt-3'>SUPERKICKS</h4>
                        <p className='w-75' style={{ textAlign: 'justify' }} >Your trusted hub for buying & selling premium sneakers. Connect, chat, and seal the deal — all in one place.</p>
                    </div>
                    <div className="col-md-3 mt-3 text-white">
                        <div>
                            <h5 className='fw-bold'>LINKS</h5>
                            <ul className='list-unstyled mt-4'>
                                <li className='mb-2'>NEW ARRIVALS</li>
                                <li className='mb-2'>SNEAKERS</li>
                                <li className='mb-2'>APPARELS</li>
                                <li className='mb-2'>BLOGS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3 text-white">
                        <div>
                            <h5 className='fw-bold'>CONTACT US</h5>
                            <div className='mt-4'>
                                <input type="text" placeholder='Email...' className='form-control border border-danger shadow' />
                                <ul className='list-unstyled d-flex justify-content-around mt-3'>
                                    <li><RiInstagramLine /></li>
                                    <li><FaFacebookF /></li>
                                    <li><FaLinkedinIn /></li>
                                    <li><FaTwitter /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center mt-3'>
                    <p className='fw-bold'>© 2025 Superkicks — All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer