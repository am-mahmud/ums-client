import React, { use } from 'react';

import ActiveLink from '../ActiveLink/ActiveLink';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';


const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);

    const defaultUserPhoto = "https://i.ibb.co.com/nsD8dcGf/user.png";

    const handleSignOut = () => {
        signOutUser()
            .then(() => {

            })
            .catch(error => {
                console.log(error);

            })
    }

    const links = < >
        <div className='flex flex-col md:flex-row gap-4'>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/bills'>Bills</ActiveLink>
        </div>

        {
            user && <>
                <div className='flex flex-col md:flex-row md:ml-4 mt-2 md:mt-0 gap-2 md:gap-4'>
                    <ActiveLink to='/mybills'>My Bills</ActiveLink>
                    <ActiveLink to='/addbills'>Add Bill</ActiveLink>
                </div>

            </>
        }

    </>
    return (
        <div className="navbar bg-[#7cb0c4] shadow-sm text-gray-800 stack-sans ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <RxHamburgerMenu />
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/'>
                    <a className="text-3xl px-1 py-1 font-extrabold">UMS</a>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-4">
                {user ? (
                    <div className="flex items-center gap-3">
                        <Link to="/profile">
                            <img
                                src={user.photoURL || defaultUserPhoto}
                                alt="Profile"
                                className="w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 p-1"
                            />
                        </Link>

                        <button
                            onClick={handleSignOut}
                            className="bg-[#2A7B9B] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#23697F] transition-all duration-300"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-3">
                        <Link to="/signin">
                            <button className="bg-[#2A7B9B] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#23697F] transition-all duration-300">
                                Sign In
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="bg-white text-[#2A7B9B] font-semibold py-2 px-4 rounded-lg border border-[#2A7B9B] hover:bg-[#E0F2F1] transition-all duration-300">
                                Register
                            </button>
                        </Link>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Navbar;