import React from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Marquee from 'react-fast-marquee';

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
            <h1 className="mt-10 mb-5 text-3xl font-bold text-gray-800 text-center">Categories</h1>
            <CategoryCard></CategoryCard>


        </div>
    );
};

export default Home;