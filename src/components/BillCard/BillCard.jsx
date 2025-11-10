import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const BillCard = () => {
  const [recentBills, setRecentBills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/recent-bills')
      .then(res => res.json())
      .then(data => setRecentBills(data))
      .catch(err => console.error('Error fetching recent bills:', err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center text-gray-800 mb-10">
      {recentBills.map((recentBill, index) => (
        <div
          key={index}
          className="border w-96 rounded-xl shadow hover:shadow-lg p-4 bg-white dark:bg-gray-800 text-center"
        >
          <img
            src={recentBill.image}
            alt={recentBill.title}
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-3">{recentBill.title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Category: {recentBill.category}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Location: {recentBill.location}
          </p>
          <p className="font-bold mt-2">৳ {recentBill.amount}</p>

          <Link to={`/billdetails/${recentBill._id}`}>
            <button className="mt-3 w-full btn-primary-ui text-white py-2">
              See Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BillCard;
