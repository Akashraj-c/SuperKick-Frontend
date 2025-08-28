import React, { useEffect, useState } from 'react'
// import logo from '../../assets/logo.png'
import { FaPowerOff } from "react-icons/fa6";

const AdminHeader = () => {
    const [token, setToken] = useState('')

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }
    }, [])

    return (
        <>
            <div className='d-flex justify-content-between align-items-center px-2 px-lg-5 shadow' style={{ height: '100px' }}>
                <div className='d-none d-lg-flex'>
                    <img src='https://seeklogo.com/images/N/nike-jordan-air-shoe-logo-3F633DDA45-seeklogo.com.png' alt="no img" style={{ width: '100px' }} />
                </div>
                <div>
                    <img src="https://www.superkicks.in/cdn/shop/files/new_logo-removebg-preview_1.png?v=1734605330" alt="" style={{ width: '300px' }} />
                </div>
                <div>
                    {token ? <button className='btn border border-danger text-danger w-100'>Logout <FaPowerOff /></button>
                        :
                        <button className='btn border border-success text-success'>Login <FaPowerOff /></button>}
                </div>
            </div>
        </>
    )
}

export default AdminHeader