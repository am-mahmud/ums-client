import React, { use } from 'react';

import userManImg from '../../assets/man.png'
import userWomanImg from '../../assets/woman.png'
import { Link } from 'react-router';
import { ThemeContext } from '../../contexts/ThemeContext';
import {Typewriter} from 'react-simple-typewriter'

const Banner = () => {
    const { isDark } = use(ThemeContext);

    return (
        <section className={`relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 ${isDark
            ? "bg-gray-900 text-white"
            : "bg-linear-to-br from-[#2A7B9B]/60 via-[#57C785]/40 to-[#EDDD53]/20 text-gray-900"}`}>

            <div className="absolute inset-0 bg-white/30 mix-blend-overlay"></div>

            <div className="relative max-w-5xl mx-auto px-6">

                <div className="inline-flex items-center bg-white/70 px-4 py-2 rounded-full mb-6 shadow-md backdrop-blur-sm">
                    <img
                        src={userManImg}
                        alt=""
                        className="w-6 h-6 rounded-full -ml-2 border border-white"
                    />
                    <img
                        src={userWomanImg}
                        alt=""
                        className="w-6 h-6 rounded-full -ml-2 border border-white"
                    />
                    <span className="ml-1 md:ml-3 text-xs md:text-sm font-thin md:font-semibold text-gray-800">
                        12,340+ Users Managing Their Bills Effortlessly
                    </span>
                </div>


                <h1 className={`text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-sm ${isDark ? "text-white" : "text-gray-900 "}`}>
                    SMART <span> <Typewriter words={['UTILITY BILL']} loop={false} typeSpeed={70} deleteSpeed={50}></Typewriter>  </span> 
                </h1>
                <h2 className={`text-4xl md:text-6xl font-light ${isDark ? "text-white" : "text-gray-900 "}`}>
                   <span> <Typewriter words={['MANAGEMENT SYSTEM']} loop={false} typeSpeed={60} deleteSpeed={40}></Typewriter>  </span>  
                </h2>


                <p className={`mt-6 text-lg  font-medium max-w-2xl mx-auto ${isDark ? "text-white" : "text-gray-900 "}`}>
                    Simplify your <span className="font-semibold">Electricity</span>,{" "}
                    <span className="font-semibold">Gas</span>, <span className="font-semibold">Water</span>, and{" "}
                    <span className="font-semibold">Internet</span> payments — all from one dashboard.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <Link to={'/signin'}>
                        <button className="btn-primary-ui">
                            Get Started
                        </button>
                    </Link>

                    <Link to={'/about'}>
                        <button className="btn-secondary-ui">
                            Learn More
                        </button>
                    </Link>

                </div>
            </div>
        </section>


    );
};

export default Banner;