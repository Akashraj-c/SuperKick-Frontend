import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// --------------------------User--------------------------

// user registration
export const registerApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/register`, reqBody)
}

// user login
export const loginApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/login`, reqBody)
}

// Google login
export const googleLoginApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/googleLogin`, reqBody)
}


// -----------------------Admin--------------------------

// Add brands
export const addBrandApi = async (reqBody, reqHeader) => {
    return await commonApi('POST', `${serverUrl}/addbrands`, reqBody, reqHeader)
}

// Delete brand
export const deleteBrandApi = async (id) => {
    return await commonApi('DELETE', `${serverUrl}/deletebrand/${id}`)
}

// --------------------------Common--------------------------

// Get all brands
export const getAllBrandApi = async (searchKey) => {
    return await commonApi('GET', `${serverUrl}/allbrands?search=${searchKey}`)
}   