import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { addCartApi, getAllWishListApi, getAProductDetailsApi, removeProductApi } from '../../services/allApi'
import { serverUrl } from '../../services/serverUrl'
import { BsCart3 } from "react-icons/bs";
import { GoTrash } from "react-icons/go";
import { Link } from 'react-router-dom';
import { AiFillThunderbolt } from "react-icons/ai";
import Footer from '../../components/Footer';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { BsBagHeart } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const WishList = () => {
  const [token, setToken] = useState(() => sessionStorage.getItem('token'))
  const [allProducts, setAllProducts] = useState([])
  // console.log(allProducts);
  const [updateStatus, setUpdateStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [allSize, setAllSize] = useState()
  const [selectedSize, setSelectedSize] = useState("")
  const [productId, setProductId] = useState("")
  const [wishListProductdId, setWishListProductId] = useState("") // delete a product from wishlsit when product moved to cart

  const [show, setShow] = useState(false); //modal for size

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // get details of a particular product for showing size on modal
  const getAProduct = async (id, wishlistId) => {
    setWishListProductId(wishlistId)
    setProductId(id)
    handleShow()
    const result = await getAProductDetailsApi(id)
    // console.log(result);
    if (result.status == 200) {
      setAllSize(result.data.size)
    }
  }

  // handle product size
  const handleSize = (size, qty) => {
    // console.log(size, qty);
    setSelectedSize(size)
    if (selectedSize == size) {
      setSelectedSize("")
    }
    else {
      setSelectedSize(size)
    }
  }

  // Add products to cart
  const handleCart = async () => {
    if (!selectedSize) {
      toast.info('please select a size')
    }
    else {
      const size = selectedSize

      const reqBody = { productId, size }
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      const result = await addCartApi(reqBody, reqHeader)
      console.log(result);

      if (result.status == 200) {
        toast.success('Your product has been added to cart')
        setSelectedSize("")
        handleClose()
        handleRemoveItems(wishListProductdId)
      }
      else if (result.status == 402) {
        toast.info(result.response.data)
      }
      else {
        toast.error('Something went wrong')
      }

    }
  }

  // get All Products
  const getAllProducts = async () => {
    setLoading(true)

    const reqHeader = {
      'Authorization': `Bearer ${token}`
    }
    const result = await getAllWishListApi(reqHeader)
    // console.log(result);
    if (result.status == 200) {
      setTimeout(() => {
        setAllProducts(result.data)
        setLoading(false)
      }, 1000)
    }
  }

  // Remove  product
  const handleRemoveItems = async (id) => {
    const result = await removeProductApi(id)
    console.log(result);
    if (result.status == 200) {
      // toast.success('Item removed from wishlist')
      setTimeout(() => {
        setUpdateStatus(result.data)
      }, 1000)
    }
    else {
      toast.error('something went wrong')
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [updateStatus])

  return (
    <>
      {/* Header */}
      <Header />
      <div style={{ marginTop: '140px', userSelect: 'none' }} >
        <p className='px-5 d-lg-flex d-none' style={{ color: 'rgba(94, 89, 89, 0.53)', fontSize: '14px' }}><Link to={'/'} className='text-decoration-none' style={{ color: 'rgba(94, 89, 89, 0.53)' }}>HOME</Link> / WISHLIST </p>
      </div>

      <div className="container" >

        {/* Message for users who don't have token */}
        {!token ?
          <div className="row py-3">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className='d-flex flex-column align-items-center shadow p-5' style={{ borderRadius: '30px' }}>
                <h2><AiFillThunderbolt className='text-warning' /></h2>
                <h6 className='text-center mt-3'>You are not logged in. Please <Link to={'/login'}>login</Link> to see your wishlist.</h6>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          :
          // main container 
          <div className="row">

            {/* spinner */}
            {loading ?
              <div className="d-flex flex-colum align-items-center justify-content-center" style={{ padding: '95px' }}>
                <div className="spinner-grow spinner-grow-lg text-secondary me-2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>

                <div className="spinner-grow spinner-grow-sm text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              :
              // All products
              allProducts?.length > 0 ?
                allProducts?.map((item, index) => (
                  <div key={index} className="col-md-3 col-6 border rounded py-2 shadow d-flex flex-column align-items-center mb-4 mt-5 mt-lg-0" style={{ cursor: 'pointer' }}>
                    <Link to={`/productdetails/${item?.productId._id}`} className='w-100'>
                      <div className='mb-2 w-100 rounded border border-primary shadow'>
                        <img src={`${serverUrl}/uploads/${item?.productId?.uploadedImg[0]}`} alt="no img" style={{ height: '290px', width: '100%' }} className='rounded shadow' />
                      </div>
                    </Link>
                    <div className='w-100 text-center mt-2'>
                      <Link to={`/productdetails/${item?.productId._id}`} className='text-dark text-decoration-none'>
                        <h6 style={{ textTransform: 'uppercase' }}>{item?.productId?.brand}</h6>
                        <h6>{item?.productId?.name.slice(0, 25)}...</h6>
                        <p>{item?.productId?.color.slice(0, 20)}...</p>
                        <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> {item?.productId?.price}</p>
                      </Link>
                      <button className='btn btn-dark w-100' onClick={() => getAProduct(item?.productId?._id, item?._id)}>Move to Cart<span className='ms-3 text-primary'><BsCart3 /></span> </button>
                      <button onClick={() => handleRemoveItems(item?._id)} className='btn btn-secondary w-100 mt-1'>Remove<span className='ms-3 text-white'><GoTrash /></span></button>
                    </div>
                  </div>
                ))
                :
                // empty wishlist
                <div className='d-flex align-items-center justify-content-center' style={{ padding: '30px 0px 20px 0px' }}>
                  <div className='text-center shadow w-50 py-5' style={{ borderRadius: '30px' }}>
                    <h6 className='text-center'>No products in your wishlist</h6>
                    <h3><BsBagHeart className='text-danger mt-3' /></h3>
                  </div>
                </div>
            }
          </div>}
      </div>

      {/* modal for size */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} style={{ marginTop: '140px' }}>
        <Modal.Header closeButton>
          <Modal.Title>Select Size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mt-4'>
            {/* <h5 className='text-secondary text-bolder'>{AproductDetails?.category == 'shoes' ? "Shoe Size (UK)" : "Available sizes"}</h5> */}

            <div className='d-flex mt-3 '>

              {allSize &&
                Object.entries(allSize).map(([label, qty]) => (
                  <div key={label}>

                    <button onClick={() => handleSize(label, qty - 1)} className={`border px-4 py-2 bg-white fs-6 border-dark me-3 mb-2 ${qty == 0 ? "opacity-50 disabled" : ""} ${selectedSize == label ? "text-secondary  border-secondary opacity-75" : ""}`} disabled={qty == 0}>
                      {label}
                    </button>

                    {qty == 0 && <p className='text-danger'>out of <br /> stock</p>}
                  </div>
                ))}

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleCart()}>ADD TO CART</Button>
        </Modal.Footer>
      </Modal>

      {/* Footer */}
      <Footer />

      {/* Toast conatiner */}
      <ToastContainer position="top-center" autoClose={800} transition={Slide} theme="light" />
    </>
  )
}

export default WishList