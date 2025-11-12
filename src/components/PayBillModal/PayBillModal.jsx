import React, { useState } from "react";
import { toast } from "react-toastify";

const PayBillModal = ({ bill, user, close }) => {
 
  // This is another type of form with single on change and taking input in a object 
  
  const [form, setForm] = useState({
    email: user?.email || "",
    billId: bill._id,
    amount: bill.amount,
    username: user?.displayName || "",
    address: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/my-bills", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      toast(<div className="flex items-center gap-2">
        <TiTickOutline className="text-[#2A7B9B]" />
        <span>Payment Successful!</span>
      </div>);

      close();
    } else {
      toast(
        <div className="flex items-center gap-2">
          <MdErrorOutline className="#EDDD53" />
          <span>Failed to submit payment. Try again..</span>
        </div>
      );

    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Pay Bill</h2>

        <input
          type="email"
          name="email"
          value={form.email}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="billId"
          value={form.billId}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="amount"
          value={form.amount}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          value={form.username}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        <input
          type="date"
          name="date"
          value={form.date}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="additionalInfo"
          placeholder="Additional info (optional)"
          value={form.additionalInfo}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Confirm Payment
          </button>
          <button
            type="button"
            onClick={close}
            className="flex-1 border py-3 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayBillModal;
