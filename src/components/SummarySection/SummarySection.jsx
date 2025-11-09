import React from 'react';

const SummarySection = () => {
    return (
        <div className="p-10 bg-gray-100 rounded-lg my-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Payment Summary</h2>
            <div className="flex flex-col md:flex-row justify-around items-center gap-6">
                <div className="bg-white p-6 rounded-lg shadow w-48 text-center">
                    <h3 className="text-lg font-semibold">Total Paid</h3>
                    <p className="text-2xl font-bold text-green-600">৳12,450</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow w-48 text-center">
                    <h3 className="text-lg font-semibold">Pending Bills</h3>
                    <p className="text-2xl font-bold text-red-600">3</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow w-48 text-center">
                    <h3 className="text-lg font-semibold">Total Bills</h3>
                    <p className="text-2xl font-bold text-gray-800">9</p>
                </div>
            </div>
        </div>
    );
};

export default SummarySection;