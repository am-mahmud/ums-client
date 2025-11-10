import React, { use } from 'react';

import ActiveLink from '../ActiveLink/ActiveLink';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router';


const Navbar = () => {

   

    const links = < >
        <div className='flex flex-col md:flex-row gap-4'>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/bills'>Bills</ActiveLink>
        </div>

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

            <div className='navbar-end flex gap-2 '>
                <div>
                    <Link to='/login'><button className='btn-primary-ui'>Login</button></Link>
                </div>

                <div>
                    <Link to='/register'><button className='btn-primary-ui'>Register</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;