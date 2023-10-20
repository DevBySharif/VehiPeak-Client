import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "../Component/Banner/Banner";
import Navbar from "../Component/Navbar/Navbar";

const Mainlayout = () => {
  const location = useLocation();
  return (
    <div>
      <div className="relative">
        <div className="absolute z-10 w-full">
          <Navbar></Navbar>
        </div>
        {location.pathname === "/" && <Banner />}
      </div>
      <Toaster></Toaster>
      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;
