import React from 'react'
import Header from '../components/Header'
import { HiTrash } from "react-icons/hi2";

const Cart = () => {
  return (
    <>
      <Header />
<div className='d-flex flex-column justify-content-center align-items-center mt-5'>
  
        <div className='d-flex align-items-center w-50  shadow' style={{borderRadius:'20px',height:'300px'}}>
          <div  style={{ height: '100%', width: '50%', borderRadius: '20px',marginRight:'50px' }}>
            <img style={{ height: '100%', width: '80%', borderRadius: '20px' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
          </div>
          <div className='d-flex flex-column align-items-center justify-content-center '>
            <h5>Brand Name</h5>
            <h5>GEL-QUANTUM 360 VIII</h5>      
            <p>Product Color</p>      
            <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> 7,899</p>
            <p className='border p-1 rounded fw-bold me-1' style={{ fontSize: '16px', backgroundColor: 'rgba(221, 214, 214, 0.6)',width:'60px' }}> UK : 8</p>
            <div className='d-flex align-items-center '>
              <h6 className='border rounded fw-bold d-flex justify-content-center' style={{ fontSize: '20px', backgroundColor: 'rgba(221, 214, 214, 0.6)',width:'25px' }}>+</h6>
              <h6 className='mx-2'>0</h6>
              <h6 className='border rounded fw-bold d-flex justify-content-center' style={{ fontSize: '20px', backgroundColor: 'rgba(221, 214, 214, 0.6)',width:'25px' }}>-</h6>
            </div>
            
             <button className='btn btn-danger w-100 mt-2'> Remove</button>
            
          </div>
        </div>
</div>
    </>
  )
}

export default Cart