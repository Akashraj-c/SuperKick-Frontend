import React, { useContext, useEffect, useState } from 'react'
import { FaCartPlus, FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineSearch } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaBars } from "react-icons/fa6";
import CurvedLoop from '../../ReactBits/CurvedLoop/CurvedLoop';
import { searhKeyContext } from '../../context/Contextshare';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoIosLogOut } from 'react-icons/io';
import { TbLogin2 } from 'react-icons/tb';

const Header = () => {
  const { searchKey, setSearchKey } = useContext(searhKeyContext)
  const navigate = useNavigate()

  const [menuCollapse, setMenuCollapse] = useState(false)
  const [token, setToken] = useState('')

  // handle logout
  const handleLogout = () => {
    if (sessionStorage.getItem('token')) {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('existingUser')
      navigate('/login')
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      const tok = sessionStorage.getItem('token')
      setToken(tok)
    }
  }, [])

  return (
    <div className='w-100 z-1' style={{ position: 'fixed', top: '0px', userSelect: 'none' }}>

      <header style={{ width: '100%', height: '100px' }}>
        <div style={{ position: '', backgroundColor: 'white', zIndex: '1' }} className="container-fluid">
          <div className="row  align-items-center px-3 pt-2 shadow" >

            <div className="col-md-2 d-flex justify-content-between align-items-center">
              <Link to={'/'}> <img src={logo} alt="no img" style={{ width: '100px' }} /></Link>
              <FaBars onClick={() => setMenuCollapse(!menuCollapse)} className='text-balck d-lg-none fs-1' />
            </div>

            <div className="col-md-8">
              {location.pathname != '/cart' && location.pathname != '/wishlist' && <div>
                <div className='mb-3 d-lg-flex d-none align-items-center justify-content-center'>
                  <input type="text" placeholder='Find Your Drip' onChange={(e) => setSearchKey(e.target.value)} className='form-control shadow w-50' style={{ backgroundColor: '#e8f4f8' }} name='header'
                  />
                  <MdOutlineSearch className='fs-4' style={{ marginLeft: '-40px' }} />
                </div>
                <ul className='list-unstyled d-lg-flex d-none justify-content-evenly '>
                  <Link to={'/'} className={location.pathname == '/' ? 'fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none text-black'}><li>HOME</li></Link>
                  <Link to={'/newarrival'} className={location.pathname == '/newarrival' ? 'fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none text-black'}><li className='fw-bold'>NEW ARRIVALS</li></Link>
                  <Link to={'/sneakers'} className={location.pathname == '/sneakers' ? 'fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none text-black'}><li className='fw-bold'>SNEAKERS</li></Link>
                  <Link to={'/apparels'} className={location.pathname == '/apparels' ? 'fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none text-black'}><li className='fw-bold'>APPARELS</li></Link>
                  <Link to={'/brands'} className={location.pathname == '/brands' ? 'fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none text-black'}><li className='fw-bold'>BRANDS</li></Link>
                  <Link to={'/blogs'} className={location.pathname == '/blogs' ? 'fw-bold text-decoration-none text-danger' : 'fw-bold text-decoration-none text-black'}><li className='fw-bold'>BLOGS</li></Link>
                </ul>

                {/* Menu Collpase */}
                {menuCollapse && <ul className='list-unstyled z-1 d-lg-none d-flex flex-column align-items-center'>
                  <Link to={'/'} className='fw-bold text-decoration-none text-black'><li className='mt-5'>HOME</li></Link>
                  <Link to={'/newarrival'} className='fw-bold text-decoration-none text-black'><li className=' mt-3'>NEW ARRIVALS</li></Link>
                  <Link to={'/sneakers'} className='fw-bold text-decoration-none text-black'><li className=' mt-3'>SNEAKERS</li></Link>
                  <Link to={'/apparels'} className='fw-bold text-decoration-none text-black'><li className=' mt-3'>APPARELS</li></Link>
                  <Link to={'/brands'} className='fw-bold text-decoration-none text-black'><li className=' mt-3'>BRANDS</li></Link>
                  <Link to={'/blogs'} className='fw-bold text-decoration-none text-black'><li className=' mt-3'>BLOGS</li></Link>
                </ul>}
              </div>}

              {location.pathname == '/cart' && <div className='w-100 d-flex justify-content-center'>
                <h2 className='fw-bold'>CART</h2>
              </div>}

              {location.pathname == '/wishlist' && <div className='w-100 d-flex justify-content-center'>
                <h2 className='fw-bold'>WISHLIST</h2>
              </div>}
            </div>

            <div className="col-md-2">
              <ul className='list-unstyled d-lg-flex d-none justify-content-end align-items-center'>
                <Link to={'/wishlist'}><li className='fw-bold me-4 fs-5 text-black'><FaRegHeart /></li></Link>
                <Link to={'/cart'}><li className='fw-bold me-3 fs-5 text-black'><FaCartPlus /></li></Link>
                <DropdownButton id="dropdown-basic-button" variant='transparent' title={<h5><FaRegUser /></h5>} style={{ backgroundColor: 'transparent' }} className="no-caret mt-1">
                  <Link to={'/profile'} className='text-decoration-none'><Dropdown.Item href="#/action-1" className='text-center fw-bold'>Profile</Dropdown.Item></Link>
                  {token ?
                    <Dropdown.Item href="#/action-2" style={{ backgroundColor: 'transparent' }}><button className='btn w-100 border border-danger fw-bold shadow' onClick={handleLogout}>Logout <IoIosLogOut className='text-danger fs-5' /></button></Dropdown.Item>
                    :
                    <Link to={'/login'}><Dropdown.Item href="#/action-2" style={{ backgroundColor: 'transparent' }}><button className='btn w-100 border border-primary fw-bold shadow'>Login <TbLogin2 className='text-primary fs-5' /></button></Dropdown.Item></Link>
                  }
                </DropdownButton>
              </ul>

              {/*Menu collapse */}
              {menuCollapse && <ul className='list-unstyled d-flex d-lg-none align-items-center justify-content-between mt-4' style={{ padding: '0px 70px 0px 70px' }}>
                <Link to={'/wishlist'}><li className='fw-bold me-4 fs-5 text-black'><FaRegHeart /></li></Link>
                <Link to={'/cart'}><li className='fw-bold me-3 fs-5 text-black'><FaCartPlus /></li></Link>
                <DropdownButton id="dropdown-basic-button" variant='transparent' title={<h5><FaRegUser /></h5>} style={{ backgroundColor: 'transparent' }} className="no-caret mt-1">
                  <Link to={'/profile'} className='text-decoration-none'><Dropdown.Item href="#/action-1" className='text-center fw-bold'>Profile</Dropdown.Item></Link>
                  {token ?
                    <Dropdown.Item href="#/action-2" style={{ backgroundColor: 'transparent' }}><button className='btn w-100 border border-danger fw-bold shadow' onClick={handleLogout}>Logout <IoIosLogOut className='text-danger fs-5' /></button></Dropdown.Item>
                    :
                    <Link to={'/login'}><Dropdown.Item href="#/action-2" style={{ backgroundColor: 'transparent' }}><button className='btn w-100 border border-primary fw-bold shadow'>Login <TbLogin2 className='text-primary fs-5' /></button></Dropdown.Item></Link>
                  }
                </DropdownButton>
              </ul>}
            </div>

          </div>
        </div>
      </header>

      {/* infinite loop */}
      {location.pathname == '/' && <div className='w-100 z-1' style={{ overflowX: 'hidden' }}>
        <CurvedLoop
          marqueeText="ASIA'S #1 HYPE AND LUXURY APP    ✦    GLOBALLY RECOGNISED AUTHENTICATION CERTIFICATE    ✦    SHARK SALE IS LIVE - GET UPTO 70% OFF    ✦    WORLD'S LARGEST COLLECTION OF LEGIT DRIP "
          speed={1}
          curveAmount={0}
          direction="left"
          interactive={true}
          className="custom-text-style "
        />
      </div>}

    </div>
  )
}

export default Header