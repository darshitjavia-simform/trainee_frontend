import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/expense`, { 
      name, 
      amount: parseFloat(amount) 
    });
    setName("");
    setAmount("");
    alert("Expense Added!");
    navigate("/");
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
