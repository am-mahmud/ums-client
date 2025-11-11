import React, { useEffect, useState, use } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PayBillModal from "../../components/PayBillModal/PayBillModal";

const BillDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [bill, setBill] = useState(null);
  const [isCurrentMonth, setIsCurrentMonth] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  if (!bill) return <LoadingSpinner />;

  return (
    <>

      <title>Bill Details</title>
      
      <div className="max-w-3xl mx-auto py-10 px-10">
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
          <p><strong>Date:</strong> {new Date(bill.date).toISOString().split("T")[0]}</p>
        </div>

        <button
          disabled={!user || !isCurrentMonth}
          onClick={() => setShowModal(true)}
          className={`mt-6 w-full py-3 rounded-md transition font-semibold ${user && isCurrentMonth
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
        >
          {user
            ? isCurrentMonth
              ? "Pay Bill"
              : "Only Current Month Bills Can Be Paid"
            : "Sign In to Pay"}
        </button>

        {showModal && (
          <PayBillModal
            bill={bill}
            user={user}
            close={() => setShowModal(false)}
          />
        )}
      </div>

    </>
  );
};

export default BillDetails;
