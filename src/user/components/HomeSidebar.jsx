import React, { useContext, useEffect, useState } from 'react'
import { getAllBrandApi } from '../../services/allApi'
import { searhKeyContext } from '../../context/Contextshare'

const HomeSidebar = () => {
    const [allBrands, setAllBrands] = useState([])
    const { searchKey, setSearchKey } = useContext(searhKeyContext)

    // Get all brands
    const GetAllBrands = async () => {
        const result = await getAllBrandApi(searchKey)
        // console.log(result);
        if (result.status == 200) {
            setAllBrands(result.data)
        }
    }

    useEffect(() => {
        GetAllBrands()
    }, [])

    return (
        <>
            <div className='w-100'>
                <div className='w-100 text-center mb-4 text-white shadow py-2 d-none d-lg-flex justify-content-center' style={{ backgroundColor: 'rgba(180, 186, 180, 1)' }}>
                    {location.pathname == '/newarrival' ?
                        <h4>Choose Your Style</h4>
                        :
                        <h4>Find Your Pair</h4>
                    }
                </div>

                {/* brands */}
                <div className='d-flex flex-column mb-4 border-bottom pb-5 w-100 mt-4 mt-lg-0'>
                    <p className='fs-5'>Brands</p>
                    {allBrands?.map((item, index) => (
                        <div key={index} className="form-check mb-3">
                            <input className="form-check-input" value={item?.brandname} type="checkbox" id={item?.brandname} />
                            <label className="form-check-label" htmlFor={item?.brandname}>
                                {item?.brandname}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Categories */}
                <div className={location.pathname == '/sneakers' ? ' d-none' : 'd-flex flex-column  mb-4 border-bottom pb-5 w-100'}>
                    <p className='fs-5'>Categories</p>
                    {location.pathname == '/newarrival' ? <div className="form-check">
                        <input className="form-check-input" value="Categories" type="checkbox" id="Categories" />
                        <label className="form-check-label" htmlFor="Categories">
                            Sneakers
                        </label>
                    </div>
                        :
                        <div className="form-check">
                            <input className="form-check-input" value="Categories" type="checkbox" id="Categories" />
                            <label className="form-check-label" htmlFor="Categories">
                                Shirt
                            </label>
                        </div>}
                </div>

                {/* Size */}
                <div className='d-flex flex-column border-bottom pb-5 w-100'>
                    <p className='fs-5'>Size</p>
                    {location.pathname == '/sneakers' ? <div className="form-check">
                        <input className="form-check-input" value="sneakers" type="checkbox" id="sneakers" />
                        <label className="form-check-label" htmlFor="sneakers">
                            UK 4
                        </label>
                    </div>
                        :
                        <div className="form-check">
                            <input className="form-check-input" value="sneakers" type="checkbox" id="sneakers" />
                            <label className="form-check-label" htmlFor="sneakers">
                                L
                            </label>
                        </div>}
                </div>
            </div>
        </>
    )
}
export default HomeSidebar

