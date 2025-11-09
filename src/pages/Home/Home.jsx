import React from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Marquee from 'react-fast-marquee';
import BillCard from '../../components/BillCard/BillCard';

const Home = () => {



    return (
        <div>
            <Banner></Banner>
            <Marquee
                speed={60}
                className="bg-gray-800 p-4 mb-6"
            >
                <div className="text-white text-xl font-bold">
                    <p> Welcome to Utility Management System —
                        Simplify your utility tracking, manage bills efficiently,
                        and stay on top of your payments seamlessly!
                    </p>
                </div>
            </Marquee>
            <h1 className="mt-5 mb-5 text-3xl font-bold text-gray-800 text-center">Categories</h1>
            <CategoryCard></CategoryCard>
            <h1 className="mt-5 mb-5 text-3xl font-bold text-gray-800 text-center">Recent Bills</h1>

            <BillCard></BillCard>

            <div className="p-10 bg-gray-100 rounded-lg my-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Payment Summary</h2>
                <div className="flex flex-col md:flex-row justify-around items-center gap-6">
                    <div className="bg-white p-6 rounded-lg shadow w-48 text-center">
                        <h3 className="text-lg font-semibold">Total Paid</h3>
                        <p className="text-2xl font-bold text-green-600">৳12,450</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow w-48 text-center">
                        <h3 className="text-lg font-semibold">Pending Bills</h3>
                        <p className="text-2xl font-bold text-red-600">3</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow w-48 text-center">
                        <h3 className="text-lg font-semibold">Total Bills</h3>
                        <p className="text-2xl font-bold text-blue-600">9</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;