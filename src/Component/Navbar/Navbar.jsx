import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../assets/VehiPeak-logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";
  const navbarBackgroundClass = isHomeRoute
    ? "bg-transparent"
    : "bg-base-content";

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/featuredCars">Featured Car</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>

      <li>
        <NavLink to="/cart">My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className={`navbar ${navbarBackgroundClass}  px-4 lg:mb-4`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="text-white lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent rounded-box w-52  text-white font-muli gap-2 font-semibold"
          >
            {link}
          </ul>
        </div>
        <div className="object-contain">
          <Link to="/">
            <img
              className="lg:h-[60px] md:ml-4 object-contain"
              src={logo}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-muli gap-2 font-semibold">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm text-black btn-ghost">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button
                  className="btn btn-sm text-black btn-ghost"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm  btn-ghost text-white">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
