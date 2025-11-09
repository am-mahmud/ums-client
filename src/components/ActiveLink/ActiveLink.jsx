import React from 'react';
import { NavLink } from 'react-router';

const ActiveLink = ({to, className, children}) => {
    return (
        <NavLink to={to} className={({isActive}) => isActive ? "text-gray-800" : `${className} font-semibold`}>
                    {children}
        </NavLink>
    );
};

export default ActiveLink;