import React, { useState } from 'react';

const AddBill = () => {

    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState(false);

    const handleAddBill = (e) => {
        e.preventDefault();
        setLoading(true);
        setAdded(false);

        console.log('add bill pressed');


        const form = e.target;

        const newBill = {
            title: form.title.value,
            category: form.category.value,
            amount: Number(form.amount.value),
            location: form.location.value,
            description: form.description.value,
            date: form.date.value,
        };

        fetch("http://localhost:3000/my-bills", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newBill),  
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Bill Added:", data);
                // alert("Bill Added Successfully!");
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
        <div className="max-w-xl mx-auto py-10 text-center">
            <h1 className="text-3xl font-bold">Add New Bill</h1>

            <form onSubmit={handleAddBill} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                    type="text"
                    name="title"
                    placeholder="Bill Title"
                    required
                    className="w-full p-3 border rounded"
                />


                <select
                    name="category"
                    required
                    className="w-full p-3 border rounded"
                >
                    <option value="">Select Category</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Gas">Gas</option>
                    <option value="Water">Water</option>
                    <option value="Internet">Internet</option>
                </select>

                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    required
                    className="w-full p-3 border rounded"
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    required
                    className="w-full p-3 border rounded"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    className="w-full p-3 border rounded"
                ></textarea>

                <input
                    type="date"
                    name="date"
                    required
                    className="w-full p-3 border rounded"
                />
                <div className='col-span-1 md:col-span-2'>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary-ui text-white p-3 rounded"
                    >
                       {added ? "Added" : loading ? "Adding..." : "Add Bill"}
                    </button>
                </div>

            </form>
        </div>
    );

};

export default AddBill;