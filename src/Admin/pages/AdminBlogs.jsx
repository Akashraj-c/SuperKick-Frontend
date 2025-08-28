import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'

const AdminBlogs = () => {
    return (
        <>
            {/* header */}
            <AdminHeader />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>

                    <div className="col-md-9">
                        <h1>home</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminBlogs