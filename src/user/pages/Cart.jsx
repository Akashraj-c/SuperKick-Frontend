import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { addAllOrderedProductsApi, checkOutApi, getAddressApi, getallCartApi, removeCartProductApi, removeproductCartApi, updatePrdtQtyApi, updateProductQuantityApi, verifyCheckOutApi } from '../../services/allApi'
import { AiFillThunderbolt } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import { FaCartPlus } from "react-icons/fa";
import { serverUrl } from '../../services/serverUrl'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { GoX } from 'react-icons/go'
import { IoIosArrowUp } from 'react-icons/io'
import { toast } from 'react-toastify'
import { Spinner } from 'react-bootstrap'

const Cart = () => {
  const navigate = useNavigate()

  const [token, setToken] = useState(() => sessionStorage.getItem('token'))
  const [allproducts, setAllProducts] = useState([])
  const [updateStatus, setUpdateStatus] = useState("")
  const [productDetailsCollapse, setProductDetailsCollapse] = useState(true)
  const [allCartIds, setAllCartIds] = useState([])
  const [ProductUpdateDetails, setProductUpdateDetails] = useState([])
  const [addressId, setAddressId] = useState("")
  const [totalAmount, setTotalAmount] = useState('')
  const [loading, setLoading] = useState(true)

  // update quantity
  const updateQty = async (id, qty) => {
    console.log(id, qty);
    const reqBody = { id, qty }
    const result = await updatePrdtQtyApi(reqBody)
    console.log(result);
    if (result.status == 200) {
      setUpdateStatus(result.data)
    }
  }

  // get all products
  const getallCartProducts = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getallCartApi(reqHeader)
    // console.log(result);
    if (result.status == 200) {
      setTimeout(() => {
        setAllProducts(result.data)
        setAllCartIds(result.data.filter((item) => item._id))
        setProductUpdateDetails(result.data.map((item) => ({ productId: item.productId._id, size: item.size, quantity: item.quantuty })))
        setTotalAmount(result.data.reduce((sum, item) => sum + (item.productId?.price) * item.quantuty, 0))
        setLoading(false)
      }, 500)
    }
  }

  // remove product from cart
  const handleRemove = async (id) => {
    const result = await removeproductCartApi(id)
    console.log(result);
    if (result.status == 200) {
      setUpdateStatus(result.data)
    }
  }

  // get address data
  const getAddress = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAddressApi(reqHeader)
    // console.log(result);
    if (result.status == 200) {
      setAddressId(result.data.map(item => item._id))
    }
  }

  // handle checkout
  const handleCheckOut = async (amount) => {
    const reqBody = { amount, currency: 'INR' }
    const result = await checkOutApi(reqBody) //create order 
    // console.log(result);

    if (result.status == 200) {
      // Open Razorpay Checkout modal
      const options = {
        key: "rzp_test_RKvVLl8YaBZfyt", // key_id
        amount: result.data.amount,
        currency: result.data.currency,
        order_id: result.data.id,
        name: "SuperKicks",
        description: "Test Transaction",

        handler: async function (response) {
          // console.log(response); // response gives orderid, paymentid, and signature
          const verifyResult = await verifyCheckOutApi({ // send response to backend to verify the signature
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature
          })
          console.log(verifyResult);
          if (verifyResult.status == 200) {
            removeCartProducts() //remove all products from cart after payment
            addAllOrderedProduct() //add all products to orders
            updateQuantity()
          }
        },

        theme: {
          color: "#042636ff",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    }

    else {
      toast.error('something went wrong')
    }
  }

  // add all products to orderpage
  const addAllOrderedProduct = async () => {
    const address = addressId[0]
    const reqHeader = { "Authorization": `Bearer ${token}` }
    const products = allproducts.map((item) => ({
      productId: item?.productId?._id,
      size: item?.size,
      quantity: item?.quantuty
    }))
    const reqBody = { products, address, totalAmount }
    const result = await addAllOrderedProductsApi(reqBody, reqHeader)
    console.log(result);
    if (result.status == 200) {
      navigate('/profile')
    }
  }

  // remove all products from cart after payment
  const removeCartProducts = async () => {
    const reqHeader = { "Authorization": `Bearer ${token}` }
    const reqBody = { allCartIds }
    const result = await removeCartProductApi(reqBody, reqHeader)
    console.log(result);
    if (result.status == 200) {
      setUpdateStatus(result.data)
    }
  }

  // update quantity of the particular product's size after checkout
  const updateQuantity = async () => {
    const result = await updateProductQuantityApi({ "updatedetail": ProductUpdateDetails })
    console.log(result);

  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      getallCartProducts()
      getAddress()
    }
    window.scrollTo(0, 0)
  }, [updateStatus])

  return (
    <>
      {/* header */}
      <Header />
      <div style={{ marginTop: '140px', userSelect: 'none' }} >
        <p className='px-5 d-lg-flex d-none' style={{ color: 'rgba(94, 89, 89, 0.53)', fontSize: '14px' }}><Link to={'/'} className='text-decoration-none' style={{ color: 'rgba(94, 89, 89, 0.53)' }}>HOME</Link> / CART </p>
      </div>

      {/* main container */}
      {loading ?
        <div className="d-flex flex-colum align-items-center justify-content-center" style={{ padding: '95px' }}>
          <Spinner animation="border" variant="primary" />
        </div>
        :
        <div className='container-fluid'>
          {token ?
            <div className="container-fluid" style={{ overflowX: 'hidden' }}>
              {allproducts?.length > 0 ?
                <div className="row mt-md-0 mt-5">

                  <div className="col-md-7 mb-4 border-end">
                    <div className='container-fluid d-flex flex-column align-items-center align-items-md-star'>
                      {allproducts?.map((items, index) => (
                        <div key={index} className='row shadow w-75 mb-4 py-2 border border-info' style={{ borderRadius: '20px' }}>


                          <div className='col-md-5'>
                            <Link to={`/productdetails/${items?.productId?._id}`}> <img style={{ borderRadius: '20px' }} src={`${serverUrl}/uploads/${items?.productId?.uploadedImg[0]}`} alt="no img" className='shadow border border-primary w-100 h-100' /></Link>
                          </div>

                          <div className='col-md-7 py-2 py-md-0  d-flex flex-column align-items-center'>
                            <Link to={`/productdetails/${items?.productId?._id}`} className='text-decoration-none text-dark d-flex flex-column align-items-center'>
                              <h5>{items?.productId?.brand}</h5>
                              <h5>{items?.productId?.name.slice(0, 25)}...</h5>
                              <p>{items?.productId?.color.slice(0, 25)}</p>
                              <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> {items?.productId?.price}</p>
                              <p className=' rounded fw-bold me-1'>size : {items?.size}</p>
                            </Link>
                            <div className='d-flex align-items-center '>
                              <h6 className='border rounded fw-bold d-flex justify-content-center' style={{ fontSize: '20px', backgroundColor: 'rgba(221, 214, 214, 0.6)', width: '25px', cursor: 'pointer', userSelect: 'none' }} onClick={() => { items?.quantuty > 1 && updateQty(items?._id, -1) }}>-</h6>
                              <h6 className='mx-2'>{items?.quantuty}</h6>
                              <h6 className='border rounded fw-bold d-flex justify-content-center' style={{ fontSize: '20px', backgroundColor: 'rgba(221, 214, 214, 0.6)', width: '25px', cursor: 'pointer', userSelect: 'none' }} onClick={() => updateQty(items?._id, +1)}>+</h6>
                            </div>

                            <button className='btn btn-dark w-75 mt-2' onClick={() => handleRemove(items?._id)}> Remove</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-md-5 px-4 h-100" >
                    <div className='border rounded py-5 d-flex flex-column shadow align-items-center  ' style={{ backgroundColor: "rgba(242, 244, 243, 1)" }}>
                      <div>
                        <h4 className='fw-bold mb-3'>SUMMARY</h4>
                        <h6>Total Items : {allproducts.map((item) => item.quantuty).reduce((a, b) => a + b)}</h6>
                        <h6>Total Amount :  <span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> {allproducts?.reduce((sum, item) => sum + (item.productId?.price) * item.quantuty, 0)}</h6>
                        <h6>Shipping Fee :  <span className='text-primary'>Free</span></h6>
                        <h6 style={{ cursor: 'pointer' }} onClick={() => setProductDetailsCollapse(!productDetailsCollapse)} >Product details {productDetailsCollapse ? <MdKeyboardArrowDown /> : <IoIosArrowUp />}</h6>

                        {productDetailsCollapse &&
                          <div>
                            {allproducts?.map((item, index) => (
                              <h6 key={index} style={{ fontSize: '10px' }}>{item?.productId?.name} <GoX /> {item?.quantuty} = {item?.productId?.price * item?.quantuty}</h6>
                            ))}
                          </div>}

                      </div>
                      <button type='button' onClick={() => handleCheckOut(allproducts?.reduce((sum, item) => sum + (item.productId?.price) * item.quantuty, 0))} className='btn btn-success shadow py-2 w-75 mt-3 fs-5 fw-bold'>Checkout</button>
                    </div>
                  </div>

                </div>
                :
                // empty wishlist
                <div className='d-flex align-items-center justify-content-center' style={{ padding: '30px 0px 20px 0px' }}>
                  <div className='text-center shadow w-50 py-5' style={{ borderRadius: '30px' }}>
                    <h6 className='text-center'>No products in your cart</h6>
                    <h3><FaCartPlus className='text-success mt-3' /></h3>
                  </div>
                </div>
              }

            </div>
            :
            // login message for users
            <div className="row py-3" >
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className='d-flex flex-column align-items-center shadow p-5' style={{ borderRadius: '30px' }}>
                  <h2><AiFillThunderbolt className='text-warning' /></h2>
                  <h6 className='text-center mt-3'>You are not logged in. Please <Link to={'/login'}>login</Link> to see your cart.</h6>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          }
        </div>
      }

      {/* footer */}
      <Footer />
    </>
  )
}

export default Cart