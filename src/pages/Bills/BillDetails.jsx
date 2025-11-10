import React, { useEffect, useState,  use } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const BillDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext); 
  const [bill, setBill] = useState(null);
  const [isCurrentMonth, setIsCurrentMonth] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/bills/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.message === "Bill not found") return;
        setBill(data);

        const billDate = new Date(data.date);
        const now = new Date();
        setIsCurrentMonth(
          billDate.getMonth() === now.getMonth() &&
          billDate.getFullYear() === now.getFullYear()
        );
      })
      .catch((err) => console.error("Error fetching bill details:", err));
  }, [id]);

  if (!bill) {
    return <p className="text-center pt-20 text-lg">Loading bill details...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      {bill.image && (
        <img
          src={bill.image}
          alt={bill.title || "Bill image"}
          className="w-full h-60 object-contain rounded-lg"
        />
      )}

      <h1 className="text-3xl font-bold mt-5">{bill.title}</h1>

      {bill.description && (
        <p className="text-gray-700 mt-3">{bill.description}</p>
      )}

      <div className="mt-6 space-y-1">
        <p><strong>Category:</strong> {bill.category}</p>
        <p><strong>Location:</strong> {bill.location}</p>
        <p><strong>Amount:</strong> ৳{bill.amount}</p>
        <p><strong>Date:</strong> {bill.date}</p>
      </div>

      <button
        disabled={!user || !isCurrentMonth}
        onClick={() => console.log("Pay clicked")}
        className={`mt-6 w-full py-3 rounded-md ${
          user && isCurrentMonth
            ? "bg-green-600 text-white"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        {user
          ? isCurrentMonth
            ? "Pay Bill"
            : "Only Current Month Bills Can Be Paid"
          : "Sign In to Pay"}
      </button>
    </div>
  );
};

export default BillDetails;
