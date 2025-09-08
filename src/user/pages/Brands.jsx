import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoMdSearch } from 'react-icons/io';
import { getAllBrandApi } from '../../services/allApi';
import { searhKeyContext } from '../../context/Contextshare';
import { Link } from 'react-router-dom';

const Brands = () => {
  const { searchKey, setSearchKey } = useContext(searhKeyContext)

  const [allBrands, setAllBrands] = useState([])
  const [tempArray, setTempArray] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Relevance')

  // Get all brands
  const GetAllBrands = async () => {
    const result = await getAllBrandApi(searchKey)
    // console.log(result);
    if (result.status == 200) {
      setAllBrands(result.data)
      setTempArray(result.data)
    }
  }

  // Sorting
  const filter = (data) => {
    setSelectedFilter(data)
    if (data == 'A-Z') {
      setAllBrands([...tempArray].sort((a, b) => a.brandname.localeCompare(b.brandname)));
    }
    else if (data == 'Z-A') {
      setAllBrands([...tempArray].sort((a, b) => b.brandname.localeCompare(a.brandname)));
    }
    else {
      setAllBrands(tempArray);
    }
  }

  useEffect(() => {
    GetAllBrands()
  }, [searchKey])

  return (
    <>
      {/* Header */}
      <Header />

      <div className='d-lg-flex container justify-content-lg-between justify-content-end px-5 w-100' style={{ marginTop: '150px', userSelect: 'none' }} >
        <div className='w-100 d-flex align-items-center'>
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} placeholder='search brand...' className='form-control w-25 ' name='Brand' />
          <IoMdSearch style={{ marginLeft: '-30px' }} className='fs-5' />
        </div>

        <div>
          <DropdownButton variant='secondary' id="dropdown-basic-button" title={`Sort by : ${selectedFilter}`}>
            <Dropdown.Item href="#/action-2" onClick={() => filter('Z-A')}>Z-A</Dropdown.Item>
            <Dropdown.Item href="#/action-1" onClick={() => filter('A-Z')}>A-Z</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={() => filter('Relevance')}>Relevance</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      <div className="container mt-5" style={{ userSelect: 'none' }}>
        <div className="row px-5">
          {allBrands?.length > 0 ?
            allBrands.map((items, index) => (
              <div key={index} className="col-md-4 col-4 mb-4">
                <Link to={`/selectedbrandproducts/${items?.brandname}`} className='text-dark text-decoration-none'> <h6>{items?.brandname}</h6></Link>
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

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Brands