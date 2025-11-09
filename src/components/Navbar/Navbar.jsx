import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import ActiveLink from '../ActiveLink/ActiveLink';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router';


const Navbar = () => {

    // const { user, signOutUser } = use(AuthContext);

    // const handleSignOut = () => {
    //     signOutUser()
    //         .then(() => {

    //         })
    //         .catch(error => {
    //             console.log(error);

    //         })
    // }

    const links = < >
        <div className='flex flex-col md:flex-row gap-4'>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/bills'>Bills</ActiveLink>
        </div>

        {/* {
            user && <>
                <div className='flex flex-col md:flex-row md:ml-4 mt-2 md:mt-0 gap-2 md:gap-4'>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/bills'>About</ActiveLink>

                </div>

            </>
        } */}
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

            <div className='navbar-end'>
               <Link to='/login'><button className='btn-primary-ui'>Login</button></Link> 
            </div>

            {/* {!user ? <Link to='/login'> <button className="btn-primary-ui">Login</button> </Link> : <div className=' flex items-center gap-1'> <Link to="/profile">
                <img
                    src={user.photoURL || "https://i.ibb.co.com/chgmm5K6/retro-game-9.jpg"}
                    alt="Profile"
                    className="w-10 h-10 rounded-lg border-2 border-black cursor-pointer"
                />
            </Link><Link to='/register'><button onClick={handleSignOut} className="btn-primary-ui">Logout</button></Link>

            </div>} */}
        </div>
    );
};

export default Navbar;