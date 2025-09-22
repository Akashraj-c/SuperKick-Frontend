import React, { useEffect, useState } from 'react'
import { deleteCommentsApi, getCommentsApi } from '../../services/allApi'
import { FaUserCircle } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { GoTrash } from "react-icons/go";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AdminHeader from '../components/AdminHeader';
import Footer from '../../components/Footer';

const AllComments = () => {
    const { id } = useParams() //for showing details

    const [allComments, setAllComments] = useState([])
    const [Id, setId] = useState("") // for delete a comment
    const [updateStatus, setUpdateStatus] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setId(id)
        setShow(true);
    }

    // get All Comments 
    const getAllComments = async () => {
        const result = await getCommentsApi(id)
        // console.log(result);
        setAllComments(result.data)
    }

    // Delete a comment
    const handleDelete = async () => {
        const result = await deleteCommentsApi(Id)
        // console.log(result);
        if (result.status == 200) {
            setUpdateStatus(result.data)
            handleClose()
        }
    }

    useEffect(() => {
        getAllComments()
    }, [updateStatus])

    return (
        <>
            {/* header */}
            <AdminHeader />

            {/* All comments Section */}
            <div className='d-flex flex-column align-items-center justify-content-center w-100 mt-5'>
                <h4 className='fw-bold mb-4'>Comments ({allComments?.length})</h4>
                {allComments?.length > 0 ?
                    allComments?.map((items, index) => (
                        <div key={index} className='d-flex justify-content-center align-items-center w-100'>
                            <div className='d-flex flex-column align-items-center w-75 py-1 border px-3 shadow border mb-4' style={{ borderRadius: '25px' }}>
                                <div className='w-100 me-1 d-flex align-items-center'>
                                    <h6 className='fs-3 me-4' ><FaUserCircle /></h6>
                                    <h6>{items?.userName}</h6>
                                </div>
                                <div className='ms-5'>
                                    <p style={{ textAlign: 'justify' }}>{items?.comment}</p>
                                </div>
                                <div className='w-100 d-flex justify-content-end px-3'>
                                    <span style={{ fontSize: '13px' }}>{new Date(items.updatedAt).toLocaleDateString("en-US", { month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" })}</span>
                                </div>
                            </div>
                            <div className='ms-4 shadow rounded border p-2'>
                                <GoTrash onClick={() => handleShow(items?._id)} className='fs-5 text-danger' style={{ cursor: 'pointer' }} />
                            </div>
                        </div>
                    ))
                    :
                    <div className='text-center'>
                        <p>No Comments</p>
                    </div>
                }
            </div>

            {/* Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                style={{ marginTop: '100px' }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this comment.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default AllComments