import { use, useEffect, useState } from "react";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { AuthContext } from "../../contexts/AuthContext";

const MyBills = () => {
  const { user } = use(AuthContext);
  const [myBills, setMyBills] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-bills?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyBills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching my bills:", err);
        setLoading(false);
      });
  }, [user?.email]);


  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("My Paid Bills Report", 14, 15);

    const tableColumns = [
      "Username",
      "Email",
      "Amount",
      "Address",
      "Phone",
      "Date",
    ];

    const tableRows = myBills.map((bill) => [
      bill.username,
      bill.email,
      bill.amount,
      bill.address,
      bill.phone,
      bill.date,
    ]);

    autoTable(doc, {
      head: [tableColumns],
      body: tableRows,
      startY: 25,
    });

    doc.save("MyBillsReport.pdf");
  };


//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-96 text-lg font-semibold">
//         Loading your bills...
//       </div>
//     );
//   }


  const totalAmount = myBills.reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        My Paid Bills
      </h1>

      <div className="my-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm">
        <p className="text-gray-800 dark:text-gray-200">
          <strong>Total Bills Paid:</strong> {myBills.length}
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          <strong>Total Amount:</strong> ৳{totalAmount}
        </p>
      </div>

      <button
        onClick={downloadPDF}
        className="btn-primary-ui mb-6 text-sm sm:text-base"
      >
        Download Report
      </button>

      <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-full border-collapse border border-gray-200 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-300 text-gray-800">
              <th className="p-2 sm:p-3 border border-gray-300">Username</th>
              <th className="p-2 sm:p-3 border border-gray-300">Email</th>
              <th className="p-2 sm:p-3 border border-gray-300">Amount</th>
              <th className="p-2 sm:p-3 border border-gray-300">Address</th>
              <th className="p-2 sm:p-3 border border-gray-300">Phone</th>
              <th className="p-2 sm:p-3 border border-gray-300">Date</th>
              <th className="p-2 sm:p-3 border border-gray-300">Update</th>
              <th className="p-2 sm:p-3 border border-gray-300">Delete</th>
            </tr>
          </thead>

          <tbody>
            {myBills.map((bill) => (
              <tr
                key={bill._id}
                className="text-center border border-gray-300 hover:bg-gray-50 transition"
              >
                <td className="p-2 sm:p-3">{bill.username}</td>
                <td className="p-2 sm:p-3">{bill.email}</td>
                <td className="p-2 sm:p-3">৳{bill.amount}</td>
                <td className="p-2 sm:p-3">{bill.address}</td>
                <td className="p-2 sm:p-3">{bill.phone}</td>
                <td className="p-2 sm:p-3">{bill.date}</td>

                <td className="p-2 sm:p-3">
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-xs sm:text-sm hover:bg-green-700">
                    Update
                  </button>
                </td>

                <td className="p-2 sm:p-3">
                  <button className="bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBills;
