import React from 'react'
import { FaCartPlus, FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <>
      <header style={{ width: '100%', height: '100px' }}>
        <div style={{ position: 'fixed', backgroundColor: 'white', zIndex: '1' }} className="container-fluid">
          <div className="row  d-flex justify-content-center align-items-center px-3 pt-2" >
            <div className="col-md-2">
              <Link to={'/'}> <img src={logo} alt="no img" style={{ width: '100px' }} /></Link>
            </div>
            <div className="col-md-8">
              {location.pathname != '/cart' && location.pathname != '/wishlist' && <div>
                <div className='mb-3 d-flex align-items-center justify-content-center'>
                  <input type="text" placeholder='Find Your Drip' className='form-control shadow w-50' style={{ backgroundColor: '#e8f4f8' }} />
                  <MdOutlineSearch className='fs-4' style={{ marginLeft: '-40px' }} />
                </div>
                <ul className='list-unstyled d-flex justify-content-evenly '>
                  <Link to={'/'} className='fw-bold text-decoration-none text-black'><li>HOME</li></Link>
                  <Link to={'/newarrival'} className='fw-bold text-decoration-none text-black'><li className='fw-bold'>NEW ARRIVALS</li></Link>
                  <Link to={'/sneakers'} className='fw-bold text-decoration-none text-black'><li className='fw-bold'>SNEAKERS</li></Link>
                  <Link to={'/apparels'} className='fw-bold text-decoration-none text-black'><li className='fw-bold'>APPARELS</li></Link>
                  <li className='fw-bold'>BRANDS</li>
                  <li className='fw-bold'>BLOGS</li>
                </ul>
              </div>}

              {location.pathname == '/cart' && <div className='w-100 d-flex justify-content-center'>
                <h2 className='fw-bold'>CART</h2>
              </div>}

              {location.pathname == '/wishlist' && <div className='w-100 d-flex justify-content-center'>
                <h2 className='fw-bold'>WISHLIST</h2>
              </div>}
            </div>
            <div className="col-md-2">
              <ul className='list-unstyled d-flex justify-content-end align-items-center'>
                <Link to={'/wishlist'}><li className='fw-bold me-4 fs-5 text-black'><FaRegHeart /></li></Link>
                <Link to={'/cart'}><li className='fw-bold me-4 fs-5 text-black'><FaCartPlus /></li></Link>
                <li className='fw-bold fs-5'><FaRegUser /></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header