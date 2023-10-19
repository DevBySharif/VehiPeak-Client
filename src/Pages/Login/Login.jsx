import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
// import loginImg from "../../assets/login.gif";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoginError("");

    signIn(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-5xl font-bold font-Bebas flex justify-center pt-16">
        Welcome Back
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-52">
          {/* <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div> */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
              </div>

              {loginError && <p className="text-red-500">{loginError}</p>}

              <p className="flex justify-between">
                Don't have an account?{" "}
                <Link className="text-blue-600" to="/register">
                  Register
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
