import React from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);

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
            <ActiveLink to='/bills'>About</ActiveLink>
        </div>

        {
            user && <>
                <div className='flex flex-col md:flex-row md:ml-4 mt-2 md:mt-0 gap-2 md:gap-4'>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/bills'>About</ActiveLink>

                </div>

            </>
        }
    </>
    return (
        <div className="navbar bg-[#7cb0c4] shadow-sm text-gray-800 stack-sans ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Bills</a></li>
                    </ul>
                </div>
                <a className="text-xl px-1 py-1 font-bold">USM</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Bills</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn-primary-ui">Login</a>
            </div>
        </div>
    );
};

export default Navbar;