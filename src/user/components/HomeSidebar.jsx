import React, { useContext, useEffect, useState } from 'react'
import { getHomeBrandsApi } from '../../services/allApi'
import { sideBarFilterContext } from '../../context/Contextshare'
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

const HomeSidebar = () => {
    const { filters, setFilters } = useContext(sideBarFilterContext)
    // console.log(filters);

    const [brandMenuCollapse, setBrandMenuCollapse] = useState(true)
    const [categoryMenuCollapse, setCategoryMenuCollapse] = useState(true)
    const [subCategoryMenuCollapse, setSubCategoryMenuCollapse] = useState(true)
    const [sizeMenuCollapse, setSizeMenuCollapse] = useState(true)
    const [allBrands, setAllBrands] = useState([])
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);

    // Get all brands
    const GetAllBrands = async () => {
        const result = await getHomeBrandsApi()
        // console.log(result);
        if (result.status == 200) {
            setAllBrands(result.data)
        }
    }

    // handle filtering
    const handleSelectedFilter = (e, type) => {
        const { value, checked } = e.target
        console.log(value, checked);

        if (type == 'brand') {
            setSelectedBrands((previous) => checked ? [...previous, value] : previous.filter((item) => item != value))
        }
        else if (type == 'category') {
            setSelectedCategories((previous) => checked ? [...previous, value] : previous.filter((item) => item != value))
        }
        else if (type == 'subcategory') {
            setSelectedSubCategories((previous) => checked ? [...previous, value] : previous.filter((item) => item != value))
        }
        else if (type == 'size') {
            setSelectedSizes((previous) => checked ? [...previous, value] : previous.filter((item) => item != value))
        }
    }

    useEffect(() => {
        setFilters({
            brands: selectedBrands,
            categories: selectedCategories,
            subcategories: selectedSubCategories,
            sizes: selectedSizes
        })
    }, [selectedSizes, selectedCategories, selectedSubCategories, selectedBrands])

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
                <div className='d-flex flex-column mb-4 border-bottom  pb-3 w-100 mt-4 mt-lg-0'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='fs-5'>Brands</p>
                        {brandMenuCollapse ?
                            <p className='fs-5' onClick={() => setBrandMenuCollapse(!brandMenuCollapse)}><GoChevronUp /></p>
                            :
                            <p className='fs-5' onClick={() => setBrandMenuCollapse(!brandMenuCollapse)}><GoChevronDown /></p>
                        }
                    </div>

                    {allBrands?.map((item, index) => (
                        <div key={index} className={brandMenuCollapse ? "form-check mb-3" : "d-none"}>
                            <input onChange={(e) => handleSelectedFilter(e, 'brand')} className="form-check-input" value={item?.brandname} type="checkbox" id={item?.brandname} />
                            <label className="form-check-label" htmlFor={item?.brandname}>
                                {item?.brandname}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Categories */}
                {location.pathname == '/newarrival' && <div className='d-flex flex-column mb-4 border-bottom pb-3 w-100'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='fs-5'>Categories</p>
                        {categoryMenuCollapse ?
                            <p className='fs-5' onClick={() => setCategoryMenuCollapse(!categoryMenuCollapse)}><GoChevronUp /></p>
                            :
                            <p className='fs-5' onClick={() => setCategoryMenuCollapse(!categoryMenuCollapse)}><GoChevronDown /></p>
                        }
                    </div>
                    {['Shoes', 'Apparels'].map((item, index) => (
                        <div key={index} className={categoryMenuCollapse ? "form-check mb-3" : "d-none"}>
                            <input onChange={(e) => handleSelectedFilter(e, 'category')} className="form-check-input" value={item} type="checkbox" id={item} />
                            <label className="form-check-label" htmlFor={item}>
                                {item}
                            </label>
                        </div>
                    ))}
                </div>}

                {/* subcategories */}
                <div className='d-flex flex-column  mb-4 border-bottom pb-3 w-100'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='fs-5'>Sub Categories</p>
                        {subCategoryMenuCollapse ?
                            <p className='fs-5' onClick={() => setSubCategoryMenuCollapse(!subCategoryMenuCollapse)}><GoChevronUp /></p>
                            :
                            <p className='fs-5' onClick={() => setSubCategoryMenuCollapse(!subCategoryMenuCollapse)}><GoChevronDown /></p>
                        }
                    </div>

                    {['Sneakers', 'Slides'].map((item, index) => (
                        <div key={index} className={subCategoryMenuCollapse && location.pathname != '/apparels' ? "form-check mb-3" : "d-none"}>
                            <input onChange={(e) => handleSelectedFilter(e, 'subcategory')} className="form-check-input" value={item} type="checkbox" id={item} />
                            <label className="form-check-label" htmlFor={item}>
                                {item}
                            </label>
                        </div>
                    ))}

                    {['T-Shirt', 'Hoodies', 'Jacket', 'Sweatshirt', 'Shirt'].map((item, index) => (
                        <div key={index} className={subCategoryMenuCollapse && location.pathname != '/sneakers' ? "form-check mb-3" : "d-none"}>
                            <input onChange={(e) => handleSelectedFilter(e, 'subcategory')} className="form-check-input" value={item} type="checkbox" id={item} />
                            <label className="form-check-label" htmlFor={item}>
                                {item}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Size */}
                <div className='d-flex flex-column border-bottom pb-3 w-100'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='fs-5'>Size</p>
                        {sizeMenuCollapse ?
                            <p className='fs-5' onClick={() => setSizeMenuCollapse(!sizeMenuCollapse)}><GoChevronUp /></p>
                            :
                            <p className='fs-5' onClick={() => setSizeMenuCollapse(!sizeMenuCollapse)}><GoChevronDown /></p>
                        }
                    </div>

                    {[4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
                        <div key={index} className={location.pathname != '/apparels' && sizeMenuCollapse ? "form-check mb-3" : "d-none"}>
                            <input onChange={(e) => handleSelectedFilter(e, 'size')} className="form-check-input" value={item} type="checkbox" id={item} />
                            <label className="form-check-label" htmlFor={item}>
                                UK {item}
                            </label>
                        </div>
                    ))}

                    {['S', 'M', 'L', 'XL'].map((item, index) => (
                        <div key={index} className={location.pathname != '/sneakers' && sizeMenuCollapse ? "form-check mb-3" : "d-none"}>
                            <input onChange={(e) => handleSelectedFilter(e, 'size')} className="form-check-input" value={item} type="checkbox" id={item} />
                            <label className="form-check-label" htmlFor={item}>
                                {item}
                            </label>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}
export default HomeSidebar

