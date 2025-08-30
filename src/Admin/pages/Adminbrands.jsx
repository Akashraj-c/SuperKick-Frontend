import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoMdSearch } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import { addBrandApi, deleteBrandApi, getAllBrandApi } from '../../services/allApi';
import { GoTrash } from 'react-icons/go';
import { IoSettingsOutline } from "react-icons/io5";
import { TbSettingsOff } from "react-icons/tb";
import { searhKeyContext } from '../../context/Contextshare';

const Adminbrands = () => {
    const { searchKey, setSearchKey } = useContext(searhKeyContext)

    const [brandDetails, setBrandDetails] = useState({
        brandname: "",
        imageurl: ""
    })
    const [token, setToken] = useState('')
    const [allBrands, setAllBrands] = useState([])
    const [tempArray, setTempArray] = useState([])
    const [updateStatus, setUpdateStatus] = useState('')
    const [settingsStatus, setSettingsStatus] = useState(false)
    const [AbrandData, setABrandData] = useState('')
    const [selectedFilter, setSelectedFilter] = useState('Relevance')
    const [show, setShow] = useState(false); //add brand modal
    const [show1, setShow1] = useState(false); //Delete brand modal

    const handleClose = () => { //add brand modal
        setShow(false);
        handleReset()
    }
    const handleShow = () => { //add brand modal
        setShow(true);
        setSettingsStatus(false)
    }
    const handleClose1 = () => setShow1(false); //Delete brand modal
    const handleShow1 = (data) => { //Delete brand modal
        setShow1(true);
        setABrandData(data) //Data of the particular brand
    }

    // handle Reset button
    const handleReset = () => {
        setBrandDetails({
            brandname: "",
            imageurl: ""
        })
    }

    // Add New Brand
    const handleAdd = async () => {
        const { brandname, imageurl } = brandDetails

        if (!brandDetails || !imageurl) {
            toast.info('please fill the form completely')
        }
        else {
            const reqHeader = { 'Authorization': `Bearer ${token}` }
            const reqBody = { brandname, imageurl }
            const result = await addBrandApi(reqBody, reqHeader)
            // console.log(result);

            if (result.status == 200) {
                toast.success('Brand Added successfully')
                handleReset()
                setUpdateStatus(result.data)
            }
            else if (result.status == 402) {
                toast.info(result.response.data)
            }
            else {
                toast.error('something went wrong')
            }
        }
    }

    // Get All Brands
    const GetAllBrands = async () => {
        const result = await getAllBrandApi(searchKey)
        // console.log(result);
        if (result.status == 200) {
            setAllBrands(result.data)
            setTempArray(result.data)
        }
    }

    // Delete Brand
    const handleDelete = async () => {
        const result = await deleteBrandApi(AbrandData?._id)
        // console.log(result);

        if (result.status == 200) {
            toast.success(`${result.data.brandname} deleted successfuly`)
            setUpdateStatus(result.data)
            handleClose1()
        }
        else {
            toast.error('Something went wrong')
        }
    }

    // Sorting
    const filter = (data) => {
        setSelectedFilter(data)
        if (data == 'A-Z') {
            setAllBrands([...tempArray].sort((a, b) => a.brandname.localeCompare(b.brandname)));
        }
        else if (data == 'Z-A') {
            setAllBrands([...tempArray].sort((a, b) => b.brandname.localeCompare(a.brandname)));
        }
        else {
            setAllBrands(tempArray);
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }

        GetAllBrands() //get all brands function
    }, [updateStatus, searchKey])

    return (
        <>
            {/* header */}
            <AdminHeader />

            {/* Main Container */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>

                    <div className="col-md-9">
                        <div className='d-flex container justify-content-between px-5 w-100' style={{ marginTop: '80px' }} >
                            <div className='w-100 d-flex align-items-center'>
                                <input type="text" onChange={(e) => setSearchKey(e.target.value)} placeholder='search brand...' className='form-control w-50' />
                                <IoMdSearch style={{ marginLeft: '-30px' }} className='fs-5' />
                            </div>

                            <div className='d-flex w-75 justify-content-end'>
                                <DropdownButton variant='secondary' id="dropdown-basic-button" title={`Sort by : ${selectedFilter}`}>
                                    <Dropdown.Item href="#/action-2" onClick={() => filter('Z-A')}>Z-A</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={() => filter('A-Z')}>A-Z</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" onClick={() => filter('Relevance')}>Relevance</Dropdown.Item>
                                </DropdownButton>

                                <button className='btn btn-success border ms-3' onClick={handleShow}>Add Brand</button>

                                {!settingsStatus ?
                                    <button className='btn btn-warning border ms-3' onClick={() => setSettingsStatus(!settingsStatus)}><IoSettingsOutline /></button>
                                    :
                                    <button className='btn btn-warning border ms-3' onClick={() => setSettingsStatus(!settingsStatus)}> <TbSettingsOff /></button>
                                }
                            </div>

                        </div>

                        <div className="container mt-5">
                            <div className="row px-5">
                                {allBrands?.length > 0 ?
                                    allBrands.map((items, index) => (
                                        <div key={index} className="col-md-4 col-4 mb-4 d-flex">
                                            <h6 style={{ cursor: 'pointer' }}>{items?.brandname}</h6>
                                            {settingsStatus && <h6> <GoTrash className='ms-3 text-danger' style={{ cursor: 'pointer' }} onClick={() => handleShow1(items)} /></h6>}
                                        </div>
                                    ))
                                    :
                                    <div className='w-100 d-flex align-items-center justify-content-center'>
                                        <div className='w-50 mt-5'>
                                            <img src="https://dld-vip.com/img/empty-product.png" alt="no img" width={'100%'} />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/*Add Brand Modal */}
            <Modal modal='true'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                style={{ marginTop: '100px' }
                }
            >
                <Modal.Header closeButton className='bg-secondary'>
                    <Modal.Title className='fw-bold fs-5'>ADD BRANDS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="text" value={brandDetails.brandname} onChange={(e) => setBrandDetails({ ...brandDetails, brandname: e.target.value })} className='form-control' placeholder='Brand Name' />
                    </div>

                    <div className='mt-3'>
                        <input value={brandDetails.imageurl} onChange={(e) => setBrandDetails({ ...brandDetails, imageurl: e.target.value })} type="text" className='form-control' placeholder='Image URL' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>Add</Button>
                </Modal.Footer>
            </Modal >

            {/*Delete Brand confirmation Modal */}
            <Modal modal='true' show={show1} onHide={handleClose1} backdrop="static" keyboard={false} style={{ marginTop: '100px' }}>
                <Modal.Header closeButton className='bg-secondary'>
                    <Modal.Title className='fw-bold fs-5'>{AbrandData?.brandname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this brand?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>Cancel</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>

            {/* Toast conatiner */}
            < ToastContainer position="top-center" autoClose={1500} theme="colored" />
        </>
    )
}

export default Adminbrands