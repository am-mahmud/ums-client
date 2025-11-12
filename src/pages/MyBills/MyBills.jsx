import { use, useEffect, useState } from "react";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { AuthContext } from "../../contexts/AuthContext";
import EditModal from "../../components/EditModal/EditModal";
import { toast } from "react-toastify";

const MyBills = () => {
    const { user } = use(AuthContext);
    const [myBills, setMyBills] = useState([]);
    const [editBill, setEditBill] = useState(null);


    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:3000/my-bills?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyBills(data));
    }, [user?.email]);

    let totalAmount = 0;

    for (const bill of myBills) {
        totalAmount += Number(bill.amount);
    }

    const remove = async (id) => {
        if (!confirm("Delete this bill?")) return;

        try {
            const res = await fetch(`http://localhost:3000/my-bills/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setMyBills((prev) => prev.filter((b) => b._id !== id));
                toast(<div className="flex items-center gap-2">
                    <TiTickOutline className="text-[#2A7B9B]" />
                    <span>Bill deleted successfully!</span>
                </div>);
            } else {
                toast(
                    <div className="flex items-center gap-2">
                        <MdErrorOutline className="#EDDD53" />
                        <span>Failed to delete bill.</span>
                    </div>
                );

            }
        } catch (error) {
            toast(
                <div className="flex items-center gap-2">
                    <MdErrorOutline className="#EDDD53" />
                    <span>Network error while deleting bill</span>
                </div>
            );

        }
    };

    const dawonloadPdf = () => {
        if (myBills.length === 0) {
            toast(
                <div className="flex items-center gap-2">
                    <MdErrorOutline className="#EDDD53" />
                    <span>No bills available to download!</span>
                </div>
            );
            return;
        }
        const doc = new jsPDF();
        doc.text("My Paid Bills Report", 14, 15);

        const rows = myBills.map((b) => [
            b.username,
            b.email,
            b.amount,
            b.address,
            b.phone,
            b.date,
        ]);

        autoTable(doc, {
            head: [["Username", "Email", "Amount", "Address", "Phone", "Date"]],
            body: rows,
            startY: 25,
        });

        doc.save("MyBills.pdf");

        toast(<div className="flex items-center gap-2">
            <TiTickOutline className="text-[#2A7B9B]" />
            <span>PDF downloaded successfully!</span>
        </div>);
    };

    return (

        <>

            <title>My Bills</title>

            <div className="bg-linear-to-br from-[#2A7B9B]/80 via-[#57C785]/50 to-[#EDDD53]/20">
                <div className="max-w-6xl mx-auto py-10 px-4 min-h-screen">
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
                        onClick={dawonloadPdf}
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
                                            <button onClick={() => setEditBill(bill)} className="bg-green-600 text-white px-3 py-1 rounded text-xs sm:text-sm hover:bg-green-700">
                                                Update
                                            </button>
                                        </td>

                                        <td className="p-2 sm:p-3">
                                            <button onClick={() => remove(bill._id)} className="bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm hover:bg-red-700">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {editBill && (
                            <EditModal
                                bill={editBill}
                                close={() => setEditBill(null)}
                                update={(updated) =>
                                    setMyBills((prev) =>
                                        prev.map((b) => (b._id === updated._id ? updated : b))
                                    )
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        </>


    );
};

export default MyBills;
