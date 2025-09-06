import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getAllWishListApi } from '../../services/allApi'
import { serverUrl } from '../../services/serverUrl'
import { BsCart3 } from "react-icons/bs";
import { GoTrash } from "react-icons/go";

const WishList = () => {
  const [token, setToken] = useState(() => sessionStorage.getItem('token'))
  const [allProducts, setAllProducts] = useState([])
  // console.log(allProducts);

  // get All Products
  const getAllProducts = async () => {
    const reqHeader = {
      'Authorization': `Bearer ${token}`
    }
    const result = await getAllWishListApi(reqHeader)
    // console.log(result);
    if (result.status == 200) {
      setAllProducts(result.data)
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: '130px' }}>
        <div className="row">

          {allProducts?.length > 0 ?
            allProducts?.map((item, index) => (
              <div key={index} className="col-md-3 col-6 border border-primary  rounded py-2 shadow d-flex flex-column align-items-center mb-4 mt-5 mt-lg-0 " style={{ cursor: 'pointer' }}>
                <div className='mb-2 w-100 rounded b'>
                  <img src={`${serverUrl}/uploads/${item?.productId?.uploadedImg[0]}`} alt="no img" style={{ height: '290px', width: '100%' }} className='rounded shadow' />
                </div>
                <div className='w-100 text-center'>
                  <h6 style={{ textTransform: 'uppercase' }}>{item?.productId?.brand}</h6>
                  <h6>{item?.productId?.name.slice(0, 25)}...</h6>
                  <p>{item?.productId?.color}</p>
                  <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> {item?.productId?.price}</p>
                  <button className='btn btn-dark w-100'>Move to Cart<span className='ms-3 text-primary'><BsCart3 /></span> </button>
                  <button className='btn btn-secondary w-100 mt-1'>Remove<span className='ms-3 text-danger'><GoTrash /></span></button>
                </div>
              </div>
            ))
            :
            <p>no products</p>
          }

        </div>
      </div>
    </>
  )
}

export default WishList