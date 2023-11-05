/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import { BsGoogle } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../Routes/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid email or password. Please try again.");
      });
  };

  return (
    <div>
      <Navbar></Navbar>
     
      <div className="flex flex-col bg-white">
        <div className="grid place-items-center">
        <div className="">
        <div className="">
          <div className="hero">
            <div className="hero-content flex-col">
              <div className="card flex-shrink-0 w-full hover:shadow-xl">
                <form onSubmit={handleLogin} className="card-body lg:w-[500px]">
                  <div className="flex justify-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
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
                      name="password"
                      placeholder="password"
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
                    <button className="btn btn-accent">Login</button>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="text-black text-sm">
                      Don't have an account?
                    </h3>
                    <Link
                      to={"/signup"}
                      className="text-sm font-semibold text-[#163A1E] underline"
                    >
                      Signup
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className="divider">OR</div>
        <div className="grid rounded-box place-items-center mb-5">
          <button onClick={googleLogin} className="btn btn-outline rounded-full lg:w-96"><BsGoogle></BsGoogle>Google</button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;