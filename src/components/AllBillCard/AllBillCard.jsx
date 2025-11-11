import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AllBillCard = () => {
  const [allBills, setAllBills] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  //Server - CLinet filter

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  useEffect(() => {
    setLoading(true);
    const url = category
      ? `http://localhost:3000/bills?category=${encodeURIComponent(category)}`
      : "http://localhost:3000/bills";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch bills");
        return res.json();
      })
      .then((data) => {
        setAllBills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bills:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <LoadingSpinner></LoadingSpinner>
    );
  }


  return (
    <div className="space-y-4 mb-10">
      <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-start px-10 mx-auto w-full">
        {/* <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Search bills By Category"
          className="p-3 border rounded w-full md:w-1/2"
        /> */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 border rounded w-full md:w-64"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.title}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>


      {loading ? (
        <div className="text-center py-16">Loading bills…</div>
      ) : allBills.length === 0 ? (
        <div className="text-center py-16">No bills found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {allBills.map((bill) => (
            <div
              key={bill._id}
              className="border w-96 rounded-xl shadow hover:shadow-lg p-4 bg-white dark:bg-gray-800 text-center"
            >
              {bill.image ? (
                <img
                  src={bill.image}
                  alt={""}
                  className="w-full h-40 object-contain rounded"
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

              <Link to={`/bill-details/${bill._id}`}>
                <button className="btn-primary-ui w-full mt-3 py-2 text-white">
                  See Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBillCard;