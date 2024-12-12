import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuidv4 } from "uuid";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (text.trim() === "") {
      alert("Transaction description can't be empty or only spaces");
      return;
    }

    if (text.length > 50) {
      alert("Transaction description must be 50 characters or less");
      return;
    }

    const newTransaction = {
      id: uuidv4(),
      text: text,
      amount: parseInt(amount),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction Description</label>
          <input
            type="text"
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter transaction description (e.g., Buy Book, Eat Out)"
            autoComplete="on"
            list="transaction-suggestions"
          />
          <datalist id="transaction-suggestions">
            <option value="Buy Book" />
            <option value="Eat Out" />
            <option value="Groceries" />
            <option value="Salary" />
            <option value="Rent" />
          </datalist>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="number-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
