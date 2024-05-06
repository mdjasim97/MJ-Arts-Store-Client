import React, { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';

const Navbar = () => {

    const { logOut, user } = useContext(AuthContext)
    


    const handleLogOut = (e) => {
        e.preventDefault()

        logOut()
            .then(result => {
                // console.log(result)
                console.log("logout Successfull")
                navigate("/")
            })
            .catch(error => console.log(error))
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all">All Art & craft</NavLink></li>

        {
            user && <>
                <li><NavLink to="/addCraft">Add Craft</NavLink></li>
                <li><NavLink to="/myList">My Art & Craft List</NavLink></li>
            </>
        }
    </>
    return (
        <div>
            <div className="navbar bg-[#23BE0A] text-white py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="text-2xl lg:text-4xl font-bold">MJU Arts</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>

                            <img src={user.photoURL} className='mr-2 w-12 h-12 rounded-full bg-base-200' alt="" title={user.displayName} />

                            <button onClick={handleLogOut} className='btn text-base lg:text-xl'>logOut</button>
                        </> : <>
                            <Link to='/login'><button className='btn mr-2 bg-[#23BE0A] text-white text-base lg:text-xl'>Login</button></Link>
                            <Link to="/signup"><button className='btn text-base lg:text-xl'>SignUp</button></Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;