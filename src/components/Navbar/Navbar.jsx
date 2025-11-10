import React, { use } from 'react';

import ActiveLink from '../ActiveLink/ActiveLink';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';


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
            <ActiveLink to='/bills'>Bills</ActiveLink>
        </div>

        {
            user && <>
                <div className='flex flex-col md:flex-row md:ml-4 mt-2 md:mt-0 gap-2 md:gap-4'>
                    <ActiveLink to='/bills'>My Bills</ActiveLink>
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
                <a className="text-xl px-1 py-1 font-bold">USM</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className='navbar-end '>

                {user ? (
                    <div>
                        <button onClick={handleSignOut} className="btn-primary-ui">
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-3">
                        <Link to="/signin">
                            <button className="btn-primary-ui">Sign In</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn-primary-ui">Register</button>
                        </Link>
                    </div>
                )}

            </div>

        </div>
    );
};

export default Navbar;