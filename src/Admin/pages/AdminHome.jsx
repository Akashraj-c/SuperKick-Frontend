import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import '../../style/Adminpages.css'
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Footer from '../../components/Footer'
import { getAllOrdersApi, getAllProductApi, getAllUsersApi } from '../../services/allApi'
import { searhKeyContext } from '../../context/Contextshare'
import { Link } from 'react-router-dom'

const AdminHome = () => {
    const { searchKey, setSearchKey } = useContext(searhKeyContext)

    const [allUsers, setAllUsers] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [allOrders, setAllOrders] = useState([])
    const [token, setToken] = useState(() => sessionStorage.getItem('token'))
    // get all users
    const getAllUsers = async () => {
        const result = await getAllUsersApi()
        // console.log(result);
        if (result.status == 200) {
            setAllUsers(result.data)
        }
    }

    // get All products
    const getAllProducts = async () => {
        const result = await getAllProductApi(searchKey)
        // console.log(result);
        setAllProducts(result.data)
    }

    // get all ordered products
    const getAllOrders = async () => {

        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getAllOrdersApi(reqHeader)
        console.log(result);
        if (result.status == 200) {
            setAllOrders(result.data)
        }
    }

    // bar chart
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]

    // pie chart
    const data01 = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];
    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
        {
            "name": "Group E",
            "value": 3908
        },
        {
            "name": "Group F",
            "value": 4800
        }
    ];

    useEffect(() => {
        getAllUsers()
        getAllProducts()
        getAllOrders()
    }, [])

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
                                    <Link to={'/allusers'} className='text-decoration-none'>
                                        <div className='rounded text-center py-3 infoDiv' >
                                            <h4 className='fw-bold text-white'>Total Number of User</h4>
                                            <h1 className='fw-bold mt-3 text-white'>{allUsers?.length}</h1>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <Link to={'/adminproducts'} className='text-decoration-none'>
                                        <div className='rounded text-center py-3 infoDiv' >
                                            <h4 className='fw-bold text-white'>Total Number of Products</h4>
                                            <h1 className='fw-bold mt-3 text-white'>{allProducts?.length}</h1>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <Link to={'/order'} className='text-decoration-none'>
                                        <div className='rounded text-center py-3 infoDiv' >
                                            <h4 className='fw-bold text-white'>Total Number of Orders</h4>
                                            <h1 className='fw-bold mt-3 text-white'>{allOrders?.length}</h1>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* recharts */}
                            <div style={{ marginTop: '70px' }} className='d-flex'>
                                <div className='w-75' style={{ height: '400px' }}>
                                    <ResponsiveContainer width={"100%"} height={"100%"} >
                                        <BarChart data={data}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pv" fill="#8884d8" />
                                            <Bar dataKey="uv" fill="#82ca9d" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className='w-50' style={{ height: '400px' }}>
                                    <ResponsiveContainer width={"100%"} height={"100%"}>
                                        <PieChart width={730} height={250}>
                                            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                                            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default AdminHome