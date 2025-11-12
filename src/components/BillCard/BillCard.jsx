import React, { use, useEffect, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router';

const BillCard = () => {
    const [recentBills, setRecentBills] = useState([]);

    const user = use(AuthContext);

    useEffect(() => {
        fetch('https://ums-server-delta.vercel.app/recent-bills')
            .then(res => res.json())
            .then(data => setRecentBills(data))
            .catch(err => console.error('Error fetching recent bills:', err));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center text-gray-800 mb-10">
            {recentBills.map((bill) => (
                <div
                    key={bill._id}
                    className="border w-96 rounded-xl shadow hover:shadow-lg p-4 bg-white dark:bg-gray-800 text-center"
                >
                    {bill.image ? (
                        <img
                            src={bill.image}
                            alt={""}
                            className="w-full h-40 object-contain rounded-md"
                        />
                    ) : (
                        <div className="w-full h-40 bg-gray-200 rounded grid place-items-center">
                            No Image
                        </div>
                    )}

                    <h2 className="text-xl font-semibold mt-3">{bill.title}</h2>
                    <p className="text-sm text-gray-600">Category: {bill.category}</p>
                    <p className="text-sm text-gray-600">Location: {bill.location}</p>
                    <p className="font-bold mt-2">৳ {bill.amount}</p>

                    <Link to={user ? `/bill-details/${bill._id}` : "/signin"}>
                        <button className="btn-primary-ui w-full mt-3 py-2 text-white">
                            See Details
                        </button>
                    </Link>

                </div>
            ))}
        </div>
    );
};

export default BillCard;