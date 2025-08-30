import React, { useEffect, useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { getHomeBrandsApi } from '../../services/allApi';

const HomeBrand = () => {
    const [allBrands, setAllBrands] = useState([])

    // get 12 Latest brands
    const getHomeBrand = async () => {
        const result = await getHomeBrandsApi()
        // console.log(result);
        if (result.status == 200) {
            setAllBrands(result.data)
        }
    }

    useEffect(() => {
        getHomeBrand()
    }, [])
    
    return (
        <>
            <div style={{ backgroundColor: '#f3f4f5', marginTop: '50px' }}>
                <div className='d-flex justify-content-between align-items-center px-5 pt-5 brand' style={{ color: '#565759ff' }}>
                    <h6>SHOP FROM GLOBAL BRANDS</h6>
                    <Link to={'/brands'} className='text-decoration-none'><h6 className='text-black fw-bold '>View All <GoArrowRight /></h6></Link>
                </div>
                <div className='parentScroll w-100' style={{ marginTop: '30px' }}>
                    <div className='childScroll w-100 d-flex ' >
                        {allBrands?.map((item, index) => (
                            <div key={index} className=' d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
                                <img src={item?.imageurl} alt="no img" style={{ width: '100px' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBrand