import React from 'react'
import { GiWorld } from "react-icons/gi";
import { GiPriceTag } from "react-icons/gi";
import { VscVerified } from "react-icons/vsc";
import { TbTruckDelivery } from "react-icons/tb";

const WhySuperKicks = () => {
    return (
        <>
            <div className="container-fluid pt-4 pb-4 mt-5" style={{ backgroundColor: '#0d0721ff' }}>
                <div className='text-center mb-4'>
                    <h6 className='fw-bolder text-secondary'>WHY YOU'LL ALWAYS</h6>
                    <h3 className='text-light'>Choose <span style={{ color: 'rgba(13, 50, 202, 1)' }}>Superkicks</span></h3>
                </div>
                <div className="row mt-3 py-3">

                    <div className="col-md-3 col-6 border-end border-secondary d-flex flex-column align-items-center" style={{ cursor: 'pointer' }}>
                        <div className='d-flex justify-content-center align-items-center shadow border border-warning' style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#ddeaffff' }}>
                            <GiWorld className='fs-1 text-secondary' />
                        </div>
                        <div className='text-center mt-3'>
                            <h6 className='text-light'>Asia's Largest <br /> Authenticated Collection</h6>
                        </div>
                    </div>

                    <div className="col-md-3 col-6 border-end border-secondary d-flex flex-column align-items-center" style={{ cursor: 'pointer' }}>
                        <div className='d-flex justify-content-center align-items-center shadow border border-warning' style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#ddeaffff' }}>
                            <GiPriceTag className='fs-1 text-secondary' />
                        </div>
                        <div className='text-center mt-3'>
                            <h6 className='text-light'>Guaranteed <br /> Lowest Prices</h6>
                        </div>
                    </div>

                    <div className="col-md-3 col-6 border-end border-secondary d-flex flex-column align-items-center" style={{ cursor: 'pointer' }}>
                        <div className='d-flex justify-content-center align-items-center shadow border border-warning' style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#ddeaffff' }}>
                            <VscVerified className='fs-1 text-secondary' />
                        </div>
                        <div className='text-center mt-3'>
                            <h6 className='text-light'>Globally Recognized <br /> Certificate of Authenticity</h6>
                        </div>
                    </div>

                    <div className="col-md-3 col-6 border-end d-flex flex-column align-items-center" style={{ cursor: 'pointer' }}>
                        <div className=' d-flex justify-content-center align-items-center shadow border border-warning' style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#ddeaffff' }}>
                            <TbTruckDelivery className='fs-1 text-secondary' />
                        </div>
                        <div className='text-center mt-3'>
                            <h6 className='text-light'>Free Express <br /> Shipping</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhySuperKicks