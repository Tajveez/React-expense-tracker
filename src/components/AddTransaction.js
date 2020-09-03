import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const addNewTransaction = (e) => {
    e.preventDefault();
    if (text !== "" && amount !== "") {
      const newTransaction = {
        id: Math.floor(Math.random() * 1000000000),
        text,
        amount: parseInt(amount),
      };

      addTransaction(newTransaction);
      setText("");
      setAmount("");
    }
    // console.log(e);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={addNewTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text here..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount..."
            required
          />
          <button className="btn">Add Transaction</button>
        </div>
      </form>
    </>
  );
};
