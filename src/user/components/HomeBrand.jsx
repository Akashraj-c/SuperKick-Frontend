import React from 'react'
import { GoArrowRight } from "react-icons/go";
import Adidas from '../../assets/brand/Adidas.png'
import Nike from '../../assets/brand/Nike.png'
import UnderArmour from '../../assets/brand/UnderArmour.png'
import NewBalance from '../../assets/brand/NewBalance.png'
import Jordan from '../../assets/brand/Jordan.png'
import Crocs from '../../assets/brand/Crocs.png'
import OnitsukaTiger from '../../assets/brand/OnitsukaTiger.png'
import Converse from '../../assets/brand/Converse.png'
import { Link } from 'react-router-dom';
import { CgChevronDoubleRight } from 'react-icons/cg';


const HomeBrand = () => {
    return (
        <>
            <div style={{ backgroundColor: '#f3f4f5', marginTop: '50px' }}>
                <div className='d-flex justify-content-between align-items-center px-5 pt-5' style={{ color: '#565759ff' }}>
                    <h6>SHOP FROM GLOBAL BRANDS</h6>
                    <Link to={'/brands'} className='text-decoration-none'><h6 className='text-black fw-bold '>View All <GoArrowRight /></h6></Link>
                    {/* <div className='d-flex justify-content-center align-items-center mt-5'>
                        <Link to={'/sneakers'} className='text-decoration-none text-black'><h5>View All</h5></Link>
                        <h3 style={{ marginTop: '-5px' }}><CgChevronDoubleRight className='arrowEffect text-primary' /></h3>
                    </div> */}
                </div>
                <div className='parentScroll w-100' style={{ marginTop: '30px' }}>
                    <div className='childScroll w-100 d-flex ' >

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={Adidas} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={UnderArmour} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={Nike} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={NewBalance} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={Jordan} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={Crocs} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={OnitsukaTiger} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={Converse} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={Converse} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={Converse} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={Converse} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={Converse} alt="no img" style={{ width: '80px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                            <img src={Converse} alt="no img" style={{ width: '80px' }} />
                        </div>

                    </div>
                </div>
            </div>


            {/* <div className='parentScroll' style={{ backgroundColor: '#f3f4f5', marginTop: '75px' }}>
                <div className='d-flex justify-content-between px-5 pt-5' style={{ color: '#565759ff' }}>
                    <h6>SHOP FROM GLOBAL BRANDS</h6>
                    <h6 className='text-black fw-bold' style={{ textDecoration: 'underline' }}>View All <GoArrowRight /></h6>
                </div>

                <div className='childScroll py-3'>
                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={Adidas} alt="no img" style={{ width: '90px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={UnderArmour} alt="no img" style={{ width: '90px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={Nike} alt="no img" style={{ width: '90px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={NewBalance} alt="no img" style={{ width: '90px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={Jordan} alt="no img" style={{ width: '90px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={Crocs} alt="no img" style={{ width: '80px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={OnitsukaTiger} alt="no img" style={{ width: '90px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={Converse} alt="no img" style={{ width: '90px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={Converse} alt="no img" style={{ width: '90px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={Converse} alt="no img" style={{ width: '90px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={Converse} alt="no img" style={{ width: '90px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={Converse} alt="no img" style={{ width: '90px' }} />
                    </div>

                    <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                        <img src={Converse} alt="no img" style={{ width: '90px' }} />
                    </div>
                    
                </div>
            </div> */}


        </>
    )
}

export default HomeBrand