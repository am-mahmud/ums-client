import { div } from 'framer-motion/client';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const AddBill = () => {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const { user } = use(AuthContext)
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories", err));
  }, []);

  const handleAddBill = (e) => {
    e.preventDefault();
    setLoading(true);
    setAdded(false);

    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const amount = parseFloat(form.amount.value);
    const description = form.description.value;
    const date = new Date();

    const newBill = {
      title,
      category,
      amount,
      description,
      date,
      image: "https://i.ibb.co.com/Y4VwJkNw/thunder.png",
      createdBy: user?.email,
    };

    fetch("http://localhost:3000/bills", {
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

        <form onSubmit={handleAddBill} className="mt-6">
    
          <div>
            <label className="block text-start mb-1 font-medium">Bill Title</label>
            <input name="title" type="text" required className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-start mb-1 font-medium">Category</label>
            <select name="category" required className="w-full border p-2 rounded">
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.title}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-start mb-1 font-medium">Amount ($)</label>
            <input name="amount" type="number" step="0.01" required className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block  text-start mb-1 font-medium">Description</label>
            <textarea name="description" rows="3" required className="w-full border p-2 rounded"></textarea>
          </div>


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
