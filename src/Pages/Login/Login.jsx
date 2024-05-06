import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Context/ContextProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const [successfull, setSecessfull] = useState("")
    const [errorMessage, seterrorMessage] = useState("")


    const { UserSignIn, SignInWithGoogle } = useContext(AuthContext)

    const handleUserSignIn = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value;
        const password = form.password.value;


        setSecessfull(" ")
        seterrorMessage(" ")

        UserSignIn(email, password)
            .then(result => {
                console.log(result)
                setSecessfull("User Login Successfull.")
                Swal.fire({
                    title: "Successfull",
                    text: "User login successfull.",
                    icon: "success"
                });
                navigate("/")
            })
            .catch(error => {
                console.log(error)
                seterrorMessage(error.message)
            })
    }

    const handleGoogleSingIn = () => {
        SignInWithGoogle()
            .then(result => {
                console.log(result)
                Swal.fire({
                    title: "Successfull",
                    text: "User login successfull.",
                    icon: "success"
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    return (
        <div>
            <div className='flex flex-col lg:justify-center lg:items-center lg:py-16'>
                <div className='bg-white p-4 lg:p-16 rounded-2xl'>
                    <h1 className='text-4xl text-center lg:mx-36 mt-5 '> Login Form </h1>
                    <form onSubmit={handleUserSignIn} className='space-y-4'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email : </span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email address" className="input bg-base-200" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>
                                <input type={showPassword ? "text" : "password"} name='password' placeholder="Enter your password" className="input bg-base-200 w-full" required />
                                <span className='absolute right-3 top-4'>
                                    {showPassword ? <FaEyeSlash onClick={handleShowPassword} /> : <FaEye onClick={handleShowPassword} />}
                                </span>
                            </div>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn bg-[#23BE0A] text-white">Login</button>
                        </div>
                    </form>
                    <p className='text-center my-5'>Don't have An Account ? <Link to="/signup" className="text-blue-600 font-bold">Register</Link>
                    </p>

                    {errorMessage && <p className='text-red-600 font-bold text-center'>{errorMessage}</p>}
                    {successfull && <p className='text-green-600 font-bold text-center'>{successfull}</p>}
                </div>


                <div className='space-y-3 mx-2'>
                    <h1 className='text-center text-xl'>Login With</h1>
                    <button onClick={handleGoogleSingIn} className='btn mr-2'> <FcGoogle className='text-2xl' />  Google</button>
                    <button onClick={handleGoogleSingIn} className='btn mr-2'> <FaGithub className='text-2xl' /> GitHub</button>
                    <button onClick={handleGoogleSingIn} className='btn'> <FaFacebook className='text-blue-600 text-2xl' /> Facebook</button>
                </div>


            </div>


        </div>
    );
};

export default Login;