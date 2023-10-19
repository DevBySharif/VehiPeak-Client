import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandCar from "../Pages/Brand/BrandCar";
import Error from "../Pages/ErrorPage/Error";
import FeaturedListings from "../Pages/FeaturedListings/FeaturedListings";
import Home from "../Pages/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
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
  {
    path: "/brand/:brand",
    element: <BrandCar></BrandCar>,
  },
]);

export default Route;
