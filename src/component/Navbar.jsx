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

  /** `brand` = on primary bar; `light` = mobile dropdown on base-100 */
  const navLinkClass = (isActive, surface) => {
    const line =
      "inline-block border-b-2 pb-0.5 transition-[color,border-color,opacity] duration-200 ";
    if (surface === "brand") {
      return (
        line +
        (isActive
          ? "border-white text-white font-medium tracking-tight"
          : "border-transparent text-white/80 hover:text-white font-light tracking-tight")
      );
    }
    return (
      line +
      (isActive
        ? "border-[color:var(--color-primary-brand)] font-medium text-base-content"
        : "border-transparent font-light text-base-content/75 hover:text-[color:var(--color-primary-brand)]")
    );
  };

  const renderNavItems = (surface) => (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => navLinkClass(isActive, surface)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-art" className={({ isActive }) => navLinkClass(isActive, surface)}>
          Art & craft Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-craft" className={({ isActive }) => navLinkClass(isActive, surface)}>
          Add Craft
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-art-craft" className={({ isActive }) => navLinkClass(isActive, surface)}>
          My Art & Craft
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full fixed top-0 z-10 bg-[color:var(--color-primary-brand)] shadow-2xl">
      <div className="navbar max-w-6xl mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white border-white/30 lg:hidden"
            >
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
              {renderNavItems("light")}
            </ul>
          </div>
          <Link to='/'>
          <img
            className="w-24"
            src="https://i.ibb.co/FgtYBtM/mokeup-removebg-preview.png"
            alt=""
          />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-4 text-[18px]  menu-horizontal px-1">
            {renderNavItems("brand")}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="toggle [--tglbg:white] border-white/40 bg-white/15 text-white transition-[background-color,border-color,color] checked:border-[color:var(--color-primary-brand)] checked:bg-[color:var(--color-primary-brand)] checked:text-white hover:bg-white/25 checked:hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              onChange={handleToggle}
            />
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
                <button
                  onClick={singOut}
                  className="btn ms-2 border-none bg-white text-[color:var(--color-primary-brand)] hover:bg-white/90"
                >
                  Sin Out
                </button>
              )}
            </ul>
          </div>

          {!user && (
            <>
              <Link
                to="/login"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-[color:var(--color-primary-brand)] hover:border-white"
              >
                Login
              </Link>
              <Link to="/registration" className=" ms-2 hidden md:block">
                <button className="btn border-none bg-white text-[color:var(--color-primary-brand)] hover:bg-white/90">
                  Registration
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
