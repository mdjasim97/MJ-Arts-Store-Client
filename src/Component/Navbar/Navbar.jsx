import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';

const Navbar = () => {

    const { logOut, user } = useContext(AuthContext)
    const [theme, setTheme] = useState("light")

    const handleThemeToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    useEffect(()=>{
        localStorage.setItem("theme", theme)
        const localtheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localtheme)
    },[theme])



    const handleLogOut = () => {
        logOut()
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#23BE0A] rounded-box w-52">
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


                    <label className="cursor-pointer grid place-items-center ml-2">
                        <input type="checkbox"
                            onChange={handleThemeToggle}
                            value="synthwave"
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>


                </div>
            </div>
        </div>
    );
};

export default Navbar;