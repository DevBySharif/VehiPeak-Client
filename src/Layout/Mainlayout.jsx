import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div>
      <h1>This is main layout</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;
