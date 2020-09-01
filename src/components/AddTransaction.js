import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text here..."
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
          />
          <button className="btn">Add Transaction</button>
        </div>
      </form>
    </>
  );
};
