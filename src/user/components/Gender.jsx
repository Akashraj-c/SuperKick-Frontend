import React from 'react'
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

const Gender = () => {
    return (
        <>
                <div className=' d-flex sm-flex-column justify-content-center align-items-center w-100 mt-5 p-5 genBackground' style={{ height: '500px' }} >
                    <div className='w-100 d-flex justify-content-between align-items-center' style={{ height: '100%', backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg")', backgroundSize: 'cover', height: '100%', fontSize: '80px', borderRadius: '15px 0px 50px 15px' }}>
                        <h1></h1>
                        <h1 style={{ fontSize: '80px' }} className='d-flex text-white justify-content-center align-items-center'>MEN</h1>
                        <h1 className='text-white'><GoChevronLeft /></h1>
                    </div>

                    <div className='w-100 d-flex justify-content-between align-items-center' style={{ height: '100%', backgroundImage: 'url("https://cdn.pixabay.com/photo/2025/04/13/21/14/woman-9532283_1280.jpg")', backgroundPosition: 'center', backgroundSize: 'cover', height: '100%', borderRadius: '0px 15px 15px 50px' }}>
                        <h1 className='text-white'><GoChevronRight /></h1>
                        <h1 style={{ fontSize: '80px' }} className='d-flex justify-content-center align-items-center text-white'>WOMEN</h1>
                         <h1></h1>
                    </div>
                </div>
        </>
    )
}
// style={{height:'400px',width:'350px',borderRadius:'20px'}}
export default Gender