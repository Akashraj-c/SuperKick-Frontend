import React, { useContext, useEffect, useState } from 'react'
import { MdBookmarkBorder } from "react-icons/md";
import { CgChevronDoubleRight } from "react-icons/cg";
import { IoShirt } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { getAllApparelsApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';
import { searhKeyContext } from '../../context/Contextshare';

const HomeApparels = () => {
    const { searchKey, setSearchKey } = useContext(searhKeyContext)

    const [allApparels, setAllApparels] = useState([])

    // get All Sneakers
    const getAllApparels = async () => {
        const result = await getAllApparelsApi(searchKey)
        // console.log(result);
        if (result.status == 200) {
            setAllApparels(result.data)
        }
    }

    useEffect(() => {
        getAllApparels()
    }, [searchKey])

    return (
        <div>
            <div style={{ userSelect: 'none' }}>
                <div className='d-flex align-items-center mb-5' style={{ paddingLeft: '55px', paddingTop: '65px' }}>
                    <div className='d-flex justify-content-center align-items-center me-4' style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(199, 199, 203, 0.47)' }}>
                        <IoShirt className='fs-1' />
                    </div>
                    <div>
                        <h6 className='fw-light' style={{ color: 'rgba(94, 89, 89, 0.53)', textTransform: 'uppercase' }}>Born to Wear</h6>
                        <h3>Apparels</h3>
                        <h6 style={{ color: 'rgba(94, 89, 89, 0.53)' }}>Largest Collection of Global Hype Brands</h6>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {allApparels?.slice(0, 8).map((item, index) => (
                            <div key={index} className="col-md-3 mb-5 col-6" style={{ cursor: 'pointer' }}>
                                <div className='d-flex flex-column align-items-center maincardDiv' style={{ borderRadius: '20px' }}>
                                    <Link to={`/productdetails/${item?._id}`} className='text-dark text-decoration-none'>
                                        <div className=' mb-3 mt-2 cardImg'>
                                            <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src={`${serverUrl}/uploads/${item.uploadedImg[0]}`} alt="no img" />
                                        </div>
                                    </Link>
                                    <div className='w-100 text-center mt-2'>
                                        <div className='d-flex justify-content-around mb-1'>
                                            <p></p>
                                            <h6 style={{ textTransform: 'uppercase' }}>{item?.brand}</h6>
                                            <MdBookmarkBorder className='fs-5' />
                                        </div>
                                        <Link to={`/productdetails/${item?._id}`} className='text-dark text-decoration-none'>
                                            <h6>{item?.name}</h6>
                                            <p>{item?.color}</p>
                                            <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> {item?.price}</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-5' style={{ userSelect: 'none' }}>
                    <Link to={'/apparels'} className='text-decoration-none text-black'><h5>LOAD MORE...</h5></Link>
                    <h3 style={{ marginTop: '-5px' }}><CgChevronDoubleRight className='arrowEffect text-primary' /></h3>
                </div>
            </div>
        </div>
    )
}

export default HomeApparels