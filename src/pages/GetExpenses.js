import React, { useEffect, useState } from "react";
import axios from "axios";

const GetExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/expenses`;
    axios.get(apiUrl)
      .then(response => setExpenses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Expenses</h2>
      <ul className="list-group">
        {expenses.map((expense) => (
          <li key={expense._id} className="list-group-item d-flex justify-content-between">
            <span>{expense.name}</span>
            <span className="badge bg-success">${expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetExpenses;
