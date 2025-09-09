import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import '../../style/Adminpages.css'

const AdminHome = () => {
    return (
        <>
            {/* header */}
            <AdminHeader />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <AdminSidebar />
                    </div>

                    <div className="col-md-9 ms-lg-5">

                        <div className="container-fluid">
                            <div className="row mt-3">
                                <div className="col-md-4 mt-3">
                                    <div className='rounded text-center py-3 infoDiv' >
                                        <h4 className='fw-bold text-white'>Total Number of User</h4>
                                        <h1 className='fw-bold mt-3 text-white'>100</h1>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className='rounded text-center py-3 infoDiv' >
                                        <h4 className='fw-bold text-white'>Total Number of Products</h4>
                                        <h1 className='fw-bold mt-3 text-white'>547</h1>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className='rounded text-center py-3 infoDiv' >
                                        <h4 className='fw-bold text-white'>Total Number of Products</h4>
                                        <h1 className='fw-bold mt-3 text-white'>32</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminHome