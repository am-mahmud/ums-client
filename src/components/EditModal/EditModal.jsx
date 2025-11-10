import React from 'react';

const EditModal = ({ bill, close, update }) => {
    const [form, setForm] = useState(bill);

    const input = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const save = async (e) => {
        e.preventDefault();

        await fetch(`http://localhost:3000/my-bills/${bill._id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(form),
        });

        update(form);
        close();
    };
    return (
        <div className="fixed inset-0 bg-black/30 grid place-items-center p-4">
            <form
                className="bg-white p-6 rounded w-full max-w-lg space-y-3"
                onSubmit={save}
            >
                <h3 className="text-xl font-bold">Edit Payment</h3>

                <input className="p-3 border rounded w-full" name="username" value={form.username} onChange={input} required />
                <input className="p-3 border rounded w-full" name="email" value={form.email} readOnly />
                <input className="p-3 border rounded w-full" name="phone" value={form.phone} onChange={input} required />
                <input className="p-3 border rounded w-full" name="address" value={form.address} onChange={input} required />
                <input className="p-3 border rounded w-full" name="amount" type="number" value={form.amount} onChange={input} required />
                <input className="p-3 border rounded w-full" name="date" type="date" value={form.date} onChange={input} required />

                <button className="btn-primary-ui w-full text-white py-3">Save</button>
                <button type="button" onClick={close} className="w-full border py-3 mt-2 rounded">
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditModal;