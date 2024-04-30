import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { logOut, user, loading } = useContext(AuthContext);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const singOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
      });
  };
  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-extralight  bg-base-100"
              : "font-extralight text-base-content"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/all-art"
          className={({ isActive }) =>
            isActive
              ? "text-red-500  font-extralight bg-base-100"
              : "font-extralight text-base-content"
          }
        >
          Art & craft Items
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/add-craft"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-extralight  bg-base-100"
              : "font-extralight text-base-content"
          }
        >
          Add Craft
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/my-art-craft`}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-extralight  bg-base-100"
              : "font-extralight text-base-content"
          }
        >
          My Art & Craft
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 dark:bg-slate-800 w-full fixed top-0 z-10 shadow-2xl ">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-active lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <img
            className="w-24"
            src="https://i.ibb.co/FgtYBtM/mokeup-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-4 text-[18px]  menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate  ">
            <input type="checkbox" className="toggle" onChange={handleToggle} />
          </label>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <div
                className="avatar tooltip tooltip-left tooltip-secondary ms-2"
                data-tip={user?.displayName}
              >
                <div className="w-14 rounded-full ">
                  {loading ? (
                    <span className="loading loading-ring loading-lg"></span>
                  ) : (
                    user?.photoURL && (
                      <div>
                        <img className="" src={user.photoURL} />
                      </div>
                    )
                  )}{" "}
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user && (
                <button onClick={singOut} className="btn btn-secondary ms-2">
                  Sin Out
                </button>
              )}
            </ul>
          </div>

          {!user && (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/registration" className=" ms-2 hidden md:block">
                <button className="btn btn-secondary">Registration</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
