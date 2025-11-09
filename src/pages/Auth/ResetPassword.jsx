import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { MdErrorOutline, MdOutlinePassword } from "react-icons/md";

const ResetPassword = () => {

    // const { forgetPassword } = use(AuthContext);

    const handleReset = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        forgetPassword(email)
            .then(() => {
                toast.info(
                    <div className="flex items-center gap-2">
                        <MdOutlinePassword className="text-gray-800" />
                        <span>Password reset link sent!</span>
                    </div>
                );
                e.target.reset();
            })
            .catch((error) => {
                console.error(error);
                toast.error(
                    <div className="flex items-center gap-2">
                        <MdErrorOutline />
                        <span>Failed to send reset link.</span>
                    </div>
                );
            });
    };


    return (

        <>


            <title>Password Reset</title>

            <div className="flex justify-center items-center min-h-screen p-4 space-mono">


                <div
                    className="w-full max-w-sm rounded-lg shadow-xl overflow-hidden 
                    bg-[#FAF9F6]"
                >
                    <div className="h-8 flex justify-end items-center px-3 bg-[#2A7B9B]" />
                    <p className='font-semibold text-center text-xl mt-2 text-[#444]'>Enter your email</p>

                    <form  onSubmit={handleReset} className="p-6 pt-10 flex flex-col items-center space-y-5">
                        <div className="w-full">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 text-lg font-bold rounded-md outline-none 
                                       border-black border-2 bg-white text-[#444]"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 py-2 px-6 text-xl font-bold rounded-md cursor-pointer
                                   btn-primary-ui"
                        >
                            Reset Password
                        </button>
                    </form>

                </div>
            </div>

        </>

    );
};

export default ResetPassword;