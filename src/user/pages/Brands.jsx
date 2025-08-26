import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Brands = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <div className='d-flex container justify-content-between px-5 w-100' style={{ marginTop: '150px' }} >
        <div className='w-100'>
          <input type="text" placeholder='search name...' className='form-control w-25' />
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
          <div className="col-md-4 mb-3">
            <h6>Adida</h6>
          </div>
          <div className="col-md-4 mb-3">
            <h6>Nike</h6>
          </div>
          <div className="col-md-4 mb-3">
            <h6>Puma</h6>
          </div>
           <div className="col-md-4 mb-3">
            <h6>Puma</h6>
          </div>
           <div className="col-md-4 mb-3">
            <h6>Puma</h6>
          </div>
           <div className="col-md-4 mb-3">
            <h6>Puma</h6>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Brands