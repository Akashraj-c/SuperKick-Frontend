import React from 'react'
import Header from '../components/Header'

const ProductDetails = () => {
    return (
        <>
            <Header />
            <div className="container mt-3">
                <div className="row p-2">
                    <div className="col-md-7 d-flex">
                        <div className='w-50 d-flex flex-column gap-4'>
                            <div className='w-75 border' >
                                <img className='w-100 d-flex justify-content-center align-items-center' src="https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/02-04-2025-202948-aifo1lo07trwh_photo2.jpeg" alt="" />
                            </div>
                            <div className='w-75 border'>
                                <img className='w-100' src="https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/02-04-2025-202949-aifo1lo07trwh_photo3.jpeg" alt="" />
                            </div>
                            <div className='w-75 border'>
                                <img className='w-100' src="https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/02-04-2025-202951-aifo1lo07trwh_photo4.jpeg" alt="" />
                            </div>
                            <div className='w-75 border'>
                                <img className='w-100' src="https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/02-04-2025-202952-aifo1lo07trwh_photo5.jpeg" alt="" />
                            </div>
                        </div>

                        <div className='border'>
                            <img className='w-100' src="https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/02-04-2025-202946-aifo1lo07trwh_photo1.png" alt="no img" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <p>SHOES</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails