import React from 'react'
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

const Gender = () => {
    return (
        <>
            <div className='container-fluid '>
                <div className='row d-flex justify-content-center align-items-center mt-5 genBackground' style={{ height: '500px', overflowX: 'hidden' }} >
                    <div className='col-md-6 d-flex justify-content-between align-items-center genImg' style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg")', backgroundSize: 'cover', height: '100%', fontSize: '80px'}}>
                        <h1></h1>
                        <h1 style={{ fontSize: '80px' }} className='d-flex text-white justify-content-center align-items-center'>MEN</h1>
                        <h1 className='text-white'><GoChevronLeft /></h1>
                    </div>

                    <div className='col-md-6  d-flex justify-content-between align-items-center genImg2' style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2025/04/13/21/14/woman-9532283_1280.jpg")', backgroundPosition: 'center', backgroundSize: 'cover', height: '100%' }}>
                        <h1 className='text-white'><GoChevronRight /></h1>
                        <h1 style={{ fontSize: '80px' }} className='d-flex justify-content-center align-items-center text-white'>WOMEN</h1>
                        <h1></h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gender