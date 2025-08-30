import React, { createContext, useState } from 'react'

export const searhKeyContext = createContext("")

const Contextshare = ({ children }) => {
    const [searchKey, setSearchKey] = useState('')
    return (
        <searhKeyContext.Provider value={{ searchKey, setSearchKey }}>
            {
                children
            }
        </searhKeyContext.Provider>
    )
}

export default Contextshare