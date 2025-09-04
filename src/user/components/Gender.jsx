import React from 'react'
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { Link } from 'react-router-dom';

const Gender = () => {
    return (
        <>
            <div className='container-fluid ' style={{ userSelect: 'none' }}>
                <div className='row d-flex justify-content-center align-items-center mt-5 genBackground' style={{ height: '500px', overflowX: 'hidden' }} >
                   
                    <div className='col-md-6 d-flex genImg' style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg")', backgroundSize: 'cover', height: '100%', fontSize: '80px' }}>
                        <Link to={'/menproducts'} className=' d-flex justify-content-between align-items-center w-100 text-decoration-none'>
                            <h1></h1>
                            <h1 style={{ fontSize: '80px' }} className='d-flex text-white justify-content-center align-items-center'>MEN</h1>
                            <h1 className='text-white d-none d-lg-flex text-center'><GoChevronLeft /></h1>
                        </Link>
                    </div>
                    
                    <div className='col-md-6 d-flex genImg2' style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2025/04/13/21/14/woman-9532283_1280.jpg")', backgroundPosition: 'center', backgroundSize: 'cover', height: '100%' }}>
                        <Link to={'/womenproducts'} className=' d-flex justify-content-between align-items-center w-100 text-decoration-none'>
                            <h1 className='text-white d-none d-lg-flex'><GoChevronRight /></h1>
                            <h1 style={{ fontSize: '80px' }} className='d-flex justify-content-center align-items-center text-white'>WOMEN</h1>
                            <h1></h1>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gender