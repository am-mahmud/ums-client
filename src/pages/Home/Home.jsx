import React from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Marquee from 'react-fast-marquee';
import BillCard from '../../components/BillCard/BillCard';
import SummarySection from '../../components/SummarySection/SummarySection';
import { AiFillThunderbolt } from 'react-icons/ai';
import { IoWater } from 'react-icons/io5';
import { HiLightBulb } from 'react-icons/hi';

const Home = () => {



    return (
        <div>
            <Banner></Banner>
            {/* <Marquee
                speed={60}
                className="bg-gray-800 p-4 mb-6"
            >
                <div className="text-white text-xl font-bold">
                    <p> Welcome to Utility Management System —
                        Simplify your utility tracking, manage bills efficiently,
                        and stay on top of your payments seamlessly!
                    </p>
                </div>
            </Marquee> */}
            <h1 className="mt-5 mb-5 text-3xl font-bold text-gray-800 text-center">Categories</h1>
            <CategoryCard></CategoryCard>
            <h1 className="mt-5 mb-5 text-3xl font-bold text-gray-800 text-center">Recent Bills</h1>

            <BillCard></BillCard>

            <SummarySection></SummarySection>

            <Marquee className="bg-[#EDDD53] p-4" gradient={false} speed={60}>
                <p className="text-gray-800 font-bold text-lg flex flex-row items-center gap-1">
                    Notice :
                    <AiFillThunderbolt /> Scheduled Power Outage: Mirpur-10, 5 PM - 8 PM |
                    <IoWater /> Water Supply Maintenance: Uttara Sector 5, 10 AM - 2 PM |
                    <HiLightBulb /> Tip: Pay bills online to avoid late fees!
                </p>
            </Marquee>



        </div>
    );
};

export default Home;