import React from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import AllBillCard from '../../components/AllBillCard/AllBillCard';

const Bills = () => {
    
    return (
        <div>
            <h1 className='text-gray-800 font-bold text-3xl text-center mt-5 mb-5'>All Bills Till Today</h1>
                <AllBillCard></AllBillCard>
        </div>
    );
};

export default Bills;