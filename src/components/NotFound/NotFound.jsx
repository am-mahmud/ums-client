import React from 'react';
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center bg-linear-to-br from-[#2A7B9B]/80 via-[#57C785]/70 to-[#EDDD53]/70 relative overflow-hidden">

            <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse"></div>


            <motion.div
                className="relative z-10 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <FaExclamationTriangle className="text-6xl text-yellow-400 mb-4 animate-bounce" />
                <h1 className="text-8xl md:text-9xl font-extrabold text-gray-800 drop-shadow-lg">
                    404
                </h1>
                <p className="text-2xl text-white/90 mt-4 font-semibold">
                    Oops! Page Not Found
                </p>
                <p className="text-white/80 max-w-md mt-3 text-lg">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link to="/">
                    <button className="mt-8 btn-secondary-ui">
                        Go Back Home
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;