import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandDetails from "../Pages/Brand/BrandDetails";
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
    path: "/brand/:id",
    element: <BrandDetails></BrandDetails>,
  },
]);

export default Route;
