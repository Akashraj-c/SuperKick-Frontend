import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import { getAllUsersApi } from '../../services/allApi'
import { Spinner } from 'react-bootstrap'
import AdminHeader from '../components/AdminHeader'

const UserDetails = () => {

    const [allUsers, setAllUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // get all users
    const getAllUsers = async () => {
        const result = await getAllUsersApi()
        // console.log(result);
        if (result.status == 200) {
            setTimeout(() => {
                setIsLoading(false)
                setAllUsers(result.data)
            }, 500)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <>
            {/* Header */}
            <AdminHeader />

            {isLoading ?
                <div className='col-md-9 mainCol d-flex justify-content-center mt-5 px-5 py-5 w-100'>
                    <Spinner animation="border" variant="primary" />
                </div>
                :
                <div className="container" style={{ marginTop: '100px' }}>
                    <div className="row pb-5">
                        {allUsers?.filter((item) => item.email != 'superkicksadmin@gmail.com').map((item) => (
                            <div className="col-md-4 mb-4">
                                <div className='d-flex justify-content-center align-items-center shadow' style={{ borderRadius: '20px' }}>
                                    <div className='me-3'>
                                        <img src="https://cdn-icons-png.flaticon.com/512/9152/9152843.png" alt="no img" style={{ width: '100px' }} />
                                    </div>
                                    <div>
                                        <h5>{item?.username}</h5>
                                        <h6 className='d-flex' style={{ flexWrap: 'wrap' }}>{item?.email}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }

            {/* Footer */}
            <Footer />
        </>
    )
}

export default UserDetails