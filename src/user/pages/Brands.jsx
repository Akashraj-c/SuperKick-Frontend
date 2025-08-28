import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoMdSearch } from 'react-icons/io';
import { getAllBrandApi } from '../../services/allApi';

const Brands = () => {
  const [allBrands, setAllBrands] = useState([])

  // Get all brands
  const GetAllBrands = async () => {
    const result = await getAllBrandApi()
    console.log(result);
    if (result.status == 200) {
      setAllBrands(result.data)
    }
  }

  useEffect(() => {
    GetAllBrands()
  }, [])

  return (
    <>
      {/* Header */}
      <Header />

      <div className='d-flex container justify-content-between px-5 w-100' style={{ marginTop: '150px' }} >
        <div className='w-100 d-flex align-items-center'>
          <input type="text" placeholder='search brand...' className='form-control w-50' />
          <IoMdSearch style={{ marginLeft: '-30px' }} className='fs-5' />
        </div>

        <div>
          <DropdownButton variant='secondary' id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">No-Filter</Dropdown.Item>
            <Dropdown.Item href="#/action-2">A-Z</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Z-A</Dropdown.Item>
          </DropdownButton>

        </div>
      </div>

      <div className="container mt-5">
        <div className="row px-5">
          {allBrands?.length > 0 ?
            allBrands.map((items, index) => (
              <div key={index} className="col-md-4 mb-4">
                <h6>{items?.brandname}</h6>
              </div>
            ))
            :
            <div className='w-100 d-flex align-items-center justify-content-center'>
              <div className='w-50'>
                <img src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png" alt="no img" width={'100%'} />
              </div>
            </div>
          }
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Brands