import React, { createContext, useState } from 'react'

export const searhKeyContext = createContext("")
export const sideBarFilterContext = createContext()

const Contextshare = ({ children }) => {
    const [searchKey, setSearchKey] = useState('')
    const [filters, setFilters] = useState({
        brands: [],
        categories: [],
        subcategories: [],
        sizes: []
    });
    return (
        <sideBarFilterContext.Provider value={{ filters, setFilters }}>
            <searhKeyContext.Provider value={{ searchKey, setSearchKey }}>
                {
                    children
                }
            </searhKeyContext.Provider>
        </sideBarFilterContext.Provider>
    )
}

export default Contextshare