// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:5000/expenses")
//       .then(response => setExpenses(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const addExpense = async () => {
//     if (!name || !amount) return;
//     const newExpense = { name, amount: parseFloat(amount) };
//     await axios.post("http://localhost:5000/expense", newExpense);
//     setExpenses([...expenses, newExpense]);
//     setName("");
//     setAmount("");
//   };

//   return (
//     <div className="container mt-5">
//       <motion.h1
//         className="text-center"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Expense Tracker
//       </motion.h1>

//       <div className="row mt-4">
//         <div className="col-md-6 mx-auto">
//           <motion.div
//             className="card p-4 shadow"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder="Expense Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="number"
//               className="form-control mb-2"
//               placeholder="Amount ($)"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//             <motion.button
//               className="btn btn-primary w-100"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={addExpense}
//             >
//               Add Expense
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>

//       <div className="row mt-4">
//         <div className="col-md-6 mx-auto">
//           <motion.ul
//             className="list-group"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             {expenses.map((expense, index) => (
//               <motion.li
//                 key={index}
//                 className="list-group-item d-flex justify-content-between"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <span>{expense.name}</span>
//                 <span className="badge bg-success">${expense.amount}</span>
//               </motion.li>
//             ))}
//           </motion.ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import GetExpenses from "./pages/GetExpenses";
import AddExpense from "./pages/AddExpense";
import UpdateExpense from "./pages/UpdateExpense";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center">Expense Tracker</h1>
        <nav className="nav justify-content-center">
          <Link className="nav-link" to="/">View Expenses</Link>
          <Link className="nav-link" to="/add">Add Expense</Link>
          <Link className="nav-link" to="/update">Update Expense</Link>
        </nav>
        <Routes>
          <Route path="/" element={<GetExpenses />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/update" element={<UpdateExpense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
