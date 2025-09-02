import React, { useEffect, useState } from 'react'
// import logo from '../../assets/logo.png'
import { FaPowerOff } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const AdminHeader = () => {
    const navigate = useNavigate()

    const [token, setToken] = useState('')

    // handle logout
    const handleLogout = () => {
        sessionStorage.removeItem('token')
        navigate('/login')
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }
        else {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <div className='d-flex justify-content-between align-items-center px-2 px-lg-5 ' style={{ height: '100px' , backgroundColor: 'rgba(240, 225, 209, 1)'}}>
                <div className='d-none d-lg-flex'>
                    <img src='https://seeklogo.com/images/N/nike-jordan-air-shoe-logo-3F633DDA45-seeklogo.com.png' alt="no img" style={{ width: '100px' }} />
                </div>
                <div>
                    <img src="https://www.superkicks.in/cdn/shop/files/new_logo-removebg-preview_1.png?v=1734605330" alt="" style={{ width: '300px' }} />
                </div>
                <div>
                    {token ? <button className='btn border border-danger text-danger w-100' type='button' onClick={handleLogout}>Logout <FaPowerOff /></button>
                        :
                        <Link to={'/login'}><button className='btn border border-success text-success' >Login <FaPowerOff /></button></Link>}
                </div>
            </div>
        </>
    )
}

export default AdminHeader