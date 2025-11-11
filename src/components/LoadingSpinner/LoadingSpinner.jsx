import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>

            <div className="w-full gap-x-2 flex justify-center items-center">
                <div
                    className="w-5 bg-[#2A7B9B] h-5 rounded-full animate-bounce"
                ></div>
                <div
                    className="w-5 h-5 bg-[#57C785] rounded-full animate-bounce"
                ></div>
                <div
                    className="w-5 h-5  bg-[#EDDD53] rounded-full animate-bounce"
                ></div>
            </div>

        </div>
    );
};

export default LoadingSpinner;