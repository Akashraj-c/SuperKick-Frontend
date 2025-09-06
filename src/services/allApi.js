import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// --------------------------User--------------------------

export const registerApi = async (reqBody) => {  // user registration
    return await commonApi('POST', `${serverUrl}/register`, reqBody)
}

export const loginApi = async (reqBody) => {  // user login
    return await commonApi('POST', `${serverUrl}/login`, reqBody)
}

export const googleLoginApi = async (reqBody) => {  // Google login
    return await commonApi('POST', `${serverUrl}/googleLogin`, reqBody)
}

export const getHomeBrandsApi = async () => {  // Get Brands at userHome page
    return await commonApi('GET', `${serverUrl}/gethomebrands`)
}

export const getAllSneakersApi = async (searchKey) => {  //Get all sneakers
    return await commonApi('GET', `${serverUrl}/allSneakers?search=${searchKey}`)
}

export const getAllApparelsApi = async (searchKey) => {  //Get all Apparels
    return await commonApi('GET', `${serverUrl}/allApparels?search=${searchKey}`)
}

export const getAllHomeBrandsApi = async () => {  //Get all brands at sidebar
    return await commonApi('GET', `${serverUrl}/allhomebrands`)
}

export const getAProductDetailsApi = async (id) => {  //Get details of a particular product
    return await commonApi('GET', `${serverUrl}/AProductDetails/${id}`)
}

export const getAllMensProductApi = async (searchKey) => {  //Get All Mens product
    return await commonApi('GET', `${serverUrl}/menproducts?search=${searchKey}`)
}

export const getAllWomensProductApi = async (searchKey) => {  //Get All Womens product
    return await commonApi('GET', `${serverUrl}/womenproducts?search=${searchKey}`)
}

export const addWishListApi = async (reqBody, reqHeader) => {  //Add products to wishlist
    return await commonApi('POST', `${serverUrl}/addWishList`, reqBody, reqHeader)
}

export const getAllWishListApi = async (reqHeader) => {
    return await commonApi('GET', `${serverUrl}/getallproducts`, " ", reqHeader)
}

// -----------------------Admin--------------------------

export const addBrandApi = async (reqBody, reqHeader) => {  // Add brands
    return await commonApi('POST', `${serverUrl}/addbrands`, reqBody, reqHeader)
}

export const deleteBrandApi = async (id) => {  // Delete brand
    return await commonApi('DELETE', `${serverUrl}/deletebrand/${id}`)
}

export const addProductApi = async (reqBody, reqHeader) => {  //Add new Product
    return await commonApi('POST', `${serverUrl}/addproduct`, reqBody, reqHeader)
}

export const getAllProductApi = async (searchKey) => {  //Get all products
    return await commonApi('GET', `${serverUrl}/allproducts?search=${searchKey}`)
}

export const deleteProductApi = async (id) => {  //Delete a product
    return await commonApi('DELETE', `${serverUrl}/deleteproduct/${id}`)
}

export const editProductDetailsApi = async (reqBody, id) => {  //edit product details
    return await commonApi('PUT', `${serverUrl}/editprodcut/${id}`, reqBody)
}

// --------------------------Common--------------------------

export const getAllBrandApi = async (searchKey) => {  // Get all brands
    return await commonApi('GET', `${serverUrl}/allbrands?search=${searchKey}`)
}   