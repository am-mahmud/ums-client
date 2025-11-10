import React, { useState } from 'react';

const AddBill = () => {

    const [loading, setLoading] = useState(false);

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