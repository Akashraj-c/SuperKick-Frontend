import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaRegHeart } from "react-icons/fa";
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { useParams } from 'react-router-dom';
import { getAProductDetailsApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';
import Footer from '../../components/Footer';

const ProductDetails = () => {
    const { id } = useParams()

    const [AproductDetails, setAProductDetails] = useState('')
    const [allImages, setAllImages] = useState([])
    const [mainImg, setMainImg] = useState('')

    // get details of a particular product
    const getAProduct = async () => {
        const result = await getAProductDetailsApi(id)
        console.log(result);
        if (result.status == 200) {
            setAProductDetails(result.data)
            setAllImages(result.data.uploadedImg)
        }
    }

    const handleSize = (size, qty) => {
        console.log(size, qty);

    }

    useEffect(() => {
        getAProduct()
    }, [])

    return (
        <>
            <Header />
            <div className="container" style={{ marginTop: '115px', userSelect: 'none' }}>
                <div className="row p-2">
                    <div className="col-md-7 d-flex border rounded p-2">
                        <div className='d-flex flex-column gap-2 align-items-center me-2' style={{ width: '130px' }}>
                            {allImages.slice(0, 4).map((images, index) => (
                                <div key={index} className='w-100 shadow rounded' >
                                    <img onClick={() => setMainImg(images)} className='w-100 d-flex justify-content-center align-items-center' src={`${serverUrl}/uploads/${images}`} alt="no img" />
                                </div>
                            ))}
                        </div>

                        <div className='shadow rounded'>
                            <img className='w-100 rounded' src={mainImg ? `${serverUrl}/uploads/${mainImg}` : `${serverUrl}/uploads/${allImages[0]}`} alt="no img" />
                        </div>
                    </div>

                    <div className="col-md-5 border px-5 rounded">
                        <div className='d-flex justify-content-between mt-3 mb-2'>
                            <h5 className='text-secondary'>{AproductDetails?.brand}</h5>
                            <FaRegHeart />
                        </div>
                        <div>
                            <h3 className='fw-bolder'>{AproductDetails?.name}</h3>
                            <h6 className='text-secondary'>{AproductDetails?.color}</h6>
                            <h6 className='fw-bolder'> <LiaRupeeSignSolid />{AproductDetails?.price} <span className='text-secondary fw-light'>MRP (Inclusive to all taxes)</span></h6>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-secondary text-bolder'>{AproductDetails?.category == 'shoes' ? "Shoe Size (UK)" : "Available sizes"}</h5>

                            <div className='d-flex mt-3 '>

                                {AproductDetails?.size &&
                                    Object.entries(AproductDetails.size).map(([label, qty]) => (
                                        <div>
                                            <button onClick={() => handleSize(label, qty - 1)} key={label} className={`border px-4 py-2 bg-white fs-6 border-dark me-3 mb-2 ${qty == 0 ? "opacity-50 disabled" : ""}`} disabled={qty == 0}>
                                                {label}
                                            </button>
                                            {qty == 0 && <p className='text-danger'>out of <br /> stock</p>}
                                        </div>
                                    ))}

                            </div>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-dark w-100 py-2 fs-5'>Add to Cart</button>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails