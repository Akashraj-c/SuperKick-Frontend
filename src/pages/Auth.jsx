import React, { useState } from 'react'
import Squares from '../ReactBits/Squares/Squares';
import { Link, useNavigate } from 'react-router-dom';
import FadeContent from '../ReactBits/FadeContent/FadeContent';
import { googleLoginApi, loginApi, registerApi } from '../services/allApi';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';

const Auth = ({ register }) => {
    const navigate = useNavigate()

    const [pswdEye, setPswdEye] = useState(true)

    const [userDetails, setuserDetails] = useState({
        username: "",
        email: "",
        password: ""
    })

    // user register
    const handleRegister = async () => {
        const { username, email, password } = userDetails

        if (!username || !email || !password) {
            toast.error('Please complete the form.')
        }
        else {
            const result = await registerApi({
                username, email, password
            })
            console.log(result);
            if (result.status == 200) {
                toast.success("Great! You're now registered.")
                navigate('/login')
            }
            else if (result.status == 409) {
                toast.info(result.response.data)
            }
            else {
                toast.error('An error occurred. Please try again later.')
            }
        }
    }

    // user login
    const handleLogin = async () => {
        const { email, password } = userDetails

        if (!email || !password) {
            toast.error('All fields are required. Please complete the form.')
        }
        else {
            const result = await loginApi({
                email, password
            })
            console.log(result);

            if (result.status == 200) {
                toast.success('You have successfully logged in')
                setuserDetails({
                    email: "",
                    password: ""
                })
                setTimeout(() => {
                    if (result.data.existingUser.email == 'superkicksadmin@gmail.com') {
                        navigate('/adminhome')
                    }
                    else {
                        navigate('/')
                    }
                }, 1500)

                sessionStorage.setItem('existingUser', JSON.stringify(result.data.existingUser))
                sessionStorage.setItem('token', result.data.token)
            }
            else if (result.status == 401) {
                toast.error(result.response.data)
                setuserDetails({
                    email: "",
                    password: ""
                })
            }
            else if (result.status == 404) {
                toast.error(result.response.data)
                setuserDetails({
                    email: "",
                    password: ""
                })
            }
            else {
                toast.error('An error occurred. Please try again later.')
            }
        }
    }

    // Handle Google login
    const handleGoogleLogin = async (credentialResponse) => {
        const { username, email, password } = userDetails

        const response = jwtDecode(credentialResponse.credential)
        console.log(response);

        const result = await googleLoginApi({
            username: response.name,
            email: response.email,
            password: "googlePswd",
            profile: response.picture
        })
        console.log(result);

        if (result.status == 200) {
            toast.success('You have successfully logged in')
            setTimeout(() => {
                navigate('/')
            }, 1500)
            sessionStorage.setItem('existingUser', JSON.stringify(result.data.existingUser))
            sessionStorage.setItem('token', result.data.token)
            setuserDetails({
                email: "",
                password: ""
            })
        }
        else {
            toast.error('Google login failed. Please try again.')
        }
    }

    return (
        <div style={{ height: '100vh', width: '100%' }} className='bg-black'>
            <Squares
                speed={0.5}
                squareSize={30}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#271E31'
                hoverFillColor='#222'
            />
            <FadeContent blur={true} threshold={0.3} delay={200} duration={1300} easing="ease-out" initialOpacity={0} className=' text-center'>

                <div style={{ marginTop: '-680px' }}>
                    <div className=' w-100 z-' >
                        <div className="container ">
                            <div className="row" >
                                <div className="col-md-3"></div>

                                <div className="col-md-6 AuthMain" >
                                    <FadeContent blur={true} threshold={0.3} delay={500} duration={1300} easing="ease-out" initialOpacity={0} className=' text-center'>
                                        <Link to={'/'} className='text-decoration-none'><h4 className='fw-bolder text-center'>SUPERKICKS</h4></Link>
                                    </FadeContent>
                                    <div className='Auth w-100 bg-black bg-opacity-50 p-lg-5 p-3 rounded mt-3'>

                                        <div className='d-flex flex-column justify-content-center align-items-center mb-4 '>
                                            <img src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="" style={{ width: '100px' }} />

                                            {register ? <h5 className='mt-2'>Register</h5>
                                                :
                                                <h5 className='mt-2'>Login</h5>}

                                        </div>

                                        {register && <div className='w-100 mb-4'>
                                            <input type="text" onChange={(e) => setuserDetails({ ...userDetails, username: e.target.value })} value={userDetails.username} placeholder='Username' className='form-control text-white w-100 bg-transparent border Authinput' />
                                        </div>}

                                        <div className='w-100 mb-4'>
                                            <input type="text" onChange={(e) => setuserDetails({ ...userDetails, email: e.target.value })} value={userDetails.email} placeholder='Email' className='form-control text-white w-100 bg-transparent border Authinput' />
                                        </div>

                                        <div className='w-100 d-flex align-items-center'>
                                            <input type={pswdEye ? "password" : "text"} onChange={(e) => setuserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} placeholder='Password' className='form-control text-white w-100 bg-transparent border Authinput' />

                                            {!pswdEye ? <FaEye onClick={() => setPswdEye(!pswdEye)} style={{ marginLeft: '-30px', cursor: 'pointer' }} />
                                                :
                                                <FaEyeSlash onClick={() => setPswdEye(!pswdEye)} style={{ marginLeft: '-30px', cursor: 'pointer' }} />}
                                        </div>

                                        <div className='d-flex justify-content-between'>
                                            <p className='text-white my-3' style={{ fontSize: '12px' }}>*Never share your password with others</p>
                                            {!register && <p className='text-white my-3 ' style={{ fontSize: '12px' }}>Forgot password</p>}
                                        </div>

                                        {register ? <div>
                                            <button onClick={handleRegister} type='button' className='btn btn-danger w-100'>Register</button>
                                        </div>
                                            :
                                            <div>
                                                <button onClick={handleLogin} type='button' className='btn btn-danger w-100'>Login</button>
                                            </div>}

                                        {!register && <div className='text-center  mt-4'>
                                            <h6 className='text-secondary'> -------------------------- or --------------------------</h6>
                                        </div>}

                                        <div className='d-flex justify-content-center mt-4'>
                                            {!register && <GoogleLogin
                                                onSuccess={credentialResponse => {
                                                    console.log(credentialResponse);
                                                    handleGoogleLogin(credentialResponse)
                                                }}
                                                onError={() => {
                                                    console.log('Login Failed');
                                                }}
                                                width='350px'
                                            />}
                                        </div>

                                        {register ? <div>
                                            <p className='text-center text-white mt-4'>Are you Already a User ? <Link className='text-blue text-decoration-none' to={'/login'}>Login</Link> </p>
                                        </div>
                                            :
                                            <div>
                                                <p className='text-center text-white mt-4'>Are you a New User ? <Link className='text-blue text-decoration-none' to={'/register'}>Register</Link> </p>
                                            </div>}

                                    </div>
                                </div>

                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeContent>

            {/* Toast conatiner */}
            <ToastContainer position="top-center" autoClose={1500} theme="colored" />
        </div>

    )
}

export default Auth