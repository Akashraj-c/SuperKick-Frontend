import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import { MdBookmarkBorder } from 'react-icons/md';
import { FaBarsProgress } from "react-icons/fa6";
import '../../style/NewArrival.css'
import HomeSidebar from '../components/HomeSidebar';
import { addCartApi, getAllApparelsApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';
import { searhKeyContext, sideBarFilterContext } from '../../context/Contextshare';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import Spinner from 'react-bootstrap/Spinner';

const Apparels = () => {
  const { searchKey, setSearchKey } = useContext(searhKeyContext)
  const { filters, setFilters } = useContext(sideBarFilterContext)

  const [token, setToken] = useState(() => sessionStorage.getItem('token'))
  const [filterCollapse, setFilterCollpase] = useState(false)
  const [allApparels, setAllApparels] = useState([])
  const [tempArray, setTempArray] = useState([])
  const [filterButtonData, setFilterBottomData] = useState('Relevance')
  const [aProduct, setAProduct] = useState('')
  const [productId, setProductId] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [show, setShow] = useState(false); //modal for size

  const handleClose = () => setShow(false);
  const handleShow = (item, id) => {
    setShow(true);
    setProductId(id)
    setAProduct(item)
  }

  // get All Sneakers
  const getAllApparels = async () => {
    const result = await getAllApparelsApi(searchKey)
    // console.log(result);
    if (result.status == 200) {
      setTimeout(() => {
        setAllApparels(result.data)
        setTempArray(result.data)
        setIsLoading(false)
      }, 500)
    }
  }

  // filter dropdown button
  const filterButton = (data) => {
    setFilterBottomData(data)
    if (data == 'L-H') {
      setAllApparels([...tempArray].sort((a, b) => a.price - b.price))
    }
    else if (data == 'H-L') {
      setAllApparels([...tempArray].sort((a, b) => b.price - a.price))
    }
    else {
      setAllApparels(tempArray)
    }
  }

  // Add products to cart
  const handleCart = async () => {
    if (!token) {
      toast.info('Only Logined user can add products to cart')
    }
    else if (!selectedSize) {
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
      }
      else if (result.status == 402) {
        toast.info(result.response.data)
        setSelectedSize("")
      }
      else {
        toast.error('Something went wrong')
      }

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

  useEffect(() => {
    getAllApparels()
    window.scrollTo(0, 0)
  }, [searchKey])

  // sidebar Filtering
  useEffect(() => {
    let filtered = [...tempArray];

    if (filters.brands.length > 0) {
      filtered = filtered.filter(item => filters.brands.includes(item.brand));
    }
    if (filters.categories.length > 0) {
      filtered = filtered.filter(item => filters.categories.includes(item.category));
    }
    if (filters.subcategories.length > 0) {
      filtered = filtered.filter(item => filters.subcategories.includes(item.subcategory));
    }
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(item => {
        if (item.size && typeof item.size == "object") {
          return Object.keys(item.size).some((key) =>
            filters.sizes.includes(String(key))
          );
        }
        return false;
      });
    }

    setAllApparels(filtered);
  }, [filters, tempArray]);

  return (
    <>
      {/* Header */}
      <Header />

      <div style={{ marginTop: '140px', userSelect: 'none' }} >
        <p className='px-5 d-lg-flex d-none' style={{ color: 'rgba(94, 89, 89, 0.53)', fontSize: '14px' }}><Link to={'/'} className='text-decoration-none' style={{ color: 'rgba(94, 89, 89, 0.53)' }}>HOME</Link> / APPAREL </p>
      </div>

      <div className='d-flex justify-content-between align-items-center px-lg-5 px-2 mt-4 ' style={{ userSelect: 'none' }}>
        <div>
          <h3>Apparels</h3>
          <h6 style={{ color: 'rgba(94, 89, 89, 0.53)' }}>Showing All Results</h6>
        </div>

        <div>
          <DropdownButton id="dropdown-basic-button" variant='secondary' title={`Sort By : ${filterButtonData}`}>
            <Dropdown.Item href="#/action-2" onClick={() => filterButton('L-H')}>Price : Low to High</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={() => filterButton('H-L')}>Price : High to Low</Dropdown.Item>
            <Dropdown.Item href="#/action-1" onClick={() => filterButton('Relevance')}>Relevence</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      <div className='w-100 d-flex flex-column justify-content-center align-items-center pt-5 pb-5' style={{ height: '10px' }}>
        <hr style={{ width: '95%' }} />
        <div className='w-100'>
          <button onClick={() => setFilterCollpase(!filterCollapse)} className='btn border bg-black text-white ms-5 d-lg-none' style={{ width: '100px' }}><FaBarsProgress className='text-white' /> Filter</button>
        </div>
      </div>

      <div className='container-fluid' style={{ userSelect: 'none' }}>
        <div className='row d-flex'>
          <div className='col-md-3 px-5 d-lg-flex d-none flex-column align-items-center border-end filterCol' style={{ height: '100vh', overflowY: 'auto', position: "sticky", top: '0' }}>
            <HomeSidebar />
          </div>

          {/* filter collapse */}
          {filterCollapse && <div className='col-md-3  px-5 d-lg-none flex-colum filterCol bg-black text-white' style={{ height: '100vh', overflowY: 'auto', position: "sticky", top: '0' }}>
            <HomeSidebar />
          </div>}

          {isLoading ?
            <div className='col-md-9 mainCol d-flex justify-content-center mt-5'>
              <Spinner animation="border" variant="primary" /> 
            </div>
            :
            <div className='col-md-9 mainCol'>
              <div className="container- ">
                <div className="row">

                  {allApparels?.length > 0 ?
                    allApparels.map((Item, index) => (
                      <div key={index} className="col-md-3 mb-3 col-6 " style={{ cursor: 'pointer' }}>
                        <div className='d-flex flex-column r NewmaincardDiv' style={{ borderRadius: '20px' }}>
                          <Link to={`/productdetails/${Item?._id}`} className='text-dark text-decoration-none'>
                            <div className=' mb-3 mt-2 NewcardImg'>
                              <img style={{ height: '100%', width: '100%', borderRadius: '20px' }} src={`${serverUrl}/uploads/${Item.uploadedImg[0]}`} alt="no img" />
                            </div>
                          </Link>
                          <div className='w-100 text-center mt-2'>
                            <div className='d-flex justify-content-around mb-1'>
                              <p></p>
                              <h6 style={{ textTransform: 'uppercase' }}>{Item?.brand}</h6>
                              <MdBookmarkBorder onClick={() => handleShow(Item, Item?._id)} className='fs-5' />
                            </div>
                            <Link to={`/productdetails/${Item?._id}`} className='text-dark text-decoration-none'>
                              <h6>{Item?.name.slice(0, 20)}...</h6>
                              <p>{Item?.color.slice(0, 25)}</p>
                              <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> {Item?.price}</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                    :
                    <div className='w-100 d-flex align-items-center justify-content-center'>
                      <div className='w-50'>
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/search-not-found-5342748-4468820.png" alt="no img" width={'50%'} />
                      </div>
                    </div>
                  }

                </div>
              </div>
            </div>
          }
        </div>
      </div>

      {/* modal for size */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg' style={{ marginTop: '80px' }}>
        <Modal.Header closeButton closeVariant='white' style={{ backgroundColor: 'rgba(14, 11, 52, 1)' }}>
          <Modal.Title className='text-white'>Superkicks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mt-4'>
            <div className="conatiner-fluid">
              <div className="row">
                <div className="col-md-4 col- d-flex justify-content-center align-items-center">
                  {aProduct &&
                    <div className='border border-primary shadow' style={{ borderRadius: '20px' }}>
                      <img src={`${serverUrl}/uploads/${aProduct?.uploadedImg[0]}`} alt="" style={{ borderRadius: '20px', width: '100%' }} className='shadow' />
                    </div>
                  }
                </div>
                {/* <div className="col-md-1"></div> */}
                <div className="col-md-6 mt-3 mt-md-0">
                  <h6>{aProduct?.brand}</h6>
                  <h5>{aProduct?.name}</h5>
                  <p>{aProduct?.color}</p>
                  <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> {aProduct?.price}</p>

                  <div className='d-flex mt-3'>
                    {aProduct?.size &&
                      Object.entries(aProduct?.size).map(([label, qty]) => (
                        <div key={label}>

                          <button onClick={() => handleSize(label, qty - 1)} className={`border px-md-4 px-3 py-2 bg-white fs-6 border-dark me-3 mb-2 ${qty == 0 ? "opacity-50 disabled" : ""} ${selectedSize == label ? "text-secondary  border-secondary opacity-75" : ""}`} disabled={qty == 0}>
                            {label}
                          </button>

                          {qty == 0 && <p className='text-danger'>out of <br /> stock</p>}
                        </div>
                      ))}
                  </div>

                  <div className='mt-2'>
                    <Link to={`/productdetails/${aProduct?._id}`}><h6>view Product <IoArrowForwardCircleSharp /></h6></Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleCart}>ADD TO CART</Button>
        </Modal.Footer>
      </Modal>

      {/* Toast conatiner */}
      <ToastContainer position="top-center" autoClose={800} transition={Slide} theme="light" />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Apparels