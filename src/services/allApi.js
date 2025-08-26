import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

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