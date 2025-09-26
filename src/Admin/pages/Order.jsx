import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import { getAllOrdersApi } from '../../services/allApi'
import { LiaRupeeSignSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'

const Order = () => {
    const [allOrders, setAllOrders] = useState([])
    const [token, setToken] = useState(() => sessionStorage.getItem('token'))

    // get all ordered products
    const getAllOrders = async () => {

        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getAllOrdersApi(reqHeader)
        console.log(result);
        if (result.status == 200) {
            setAllOrders(result.data)
        }
    }

    useEffect(() => {
        getAllOrders()
    }, [])

    return (
        <>
            {/* Header */}
            <AdminHeader />

            <div className='px-5 mt-4'>
               <Link to={'/adminhome'} className='text-secondary text-decoration-none'><p><IoIosArrowRoundBack className='fs-4'/>HOME</p></Link>
            </div>

            <div className="container mt-">
                <div>
                    <h4 className='fw-bold'>ORDERS</h4>
                </div>

                {allOrders?.map((items, index) => (
                    <div className='mb-5 mt-5'>
                        <div className=' d-flex justify-content-between px-2'>
                            <h6><span className='fw-bold'>{index+1}. UserId:</span> {items?.userId}</h6>
                            <h6><span className='fw-bold'>Total Amount:</span> <LiaRupeeSignSolid />{items?.totalAmount}</h6>
                        </div>

                        <table className="table table-hover ">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col" className='border'>Sl.No</th>
                                    <th scope="col" className='border'>Category</th>
                                    <th scope="col" className='border'>Name</th>
                                    <th scope="col" className='border'>Color</th>
                                    <th scope="col" className='border'>Gender</th>
                                    <th scope="col" className='border'>Price</th>
                                    <th scope="col" className='border'>size</th>
                                    <th scope="col" className='border'>Quantity</th>
                                </tr>
                            </thead>

                            <tbody className='text-center' style={{ cursor: 'pointer' }}>
                                {items?.products.map((products, index) => (
                                    <tr key={index}>
                                        <th scope="row" className='border'>{index + 1}</th>
                                        <td className='border'>{products?.productId?.subcategory}</td>
                                        <td className='border'>{products?.productId?.name}</td>
                                        <td className='border'>{products?.productId?.color}</td>
                                        <td className='border'>{products?.productId?.gender}</td>
                                        <td className='border'>{products?.productId?.price}</td>
                                        <td className='border'>{products?.size}</td>
                                        <td className='border'>{products?.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                ))}
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Order