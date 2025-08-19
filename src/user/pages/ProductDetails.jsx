import React from 'react'
import Header from '../components/Header'
import { FaRegHeart } from "react-icons/fa";
import { LiaRupeeSignSolid } from 'react-icons/lia';

const ProductDetails = () => {
    return (
        <>
            <Header />
            <div className="container mt-4">
                <div className="row p-2">
                    <div className="col-md-7 d-flex border rounded p-2">
                        <div className='w-50 d-flex flex-column gap-4'>
                            <div className='w-75 shadow rounded' >
                                <img className='w-100 d-flex justify-content-center align-items-center' src="https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/02-04-2025-202948-aifo1lo07trwh_photo2.jpeg" alt="" />
                            </div>
                            <div className='w-75 shadow rounded'>
                                <img className='w-100' src="https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/02-04-2025-202949-aifo1lo07trwh_photo3.jpeg" alt="" />
                            </div>
                            <div className='w-75 shadow rounded'>
                                <img className='w-100' src="https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/02-04-2025-202951-aifo1lo07trwh_photo4.jpeg" alt="" />
                            </div>
                            <div className='w-75 shadow rounded'>
                                <img className='w-100' src="https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/02-04-2025-202952-aifo1lo07trwh_photo5.jpeg" alt="" />
                            </div>
                        </div>

                        <div className='shadow rounded'>
                            <img className='w-100' src="https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/02-04-2025-202946-aifo1lo07trwh_photo1.png" alt="no img" />
                        </div>
                    </div>

                    <div className="col-md-5 border px-5 rounded">
                        <div className='d-flex justify-content-between mt-3 mb-2'>
                            <h5 className='text-secondary'>Puma</h5>
                            <FaRegHeart />
                        </div>
                        <div>
                            <h3 className='fw-bolder'>PALERMO CLUB VEGAS LEATHER</h3>
                            <h6 className='text-secondary'>SILVER-GLACIAL GRAY-ORANGE GLO</h6>
                            <h6 className='fw-bolder'> <LiaRupeeSignSolid />9559 <span className='text-secondary fw-light'>MRP (Inclusive to all taxes)</span></h6>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-secondary text-bolder'>Shoe Size (UK)</h5>
                            <div className='d-flex mt-3'>
                                {/* <div className='border px-4 border-dark  me-3'>
                                    <h5 className='mt-1'>1</h5>
                                </div> */}
                                <button className='border px-4 bg-white fs-5 border-dark  me-3'>1</button>
                                <button className='border px-4 bg-white fs-5 border-dark  me-3'>2</button>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-dark w-100 py-2 fs-5'>Add to Cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails