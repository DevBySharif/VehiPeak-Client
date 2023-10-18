import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/VehiPeak-logo.png";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/featuredCars">Featured Car</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar container px-4 lg:mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  text-white font-muli gap-2 font-semibold"
          >
            {link}
          </ul>
        </div>
        <div className="object-contain">
          <img className="h-[60px] object-contain" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-muli gap-2 font-semibold">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/addProduct">
          <button className="btn btn-outline btn-error">Add Product</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
