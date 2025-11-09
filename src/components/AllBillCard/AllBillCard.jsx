import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllBillCard = () => {
    const [allBills, setAllBills] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:3000/bills")
            .then((res) => res.json())
            .then((data) => setAllBills(data))
            .catch((err) =>
                console.error("Error fetching bills:", err)
            );
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center text-gray-800 mb-10">
            {allBills.map((bill) => (
                <div
                    key={bill._id}
                    className="border w-96 rounded-xl shadow hover:shadow-lg p-4 bg-white dark:bg-gray-800 text-center"
                >
                    <img
                        src={bill.image}
                        alt={bill.title}
                        className="w-full h-40 object-cover rounded-md"
                    />

                    <h2 className="text-xl font-semibold mt-3">{bill.title}</h2>

                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Category: {bill.category}
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Location: {bill.location}
                    </p>

                    <p className="font-bold mt-2">৳ {bill.amount}</p>

                    <Link to={`/bills/${bill._id}`}>
                        <button className="mt-3 w-full btn-primary-ui text-white py-2">
                            See Details
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AllBillCard;
