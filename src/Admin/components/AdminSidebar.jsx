import React, { useEffect, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import { FaBlog } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
    const navigate = useNavigate()

    const [sidebarCollapse, setSidebarCollapse] = useState(false)
    const [homeStatus, setHomeStatus] = useState(false)
    const [brandStatus, setBrandStatus] = useState(false)
    const [productStatus, setProductStatus] = useState(false)
    const [blogStatus, setBlogStatus] = useState(false)


    const filter = (data) => {
        if (data == 'Home') {
            navigate('/adminhome')
        }
        else if (data == 'Brands') {
            navigate('/adminbrands')
        }
        else if (data == 'Products') {
            navigate('/adminproducts')
        }
        else {
            navigate('/adminblogs')
        }
    }

    useEffect(() => {
        if (location.pathname == '/adminhome') {
            setHomeStatus(true)
        }
        else if (location.pathname == '/adminbrands') {
            setBrandStatus(true)
        }
        else if (location.pathname == '/adminproducts') {
            setProductStatus(true)
        }
        else if (location.pathname == '/adminblogs') {
            setBlogStatus(true)
        }
        else {
            console.log('no such page');

        }
    }, [])

    return (
        <div style={{ backgroundColor: 'rgba(229, 224, 219, 1)', height: '170vh', marginLeft: '-15px' }} className='d-flex flex-column align-items-center shadow'>
            <div className='d-flex flex-column align-items-center'>
                <img src={logo} alt="no img" style={{ width: '150px' }} />
                <FaBars className='d-lg-none' onClick={() => setSidebarCollapse(!sidebarCollapse)} />
            </div>

            <div className='d-none d-lg-flex flex-column'>
                <div className="form-check" onClick={() => filter('Home')}>
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={homeStatus} readOnly/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        <h6 className='ms-2 fw-bold'><FaHome className='fs-5 me-1' /> Home</h6>
                    </label>
                </div>
                <div className="form-check mt-3" onClick={() => filter('Brands')}>
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked={brandStatus} readOnly/>
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        <h6 className='ms-2 fw-bold'><SiBrandfolder className='fs-5 me-1' /> Brands</h6>
                    </label>
                </div>

                <div className="form-check mt-3" onClick={() => filter('Products')}>
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2" checked={productStatus} readOnly/>
                    <label className="form-check-label" htmlFor="exampleRadios3">
                        <h6 className='ms-2 fw-bold'><TiShoppingCart className='fs-5 me-1' /> Products</h6>
                    </label>
                </div>

                <div className="form-check mt-3" onClick={() => filter('Blogs')}>
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option2" checked={blogStatus} readOnly/>
                    <label className="form-check-label" htmlFor="exampleRadios4">
                        <h6 className='ms-2 fw-bold'><FaBlog className='fs-5 me-1' /> Blogs</h6>
                    </label>
                </div>
            </div>

            {/* Side bar collapse */}
            {sidebarCollapse && <div className='d-none d-lg-flex flex-column'>
                <div className="form-check" onClick={() => filter('Home')}>
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={homeStatus} readOnly/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        <h6 className='ms-2 fw-bold'><FaHome className='fs-5 me-1' /> Home</h6>
                    </label>
                </div>
                <div className="form-check mt-3" onClick={() => filter('Brands')}>
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked={brandStatus} readOnly/>
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        <h6 className='ms-2 fw-bold'><SiBrandfolder className='fs-5 me-1' /> Brands</h6>
                    </label>
                </div>

                <div className="form-check mt-3" onClick={() => filter('Products')}>
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2" checked={productStatus} readOnly/>
                    <label className="form-check-label" htmlFor="exampleRadios3">
                        <h6 className='ms-2 fw-bold'><TiShoppingCart className='fs-5 me-1' /> Products</h6>
                    </label>
                </div>

                <div className="form-check mt-3" onClick={() => filter('Blogs')}>
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option2" checked={blogStatus} readOnly/>
                    <label className="form-check-label" htmlFor="exampleRadios4">
                        <h6 className='ms-2 fw-bold'><FaBlog className='fs-5 me-1' /> Blogs</h6>
                    </label>
                </div>
            </div>}
        </div>

    )
}

export default AdminSidebar