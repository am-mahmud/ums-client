import React, { use, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {

    const [show, setShow] = useState(false);

    const { signInWithGoogle } = use(AuthContext)


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);

                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email, 
                }

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log("Data Save", data);
                    
                })

            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <>
            <title>Register</title>

            <div className="flex justify-center items-center min-h-screen p-4 stack-sans">

                <div
                    className="w-full max-w-sm rounded-lg shadow-xl overflow-hidden 
                    bg-white"
                >
                    <div className="h-8 flex justify-end items-center px-3 bg-[#2A7B9B]" />

                    <form className="p-6 pt-10 flex flex-col items-center space-y-5">
                        <div className="w-full">
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 text-base rounded-md outline-none 
                                       border-black border-2 bg-white text-[#444]"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 text-base rounded-md outline-none 
                                       border-black border-2 bg-white text-[#444]"
                                required
                            />
                        </div>

                        <div className="relative w-full">
                            <input
                                name="password"
                                type={show ? "text" : "password"}
                                placeholder="xxxxxx"
                                className="w-full p-3 text-base rounded-md outline-none 
                                       border-black border-2 bg-white text-[#444]"
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
                            onClick={handleGoogleSignIn}
                            type="submit"
                            className=" mt-4 py-2 px-6 text-base md:text-xl font-bold rounded-md cursor-pointer
                                   btn-primary-ui flex items-center gap-2 md:gap-4"
                        ><span><FaGoogle /></span>
                            Proceed With Google
                        </button>



                        <Link to='/resetpassword' className="text-[#444] underline text-sm">
                            Forgot password?
                        </Link>


                        <button
                            type="submit"
                            className="w-36 mt-4 py-2 px-6 text-base md:text-xl font-bold rounded-md cursor-pointer
                                   btn-primary-ui"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center pb-4 text-sm text-[#444] "> Already have an account?{" "}
                        <Link to="/signin" className="underline">
                            Sign In
                        </Link>
                    </p>

                </div>
            </div>




        </>
    );
};

export default Register;