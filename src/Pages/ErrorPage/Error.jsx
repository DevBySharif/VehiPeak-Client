import { Link } from "react-router-dom";
import error from "../../assets/error 404.gif";

const Error = () => {
  return (
    <div className="h-full  ralative">
      <div className="">
        <img className="h-screen w-full" src={error} alt="" />
      </div>
      <div className="flex justify-center  absolute top-2/3 right-[25%]">
        <Link to="/">
          <button className="text-white  px-4 py-3 rounded-lg bg-[#FF4605]">
            Go Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
