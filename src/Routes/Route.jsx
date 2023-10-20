import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandCar from "../Pages/Brand/BrandCar";
import CarDetails from "../Pages/CarDetails/CarDetails";
import Error from "../Pages/ErrorPage/Error";
import FeaturedListings from "../Pages/FeaturedListings/FeaturedListings";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Register/Register";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";

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
    ],
  },
  {
    path: "/featuredCars",
    element: <FeaturedListings></FeaturedListings>,
  },

  {
    path: "/addProduct",
    element: (
      <PrivateRoute>
        <AddProduct></AddProduct>
      </PrivateRoute>
    ),
  },
  {
    path: "/updateProduct/:id",
    element: (
      <PrivateRoute>
        <UpdateProduct></UpdateProduct>
      </PrivateRoute>
    ),
    loader: (params) => fetch(`http://localhost:5005/cars/${params.id}`),
  },
  {
    path: "/brand/:brand",
    element: <BrandCar></BrandCar>,
  },
  {
    path: "/details/:id",
    element: <CarDetails></CarDetails>,
  },
  {
    path: "/cart",
    element: <MyCart></MyCart>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default Route;
