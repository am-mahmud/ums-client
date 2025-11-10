import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";

const BillDetails = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const [isCurrentMonth, setIsCurrentMonth] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/bills/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBill(data);

        const billMonth = new Date(data.date).getMonth();
        const currentMonth = new Date().getMonth();

        setIsCurrentMonth(billMonth === currentMonth);
      })
      .catch((err) =>
        console.error("Error fetching bill details:", err)
      );
  }, [id]);

  if (!bill) return <p className="text-center pt-20">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <img
        src={bill.image}
        alt={bill.title}
        className="w-full h-60 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-5">{bill.title}</h1>

      <p className="text-gray-700 mt-3">{bill.description}</p>

      <div className="mt-6 space-y-1">
        <p><strong>Category:</strong> {bill.category}</p>
        <p><strong>Location:</strong> {bill.location}</p>
        <p><strong>Amount:</strong> ৳{bill.amount}</p>
        <p><strong>Date:</strong> {bill.date}</p>
      </div>

      <button
        disabled={!isCurrentMonth}
        className={`mt-6 w-full py-3 rounded-md ${
          isCurrentMonth
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-gray-400 cursor-not-allowed text-black"
        }`}
      >
        {isCurrentMonth
          ? "Pay Bill"
          : "Only Current Month Bills Can Be Paid"}
      </button>
    </div>
  );
};

export default BillDetails;