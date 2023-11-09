/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { BsGoogle } from "react-icons/bs";
import { storage } from "../../Firebase/firebase.config";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

const Signup = () => {
  const { createAccount, updateUserProfile, googleLogin } = useAuth();
  const storageRef = ref(storage, "photo");
  const navigate = useNavigate();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.files[0];
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one capital letter.");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Password must contain at least one special character.");
      return;
    }

    try {
      setIsCreatingAccount(true);

      const storageRef = ref(storage, `photo/${name}-photo.jpg`);
      await uploadBytes(storageRef, photo);
      const imageURL = await getDownloadURL(storageRef);

      createAccount(email, password).then((res) => {
        updateUserProfile(name, imageURL)
          .then(() => {
            console.log("Profile Updated");
          })
          .catch((error) => {
            console.log("Error Updating Profile", error);
          });
        navigate("/");
        toast.success("Account Created Successfully");
      });
    } catch (error) {
      console.error(error);
      toast.error("Email already exist");
    } finally {
      setIsCreatingAccount(false);
    }
  };
  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="">
        <div className="bg-white">
          <div className="flex flex-col">
            <div className="grid rounded-box place-items-center">
              <div className="hero">
                <div className="lg:hero-content flex-col">
                  <div className="card lg:flex-shrink-0 lg:w-full hover:shadow-xl">
                    <form
                      onSubmit={handleSignUp}
                      className="lg:card-body w-[250px] lg:w-[500px]"
                    >
                      <div className="flex justify-center">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Profile Picture</span>
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          name="photo"
                          className="input input-bordered font-sans p-2"
                        />
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
                          <a
                            href="#"
                            className="label-text-alt link link-hover"
                          >
                            Forgot password?
                          </a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-accent">
                          {" "}
                          {isCreatingAccount
                            ? "Creating Account......"
                            : "Create Account"}
                        </button>
                      </div>
                      <div className="flex justify-between">
                        <h3 className="text-black text-sm">
                          Already have an account?
                        </h3>
                        <Link
                          to="/login"
                          className="text-sm font-semibold text-[#163A1E] underline"
                        >
                          Login
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider">OR</div>
            <div className="grid rounded-box place-items-center mb-5">
              <button
                className="btn btn-outline lg:w-96 rounded-full"
                onClick={handleGoogle}
              >
                <BsGoogle></BsGoogle>Google
              </button>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Signup;
