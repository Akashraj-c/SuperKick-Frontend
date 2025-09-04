import React, { createContext, useContext, useState } from 'react'

export const searhKeyContext = createContext("")
export const sideBarFilterContext = createContext()
export const cartContext = createContext()

const Contextshare = ({ children }) => {

    const [searchKey, setSearchKey] = useState('')
    const [filters, setFilters] = useState({
        brands: [],
        categories: [],
        subcategories: [],
        sizes: []
    });
    const [addToCart, setAddToCart] = useState([])

    return (
        <cartContext.Provider value={{ addToCart, setAddToCart }}>
            <sideBarFilterContext.Provider value={{ filters, setFilters }}>
                <searhKeyContext.Provider value={{ searchKey, setSearchKey }}>
                    {
                        children
                    }
                </searhKeyContext.Provider>
            </sideBarFilterContext.Provider>
        </cartContext.Provider>
    )
}

export default Contextshare