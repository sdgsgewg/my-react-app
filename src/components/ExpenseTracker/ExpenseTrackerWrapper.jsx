import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

import { GlobalProvider } from "../../context/GlobalState";

import "./ExpenseTracker.css";

export default function ExpenseTrackerWrapper() {
  return (
    <GlobalProvider>
      <main className="expenseTracker">
        <div className="exp-tracker-container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </main>
    </GlobalProvider>
  );
}
