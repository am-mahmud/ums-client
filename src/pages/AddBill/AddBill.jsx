import React from 'react';

const AddBill = () => {
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