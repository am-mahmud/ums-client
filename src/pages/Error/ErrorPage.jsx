import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold">404</h1>
            <p className="text-xl mt-4">Page Not Found</p>

            <Link to="/">
                <button className="mt-6 btn-primary-ui text-white px-6 py-3 rounded">
                    Go Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;