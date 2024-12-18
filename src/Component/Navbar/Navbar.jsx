import { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";
import { GrLogout } from "react-icons/gr";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localtheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localtheme);
  }, [theme]);

  const handleLogOut = () => {
    logOut();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all">All Art & craft</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/addCraft">Add Craft</NavLink>
          </li>
          <li>
            <NavLink to="/myList">My Art & Craft List</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className=" navbar bg-[#171b4e] text-white md:px-36 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#171b4e] mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="text-lg md:text-xl font-Alegreya gap-0 lg:text-3xl font-bold">
            Artistry <span className="text-orange-400">Corner</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user?.photoURL}
                className="mr-2 w-8 h-8 hidden md:block md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-orange-400"
                alt="User Profile picture"
                title={user.displayName}
              />

              <button
                onClick={handleLogOut}
                className="btn btn-sm md:btn-md bg-transparent text-white border-white text-base lg:text-xl"
              >
                {" "}
                <GrLogout className="text-xl lg:text-2xl" /> logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-sm md:btn-md mr-1 bg-transparent border-none hover:bg-orange-400 text-white text-base lg:text-xl"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="btn btn-sm md:btn-md bg-transparent border-white border text-white hover:bg-orange-400 text-base"
              >
                SignUp
              </Link>
            </>
          )}

          <label className="cursor-pointer hidden 2xl:grid place-items-center ml-1">
            <input
              type="checkbox"
              onChange={handleThemeToggle}
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
