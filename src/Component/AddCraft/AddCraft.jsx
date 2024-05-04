import React from 'react';
import { Link } from 'react-router-dom';

const AddCraft = () => {
    return (
        <div>
            <div className='flex flex-col lg:justify-center lg:items-center lg:py-16'>
                <div className='bg-white p-4 lg:p-16 rounded-2xl'>
                    <h1 className='text-4xl text-center lg:mx-36 mt-5 '>Add Carft </h1>
                    <form className='space-y-4'>

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
                                <input type="password" name='password' placeholder="Enter your password" className="input bg-base-200 w-full" required />
                                {/* <span className='absolute right-3 top-4'>
                                    {showPassword ? <FaEyeSlash onClick={handlePasswordShow} /> : <FaEye onClick={handlePasswordShow} />}
                                </span> */}
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

export default AddCraft;