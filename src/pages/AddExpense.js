import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `${process.env.REACT_APP_API_URL}/expenses`;
    
    if (!name || !amount) {
        alert("Please fill in all fields");
        return;
    }

    try {
        const response = await axios.post(apiUrl, { 
            name, 
            amount: parseFloat(amount) 
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Response:', response.data);
        setName("");
        setAmount("");
        alert("Expense Added!");
        navigate("/");
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        alert(`Failed to add expense: ${error.response?.data?.error || error.message}`);
    }
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
