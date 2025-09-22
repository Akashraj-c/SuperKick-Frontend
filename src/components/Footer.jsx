import React, { useState } from 'react'
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const [existingUser, setExistingUser] = useState(() => JSON.parse(sessionStorage.getItem('existingUser')))

    return (
        <>
            <div className='container-fluid  px-5 pt-4  mt- shadow' style={{ backgroundColor: 'rgba(246, 239, 239, 1)' }}>
                <div className='row d-flex justify-content-center' style={{ backgroundColor: 'rgba(16, 16, 16, 1)', borderRadius: '30px' }}>
                    <div className='col-md-5 text-white'>
                        <h4 className='fw-bold mb-4 mt-3'>SUPERKICKS</h4>
                        <p className='w-75' style={{ textAlign: 'justify' }} >Your trusted hub for buying & selling premium sneakers. Connect, chat, and seal the deal — all in one place.</p>
                    </div>
                    <div className="col-md-3 mt-3 text-white">
                        <div>
                            <h5 className='fw-bold'>LINKS</h5>
                            {existingUser?.email != 'superkicksadmin@gmail.com' ?
                                <ul className='list-unstyled mt-4'>
                                    <li className='mb-2'>NEW ARRIVALS</li>
                                    <li className='mb-2'>SNEAKERS</li>
                                    <li className='mb-2'>APPARELS</li>
                                    <li className='mb-2'>BLOGS</li>
                                </ul>
                                :
                                <ul className='list-unstyled mt-4'>
                                    <li className='mb-2'>HOME</li>
                                    <li className='mb-2'>BRANDS</li>
                                    <li className='mb-2'>PRODUCTS</li>
                                    <li className='mb-2'>BLOGS</li>
                                </ul>
                            }
                        </div>
                    </div>
                    <div className="col-md-3 mt-3 text-white">
                        <div>
                            <h5 className='fw-bold'>CONTACT US</h5>
                            <div className='mt-4'>
                                <input type="text" placeholder='Email...' className='form-control border border-danger shadow' name='contactus' />
                                <ul className='list-unstyled d-flex justify-content-around mt-3'>
                                    <Link to={'https://www.instagram.com/'} className='text-white' target='_blank'><li><RiInstagramLine /></li></Link>
                                    <Link to={'https://www.facebook.com/'} className='text-white' target='_blank'><li><FaFacebookF /></li></Link>
                                    <Link to={'https://www.linkedin.com/in/akashraj-c-657a4123a/'} className='text-white' target='_blank'><li><FaLinkedinIn /></li></Link>
                                    <Link to={'https://x.com/?lang=en-in'} className='text-white' target='_blank'><li><FaTwitter /></li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-center mt-3'>
                    <p className='fw-bold'>© 2025 Superkicks — All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer