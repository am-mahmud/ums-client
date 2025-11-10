import React, { useEffect, useMemo, useState } from "react";
import { Link} from "react-router";

const AllBillCard = () => {
    const [allBills, setAllBills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [q, setQ] = useState("");
    const [category, setCategory] = useState("");


    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:3000/bills")
            .then((res) => res.json())
            .then((data) => {
                setAllBills(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching bills:", err);
                setLoading(false);
            });
    }, []);

    const filtered = useMemo(() => {
        let result = allBills;

        if (category) result = result.filter((b) => b.category === category);

        if (q) {
            const s = q.toLowerCase();
            result = result.filter(
                (b) =>
                    b.title?.toLowerCase().includes(s) ||
                    b.location?.toLowerCase().includes(s) ||
                    b.category?.toLowerCase().includes(s)
            );
        }

        return result;
    }, [allBills, q, category]);


    return (
    <div className="space-y-4 mb-10">
      <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-start px-10 mx-auto w-full">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search bills..."
          className="p-3 border rounded w-full md:w-1/2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 border rounded w-full md:w-64"
        >
          <option value="">All Categories</option>
          <option value="Electricity">Electricity</option>
          <option value="Gas">Gas</option>
          <option value="Water">Water</option>
          <option value="Internet">Internet</option>
        </select>
      </div>


      {loading ? (
        <div className="text-center py-16">Loading bills…</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16">No bills found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {filtered.map((bill) => (
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