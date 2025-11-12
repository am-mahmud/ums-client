import React, { useState } from "react";
import { toast } from "react-toastify";

const EditModal = ({ bill, close, update }) => {
  const [form, setForm] = useState({
    amount: bill.amount || "",
    address: bill.address || "",
    phone: bill.phone || "",
    date: bill.date || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://ums-server-delta.vercel.app/my-bills/${bill._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      const updated = { ...bill, ...form };
      update(updated);
      toast(<div className="flex items-center gap-2">
        <TiTickOutline className="text-[#2A7B9B]" />
        <span>Update Successful!</span>
      </div>);
      close();
    } else {
      toast(
        <div className="flex items-center gap-2">
          <MdErrorOutline className="#EDDD53" />
          <span>Failed to update bill</span>
        </div>
      );

    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Update Bill</h2>

        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Save
          </button>
          <button
            type="button"
            onClick={close}
            className="flex-1 border py-2 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
