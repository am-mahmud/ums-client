import React from 'react';
import AllBillCard from '../../components/AllBillCard/AllBillCard';

const Bills = () => {

    return (
        <div>
            <h1 className="text-gray-800 text-3xl font-bold text-center mt-5 mb-5">
                All Bills Till Today
            </h1>
            <AllBillCard />
        </div>
    );
};

export default Bills;