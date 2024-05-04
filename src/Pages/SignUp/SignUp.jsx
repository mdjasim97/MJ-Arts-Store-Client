import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2'

const SignUp = () => {
    const { UserCreate } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    // const [terms, setTerms] = useState(false)


    const handleUserCreate = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const Accepted = form.terms.checked


        if (password.length < 6) {
            Swal.fire("Must be 6 charecter password!");
            return
        }

        else if (!/[A-Z]/.test(password)) {
            Swal.fire("Must be 1 charecter Uppercase!");
            return
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire("Must be 1 charecter lowercase!");
            return
        }

        if (!Accepted) {
            Swal.fire("Please Accept Terms & Condition!");
            return
        }



        UserCreate(email, password)
            .then(result => {
                console.log(result)

                // User Update
                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        console.log("User profile update")
                        const createAt = result.user?.metadata?.createdAt
                        const creationTime = result.user?.metadata?.creationTime
                        const lastLogin = result.user?.metadata?.lastLoginAt
                        const lastSignIn = result.user?.metadata?.lastSignInTime
                        const user_name = result.user?.displayName
                        const profile_pic = result.user?.photoURL

                        const user = { user_name, email, profile_pic, createAt, creationTime, lastLogin, lastSignIn }
                        console.log(user)

                        // user create and data store mongoDB
                        fetch("http://localhost:4000/users", {
                            method: "post",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                Swal.fire({
                                    title: "Successfull",
                                    text: "Your profile create successfull.",
                                    icon: "success"
                                });
                                navigate("/login")
                            })

                    })
            })
            .catch(error => console.log(error))

    }


    const handlePassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div>
            <div className='flex flex-col lg:justify-center lg:items-center lg:py-16'>
                <div className='bg-white p-4 lg:p-16 rounded-2xl'>
                    <h1 className='text-4xl text-center lg:mx-36 mt-5 '> SignUp Form </h1>
                    <form onSubmit={handleUserCreate} className='space-y-4'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your Name" className="input bg-base-200" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL </span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter Photo URL" className="input bg-base-200" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address </span>
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
                                    {showPassword ? <FaEyeSlash onClick={handlePassword} /> : <FaEye onClick={handlePassword} />}
                                </span>
                            </div>
                        </div>


                        <div className="flex">
                            <input type="checkbox" name='terms' className='mr-2' />

                            <span className="label-text">Please accept our <Link className='text-blue-500'>terms and condition</Link> </span>

                        </div>


                        <div className="form-control mt-6">
                            <button className="btn bg-[#23BE0A] text-white">Register</button>
                        </div>
                    </form>
                    <p className='text-center my-5'>Already have An Account ? <Link to="/login" className="text-blue-600 font-bold">Login</Link></p>

                    {/* {errorMessage && <p className='text-red-600 font-bold text-center'>{errorMessage}</p>} */}
                    {/* {successfull && <p className='text-green-600 font-bold text-center'>{successfull}</p>} */}
                </div>


            </div>
        </div>
    );
};

export default SignUp;