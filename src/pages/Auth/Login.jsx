import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { GoEye, GoEyeClosed } from "react-icons/go";
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { FaGoogle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { RiBillFill } from 'react-icons/ri';

const Login = () => {
  
  const { logInUser, logInWithGoogle } = use(AuthContext);

  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast(<div className="flex items-center gap-2">
        <MdErrorOutline />
        <span>Please fill in all fields.</span>
      </div>);
      return;
    }

    logInUser(email, password)
      .then(result => {
        console.log("Logged in user:", result.user);
        toast(<div className="flex items-center gap-2">
          <RiBillFill className="text-gray-800" />
          <span>Welcome to UMS!</span>
        </div>);
        e.target.reset();
        navigate(location.state?.from || '/');
      })
      .catch(error => {
        console.error("Login error:", error);
        toast(<div className="flex items-center gap-2">
          <MdErrorOutline />
          <span>Invalid email or password!</span>
        </div>);
      });
  };


  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then(() => {
        toast(<div className="flex items-center gap-2">
          <FaGamepad className="text-gray-800" />
          <span>Logged in with Google successfully!</span>
        </div>);
        navigate('/');
      })
      .catch(error => {
        console.error("Google login failed:", error);
        toast(<div className="flex items-center gap-2">
          <MdErrorOutline />
          <span>Google login failed!</span>
        </div>);
      });
  };

  return (
    <>
      <title>Login</title>

      <div className="flex justify-center items-center min-h-screen p-4 space-mono">
        <div className="w-full max-w-sm rounded-lg shadow-xl overflow-hidden bg-[#FAF9F6]">
          <div className="h-8 flex justify-end items-center px-3 bg-[#2A7B9B]" />

    
          <form onSubmit={handleLogin} className="p-6 pt-10 flex flex-col items-center space-y-5">
            <div className="w-full">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 text-lg font-bold rounded-md outline-none border-black border-2 bg-white text-[#444]"
                required
              />
            </div>

            <div className="relative w-full">
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 text-lg font-bold rounded-md outline-none border-black border-2 bg-white text-[#444]"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {show ? <GoEye /> : <GoEyeClosed />}
              </span>
            </div>

            <div className="divider divider-neutral">Or</div>

        
            <button
              type="button"
              onClick={handleGoogleLogIn}
              className="mt-4 py-2 px-6 text-base md:text-xl font-bold rounded-md cursor-pointer btn-primary-ui flex items-center gap-2 md:gap-4"
            >
              <FaGoogle />
              Login With Google
            </button>

            <Link to="/resetpassword" className="text-[#444] underline text-sm">
              Forgot password?
            </Link>

        
            <button
              type="submit"
              className="w-36 mt-4 py-2 px-6 text-base md:text-xl font-bold btn-secondary-ui transition duration-150 hover:opacity-80"
            >
              Enter
            </button>
          </form>

          <p className="text-center pb-4 text-[#444] text-sm">
            Don’t have an account? <Link to="/register" className="underline">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
