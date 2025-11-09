
// import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { use, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
// import { auth } from '../../firebase/firebase.config';
import { GoEye, GoEyeClosed } from "react-icons/go";
import { toast } from 'react-toastify';

import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { SlSocialGoogle } from "react-icons/sl";
import { FaGamepad, FaGoogle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoMdCheckmark } from 'react-icons/io';


const Register = () => {
  const [show, setShow] = useState(false);

  const { createUser, logInWithGoogle } = use(AuthContext)

  const navigate = useNavigate();


  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then(() => {
        toast.success(<div className="flex items-center gap-2">
          <FaGamepad className="text-yellow-300" />
          <span>Logged in with Google successfully!</span>
        </div>, {
          className: "bg-blue-500 text-white font-semibold rounded-lg shadow-lg",
          progressClassName: "bg-white",
        });
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        toast.error(<div className="flex items-center gap-2">
          <MdErrorOutline />
          <span>Google login failed!</span>
        </div>, {
          className: "bg-red-500 text-white font-semibold rounded-lg shadow-lg",
          progressClassName: "bg-white",
        });
      });
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email?.value;
    const password = e.target.password?.value;


    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      if (password.length < 6) {
        toast(<div className="flex items-center gap-2">
          <MdErrorOutline />
          <span>Password must be at least 6 characters long.
          </span>
        </div>
        );
      } 
      else if (!/[A-Z]/.test(password)) {
        toast(<div className="flex items-center gap-2">
          <MdErrorOutline />
          <span>Password must contain at least one uppercase letter.
          </span>
        </div>);
      } 
      else if (!/[a-z]/.test(password)) {
        toast(<div className="flex items-center gap-2">
          <MdErrorOutline />
          <span>Password must contain at least one lowercase letter.
          </span>
        </div>);
      }
      return;
    }


    createUser(email, password)
      .then(result => {
        console.log(result.user);
        toast(<div className="flex items-center gap-2">
          <FaGamepad className="text-yellow-300" />
          <span>Welcome to Gamehub, gamer!</span>
        </div>);
        e.target.reset();
      })
      .catch(error => {
        // console.log(error);
        toast(<div className="flex items-center gap-2">
          <MdErrorOutline />
          <span>Try Again.
          </span>
        </div>);
      });
  };

  return (

    <>


      <title>Register - GameHub</title>


      <div className="flex justify-center items-center min-h-screen p-4">
        <div
          className="w-full max-w-sm rounded-lg shadow-xl overflow-hidden 
                    bg-[#FFF8E1] border-black border-[3px]"
        >
          <div className="h-8 flex justify-end items-center px-3 bg-[#FFD54F]" />

          <form
            onSubmit={handleRegister}
            className="p-6 pt-10 flex flex-col items-center space-y-5"
          >

            <div className="w-full">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full p-3 text-lg font-bold rounded-md outline-none 
                         border-black border-2 bg-[#FFF8E1] text-[#444]"
                required
              />
            </div>

            <div className="w-full">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 text-lg font-bold rounded-md outline-none 
                         border-black border-2 bg-[#FFF8E1] text-[#444]"
                required
              />
            </div>

            <div className="relative w-full">
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 text-lg font-bold rounded-md outline-none 
                         border-black border-2 bg-[#FFF8E1] text-[#444]"
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



            <button onClick={handleGoogleLogIn}
              type="submit"
              className=" mt-4 py-2 px-6 text-base md:text-xl font-bold rounded-md cursor-pointer
                        bg-[#FFC107] border-[#FFD54F] border-2 text-[#444]
                        transition duration-150 hover:opacity-80 flex items-center gap-2 md:gap-4"
            ><span><FaGoogle /></span>
              Proceed With Google
            </button>



            <button
              type="submit"
              className="w-48 mt-6 py-2 px-6 text-base md:text-xl font-bold rounded-md cursor-pointer
                       bg-[#FFC107] border-[#FFD54F] border-2 text-[#444]
                       transition duration-150 hover:opacity-80"
            >
              Get In
            </button>


            <p className="text-center pb-4 text-sm text-[#444] "> Already have an account?{" "}
              <Link to="/login" className="underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>

  );
};

export default Register;
