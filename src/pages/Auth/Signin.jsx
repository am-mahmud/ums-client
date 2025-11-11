import React, { use, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { TiTickOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';

const Signin = () => {

    const {signInUser, signInWithGoogle} = use(AuthContext)

    const [show, setShow] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        const email = e.target.email?.value;
        const password = e.target.password?.value;

        console.log(email);
        console.log(password);


        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                toast(<div className="flex items-center gap-2">
                    <TiTickOutline className="text-gray-800" />
                    <span>Welcome to USM!</span>
                </div>
                );
                navigate(location.state || '/');
            })
            .catch(error => {
                console.error(error);
                toast(<div className="flex items-center gap-2">
                    <MdErrorOutline />
                    <span>Invalid email or password!</span>
                </div>
                );
            });

    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                toast(<div className="flex items-center gap-2">
                    <TiTickOutline className="text-yellow-300" />
                    <span>Sign in with Google successfully!</span>
                </div>);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                toast(<div className="flex items-center gap-2">
                    <MdErrorOutline />
                    <span>Google login failed!</span>
                </div>);
            });
    }

    return (

        <>
            <title>Signin</title>

            <div className="flex justify-center items-center min-h-screen p-4 stack-sans">

                <div
                    className="w-full max-w-sm rounded-lg shadow-xl overflow-hidden 
                    bg-white"
                >
                    <div className="h-8 flex justify-end items-center px-3 bg-[#2A7B9B]" />

                    <form onSubmit={handleSignIn} className="p-6 pt-10 flex flex-col items-center space-y-5">
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
                            Login With Google
                        </button>


                        <button
                            type="submit"
                            className="w-36 mt-4 py-2 px-6 text-base md:text-xl font-bold rounded-md cursor-pointer
                                   btn-primary-ui"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center pb-4 text-[#444] text-sm">
                        Don’t have an account? <Link to='/register' className="underline">Register</Link>
                    </p>
                </div>
            </div>




        </>

    );
};

export default Signin;