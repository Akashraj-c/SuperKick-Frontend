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
import { getAllSneakersApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';
import { searhKeyContext, sideBarFilterContext } from '../../context/Contextshare';

const Sneakers = () => {
  const { searchKey, setSearchKey } = useContext(searhKeyContext)
  const { filters, setFilters } = useContext(sideBarFilterContext)

  const [filterCollapse, setFilterCollpase] = useState(false)
  const [allSneakers, setAllSneakers] = useState([])
  const [tempArray, setTempArray] = useState([])
  const [filterButtonData, setFilterBottomData] = useState('Relevance')

  // get All Sneakers
  const getAllSneakers = async () => {
    const result = await getAllSneakersApi(searchKey)
    // console.log(result);
    if (result.status == 200) {
      setAllSneakers(result.data)
      setTempArray(result.data)
    }
  }

  // filter button
  const filterButton = (data) => {
    setFilterBottomData(data)
    if (data == 'L-H') {
      setAllSneakers([...tempArray].sort((a, b) => a.price - b.price))
    }
    else if (data == 'H-L') {
      setAllSneakers([...tempArray].sort((a, b) => b.price - a.price))
    }
    else {
      setAllSneakers(tempArray)
    }
  }

  useEffect(() => {
    getAllSneakers()
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

    setAllSneakers(filtered);
  }, [filters, tempArray]);

  return (
    <>
      {/* Header */}
      <Header />

      <div style={{ marginTop: '140px', userSelect: 'none' }} >
        <p className='px-5 d-lg-flex d-none' style={{ color: 'rgba(94, 89, 89, 0.53)', fontSize: '14px' }}><Link to={'/'} className='text-decoration-none' style={{ color: 'rgba(94, 89, 89, 0.53)' }}>HOME</Link> / SNEAKERS </p>
      </div>

      <div className='d-flex justify-content-between align-items-center px-lg-5 px-2 mt-4' style={{ userSelect: 'none' }}>
        <div>
          <h3>Sneakers</h3>
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

      {/* Main Container */}
      <div className='container-fluid' style={{ userSelect: 'none' }}>
        <div className='row d-flex'>
          <div className='col-md-3 px-5 d-lg-flex d-none flex-column align-items-center border-end filterCol' style={{ height: '100vh', overflowY: 'auto', position: "sticky", top: '0' }}>
            <HomeSidebar />
          </div>

          {/* filter collapse */}
          {filterCollapse && <div className='col-md-3  px-5 d-lg-none flex-colum filterCol bg-black text-white' style={{ height: '100vh', overflowY: 'auto', position: "sticky", top: '0' }}>
            <HomeSidebar />
          </div>}

          <div className='col-md-9 mainCol' >
            <div className="container- ">
              <div className="row">

                {allSneakers?.map((Item, index) => (
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
                          <MdBookmarkBorder className='fs-5' />
                        </div>
                        <Link to={`/productdetails/${Item?._id}`} className='text-dark text-decoration-none'>
                          <h6>{Item?.name.slice(0, 20)}...</h6>
                          <p>{Item?.color.slice(0, 25)}</p>
                          <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> {Item?.price}</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Sneakers