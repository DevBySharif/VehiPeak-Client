import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
  },
]);

export default Route;
