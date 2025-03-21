import React, { useState } from "react";
import axios from "axios";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/expense", { name, amount: parseFloat(amount) });
    setName("");
    setAmount("");
    alert("Expense Added!");
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Expense Name" className="form-control mb-2" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Amount ($)" className="form-control mb-2" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button className="btn btn-primary w-100" type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
