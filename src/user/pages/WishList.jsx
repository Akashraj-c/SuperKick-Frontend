import React from 'react'
import Header from '../components/Header'

const WishList = () => {
  return (
    <>
      <Header />
      <div className="container" style={{marginTop:'130px'}}>
        <div className="row">
          <div className="col-md-3 mb-5 border pb-2 " style={{ cursor: 'pointer', borderColor: 'rgba(8, 63, 119, 1)' }}>
            <div className='d-flex flex-column align-items-center maincardDiv' style={{ height: '300px', width: '100%' }}>
              <div className=' mb-3 mt-2 ' style={{ height: '300px', width: '100%' }}>
                <img style={{ height: '300px', width: '100%' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
              </div>
              <div className='w-100 text-center mt-1  '>
                <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                <h6>GEL-QUANTUM 360 VIII</h6>
                {/* <p>ILLUMINATE YELLOW/BLACK</p> */}
                <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> 7,899</p>
                <button className='btn btn-dark w-100'>Move to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-5 border pb-2 " style={{ cursor: 'pointer', borderColor: 'rgba(8, 63, 119, 1)' }}>
            <div className='d-flex flex-column align-items-center maincardDiv'>
              <div className=' mb-3 mt-2 ' style={{ height: '300px', width: '100%' }}>
                <img style={{ height: '300px', width: '100%' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
              </div>
              <div className='w-100 text-center mt-1  '>
                <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                <h6>GEL-QUANTUM 360 VIII</h6>
                {/* <p>ILLUMINATE YELLOW/BLACK</p> */}
                <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> 7,899</p>
                <button className='btn btn-dark w-100'>Move to Cart</button>
              </div>
            </div>
          </div>


          <div className="col-md-3 mb-5 border pb-2 " style={{ cursor: 'pointer', borderColor: 'rgba(8, 63, 119, 1)' }}>
            <div className='d-flex flex-column align-items-center maincardDiv'>
              <div className=' mb-3 mt-2 ' style={{ height: '300px', width: '100%' }}>
                <img style={{ height: '300px', width: '100%' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
              </div>
              <div className='w-100 text-center mt-1  '>
                <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                <h6>GEL-QUANTUM 360 VIII</h6>
                {/* <p>ILLUMINATE YELLOW/BLACK</p> */}
                <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> 7,899</p>
                <button className='btn btn-dark w-100'>Move to Cart</button>
              </div>
            </div>
          </div>


          <div className="col-md-3 mb-5 border pb-2 " style={{ cursor: 'pointer', borderColor: 'rgba(8, 63, 119, 1)' }}>
            <div className='d-flex flex-column align-items-center maincardDiv'>
              <div className=' mb-3 mt-2 ' style={{ height: '300px', width: '100%' }}>
                <img style={{ height: '300px', width: '100%' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
              </div>
              <div className='w-100 text-center mt-1  '>
                <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                <h6>GEL-QUANTUM 360 VIII</h6>
                {/* <p>ILLUMINATE YELLOW/BLACK</p> */}
                <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> 7,899</p>
                <button className='btn btn-dark w-100'>Move to Cart</button>
              </div>
            </div>
          </div>


          <div className="col-md-3 mb-5 border pb-2 " style={{ cursor: 'pointer', borderColor: 'rgba(8, 63, 119, 1)' }}>
            <div className='d-flex flex-column align-items-center maincardDiv'>
              <div className=' mb-3 mt-2 ' style={{ height: '300px', width: '100%' }}>
                <img style={{ height: '300px', width: '100%' }} src="https://www.superkicks.in/cdn/shop/files/4_3759f13f-2605-4c76-a25f-331d607abbc5.jpg?v=1724411303&width=600" alt="no img" />
              </div>
              <div className='w-100 text-center mt-1  '>
                <h6 style={{ textTransform: 'uppercase' }}>Asics</h6>
                <h6>GEL-QUANTUM 360 VIII</h6>
                {/* <p>ILLUMINATE YELLOW/BLACK</p> */}
                <p><span className='border p-1 rounded fw-bold me-1' style={{ fontSize: '11px', backgroundColor: 'rgba(221, 214, 214, 0.6)' }}>INR</span> 7,899</p>
                <button className='btn btn-dark w-100'>Move to Cart</button>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </>
  )
}

export default WishList