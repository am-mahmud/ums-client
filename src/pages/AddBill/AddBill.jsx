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
            image: form.image.value || "",
        };

        fetch("http://localhost:3000/bills", {
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

                <input name="amount" type="number" placeholder="Amount" required className="p-3 border rounded" />

                <input name="location" type="text" placeholder="Location" required className="p-3 border rounded" />

                <input name="image" type="text" placeholder="Image URL (optional)" className="p-3 border rounded md:col-span-2" />

                <textarea name="description" placeholder="Description" className="p-3 border rounded md:col-span-2"></textarea>

                <input name="date" type="date" required className="p-3 border rounded md:col-span-2" />

                <div className="md:col-span-2">
                    <button className="btn-primary-ui w-full p-3 text-white rounded" disabled={loading}>
                        {added ? "Added" : loading ? "Adding…" : "Add Bill"}
                    </button>
                </div>

            </form>
        </div>
    );

};

export default AddBill;