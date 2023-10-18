import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import FeaturedListings from "../Pages/FeaturedListings/FeaturedListings";
import Home from "../Pages/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/featuredCars",
        element: <FeaturedListings></FeaturedListings>,
      },
    ],
  },

  {
    path: "/addProduct",
    element: <AddProduct></AddProduct>,
  },
]);

export default Route;
