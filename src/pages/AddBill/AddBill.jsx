import React, { useState } from 'react';

const AddBill = () => {

    const [loading, setLoading] = useState(false);

    const handleAddBill = (e) => {
        e.preventDefault();
        setLoading(true);

        console.log('add bill pressed');
        

        const form = e.target;

        const newBill = {
            title: form.title.value,
            category: form.category.value,
            amount: Number(form.amount.value),
            location: form.location.value,
            description: form.description.value,
            image: form.image.value,
            date: form.date.value,
        };


    };

    return (
        <div className="max-w-xl mx-auto py-10">
            <h1 className="text-3xl font-bold">Add New Bill</h1>

            <form className="mt-6 space-y-4">

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
                    required
                    className="w-full p-3 border rounded"
                ></textarea>

                <input
                    type="date"
                    name="date"
                    required
                    className="w-full p-3 border rounded"
                />

                <button
                    type="submit"
                    className="w-full btn-primary-ui text-white p-3 rounded"
                >
                    {loading ? "Adding..." : "Add Bill"}
                </button>
            </form>
        </div>
    );

};

export default AddBill;