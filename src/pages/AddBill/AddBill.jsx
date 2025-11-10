import { div } from 'framer-motion/client';
import React, { useState } from 'react';

const AddBill = () => {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddBill = (e) => {
    e.preventDefault();
    setLoading(true);
    setAdded(false);

    const form = e.target;

    const newBill = {
      billsId: form.billsId.value,
      username: form.username.value,
      phone: form.phone.value,
      address: form.address.value,
      email: form.email.value,
      amount: Number(form.amount.value),
      date: form.date.value,
    };

    fetch("http://localhost:3000/my-bills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBill),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Bill Added:", data);
        setLoading(false);
        setAdded(true);
        form.reset();

        setTimeout(() => setAdded(false), 1500);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className='bg-linear-to-br from-[#2A7B9B]/80 via-[#57C785]/50 to-[#EDDD53]/20'>
      <div className="max-w-xl mx-auto py-10 text-center ">
        <h1 className="text-3xl font-bold">Add New Bill</h1>

        <form onSubmit={handleAddBill} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            name="billsId"
            placeholder="Bill ID (e.g. abc123)"
            required
            className="w-full p-3 border rounded"
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="w-full p-3 border rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            className="w-full p-3 border rounded md:col-span-2"
          />

          <input
            name="amount"
            type="number"
            placeholder="Amount"
            required
            className="p-3 border rounded md:col-span-2"
          />

          <input
            name="date"
            type="date"
            required
            className="p-3 border rounded md:col-span-2"
          />

          <div className="md:col-span-2">
            <button
              className="btn-primary-ui w-full p-3 text-white rounded"
              disabled={loading}
            >
              {added ? "Added" : loading ? "Adding…" : "Add Bill"}
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default AddBill;
