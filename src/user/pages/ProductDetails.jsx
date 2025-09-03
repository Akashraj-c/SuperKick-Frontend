import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaRegHeart } from "react-icons/fa";
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { useParams } from 'react-router-dom';
import { getAProductDetailsApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';

const ProductDetails = () => {
    const { id } = useParams()

    const [productDetails, setProductDetails] = useState('')
    const [allImages, setAllImages] = useState([])

    // get details of a particular product
    const getAProduct = async () => {
        const result = await getAProductDetailsApi(id)
        console.log(result);
        if (result.status == 200) {
            setProductDetails(result.data)
            setAllImages(result.data.uploadedImg)
        }
    }

    useEffect(() => {
        getAProduct()
    }, [])

    return (
        <>
            <Header />
            <div className="container" style={{ marginTop: '115px' }}>
                <div className="row p-2">
                    <div className="col-md-7 d-flex border rounded p-2">
                        <div className='w-25 d-flex flex-column gap-4 '>
                            {allImages.slice(1, 5).map((images, index) => (
                                <div key={index} className='w-75 shadow rounded' >
                                    <img className='w-100 d-flex justify-content-center align-items-center' src={`${serverUrl}/uploads/${images}`} alt="no img" />
                                </div>
                            ))}
                        </div>

                        <div className='shadow rounded'>
                            <img className='w-100' src={`${serverUrl}/uploads/${allImages[0]}`} alt="no img" />
                        </div>
                    </div>

                    <div className="col-md-5 border px-5 rounded">
                        <div className='d-flex justify-content-between mt-3 mb-2'>
                            <h5 className='text-secondary'>{productDetails?.brand}</h5>
                            <FaRegHeart />
                        </div>
                        <div>
                            <h3 className='fw-bolder'>{productDetails?.name}</h3>
                            <h6 className='text-secondary'>{productDetails?.color}</h6>
                            <h6 className='fw-bolder'> <LiaRupeeSignSolid />{productDetails?.price} <span className='text-secondary fw-light'>MRP (Inclusive to all taxes)</span></h6>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-secondary text-bolder'>Shoe Size (UK)</h5>
                            <div className='d-flex mt-3'>
                                {/* <div className='border px-4 border-dark  me-3'>
                                    <h5 className='mt-1'>1</h5>
                                </div> */}

                                <button className='border px-4 bg-white fs-5 border-dark  me-3'>1</button>
                                {/* <button className='border px-4 bg-white fs-5 border-dark  me-3'>2</button> */}
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