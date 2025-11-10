import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>

            <div class="w-full gap-x-2 flex justify-center items-center">
                <div
                    class="w-5 bg-[#2A7B9B] animate-pulse h-5 rounded-full animate-bounce"
                ></div>
                <div
                    class="w-5 animate-pulse h-5 bg-[#57C785] rounded-full animate-bounce"
                ></div>
                <div
                    class="w-5 h-5 animate-pulse bg-[#EDDD53] rounded-full animate-bounce"
                ></div>
            </div>

        </div>
    );
};

export default LoadingSpinner;