import React, { useContext, useEffect, useState } from 'react'
import { GiConverseShoe } from "react-icons/gi";
import { MdBookmarkBorder } from "react-icons/md";
import { CgChevronDoubleRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { getAllSneakersApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';
import { searhKeyContext } from '../../context/Contextshare';

const HomeSneakers = () => {
    const { searchKey, setSearchKey } = useContext(searhKeyContext)

    const [allSneakers, setAllSneakers] = useState([])

    // get All Sneakers
    const getAllSneakers = async () => {
        const result = await getAllSneakersApi(searchKey)
        // console.log(result);
        if (result.status == 200) {
            setAllSneakers(result.data)
        }
    }

    useEffect(() => {
        getAllSneakers()
    }, [searchKey])
    
    return (

        <div>
            <div className='d-flex align-items-center mb-5' style={{ paddingLeft: '55px', paddingTop: '65px' }}>
                <div className='d-flex justify-content-center align-items-center me-4' style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(199, 199, 203, 0.47)' }}>
                    <GiConverseShoe className='fs-1' />
                </div>
                <div>
                    <h6 className='fw-light' style={{ color: 'rgba(94, 89, 89, 0.53)', textTransform: 'uppercase' }}>Asia's Largest Collection</h6>
                    <h3>Sneakers</h3>
                    <h6 style={{ color: 'rgba(94, 89, 89, 0.53)' }}>100% Pre-Authenticated. Express Shipping</h6>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    {allSneakers?.slice(0, 8).map((item, index) => (
                        <div key={index} className="col-md-3 mb-5 col-6" style={{ cursor: 'pointer' }}>
                            <div className='d-flex flex-column align-items-center maincardDiv' style={{ borderRadius: '20px' }}>
                                <div className=' mb-3 mt-2 cardImg'>
                                    <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src={`${serverUrl}/uploads/${item.uploadedImg[0]}`} alt="no img" />
                                </div>
                                <div className='w-100 text-center mt-2'>
                                    <div className='d-flex justify-content-around mb-1'>
                                        <p></p>
                                        <h6 style={{ textTransform: 'uppercase' }}>{item?.brand}</h6>
                                        <MdBookmarkBorder className='fs-5' />
                                    </div>
                                    <h6>{item?.name}</h6>
                                    <p>{item?.color}</p>
                                    <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> {item?.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center mt-5'>
                <Link to={'/sneakers'} className='text-decoration-none text-black'><h5>LOAD MORE...</h5></Link>
                <h3 style={{ marginTop: '-5px' }}><CgChevronDoubleRight className='arrowEffect text-primary' /></h3>
            </div>
        </div>
    )
}

export default HomeSneakers