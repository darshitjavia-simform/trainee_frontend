import React, { useState } from "react";
import axios from "axios";

const UpdateExpense = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/expense/${id}`, { name, amount: parseFloat(amount) });
    setId("");
    setName("");
    setAmount("");
    alert("Expense Updated!");
  };

  return (
    <div>
      <h2>Update Expense</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Expense ID" className="form-control mb-2" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" placeholder="New Name" className="form-control mb-2" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="New Amount ($)" className="form-control mb-2" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button className="btn btn-warning w-100" type="submit">Update Expense</button>
      </form>
    </div>
  );
};

export default UpdateExpense;
